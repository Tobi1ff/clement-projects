import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { seoPages } from './seo-data.mjs';
import { seoConfig, canonicalUrl } from './seo.mjs';

const root = resolve(import.meta.dirname, '..');
const out = resolve(root, 'dist');
const read = file => readFileSync(resolve(out, file), 'utf8');
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const preview = process.env.SEO_PREVIEW === '1' || process.env.VERCEL_ENV === 'preview';
const localUrl = url => {
  const value = new URL(url);
  assert.equal(value.origin, seoConfig.origin);
  assert.equal(value.search, '');
  const file = value.pathname === '/' ? 'index.html' : decodeURIComponent(value.pathname.slice(1));
  assert.ok(existsSync(resolve(out, file)), `Missing public URL: ${url}`);
};
const files = readdirSync(out).filter(file => file.endsWith('.html'));
assert.deepEqual(files.sort(), Object.keys(seoPages).sort(), 'Every page needs explicit SEO data');
const titles = new Set(), descriptions = new Set();
for (const file of files) {
  const html = read(file), page = seoPages[file];
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const description = html.match(/<meta name="description" content="([^"]*)">/)?.[1];
  assert.ok(title && description);
  assert.ok(!titles.has(title), `${file}: duplicate title`); titles.add(title);
  assert.ok(!descriptions.has(description), `${file}: duplicate description`); descriptions.add(description);
  const canonicals = [...html.matchAll(/<link rel="canonical" href="([^"]*)">/g)];
  assert.equal(canonicals.length, 1); assert.equal(canonicals[0][1], canonicalUrl(file));
  const indexable = page.indexable !== false && !preview;
  assert.ok(html.includes(`<meta name="robots" content="${indexable ? 'index, follow, max-image-preview:large' : 'noindex, follow'}">`));
  for (const key of ['og:title','og:description','og:url','og:image','og:image:alt']) assert.ok(html.includes(`property="${key}"`), `${file}: ${key}`);
  for (const [, url] of html.matchAll(/<meta property="og:(?:url|image)" content="([^"]*)">/g)) localUrl(url);
  assert.ok(html.includes('name="twitter:card"'));
  assert.ok(!html.includes('Inter.ttf'));
  const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1]);
  const graph = schema['@graph'];
  assert.equal(schema['@context'], 'https://schema.org');
  assert.equal(graph.filter(node => node['@type'] === 'LocalBusiness').length, 1);
  const business = graph.find(node => node['@type'] === 'LocalBusiness');
  assert.equal(business.email, 'info@clementprojectssolution.co.za');
  assert.equal(business.address.addressLocality, 'Phalaborwa');
  assert.deepEqual(business.sameAs, seoConfig.business.sameAs);
  for (const key of ['aggregateRating','review','openingHours','priceRange','geo']) assert.equal(business[key], undefined);
  if (page.service) assert.equal(graph.find(node => node['@type'] === 'Service').provider['@id'], business['@id']);
  if (!['index.html','404.html'].includes(file)) {
    const trail = graph.find(node => node['@type'] === 'BreadcrumbList').itemListElement;
    assert.equal(trail.at(-1).item, canonicalUrl(file));
    trail.forEach((item, i) => { assert.equal(item.position, i+1); localUrl(item.item); });
  }
  for (const [, tag] of html.matchAll(/<(img\b[^>]*srcset="[^"]+"[^>]*>)/g)) {
    assert.match(tag, /width="\d+"/); assert.match(tag, /height="\d+"/); assert.match(tag, /sizes="[^"]+"/);
    for (const entry of tag.match(/srcset="([^"]+)"/)[1].split(', ')) {
      const [path, size] = entry.split(' '); assert.match(size, /^\d+w$/); assert.ok(existsSync(resolve(out, path)));
    }
  }
  assert.ok(!/<img[^>]*loading="lazy"[^>]*fetchpriority="high"/.test(html));
}
const sitemap = read('sitemap.xml');
assert.match(sitemap, /xmlns="http:\/\/www.sitemaps.org\/schemas\/sitemap\/0.9"/);
const listed = [...sitemap.matchAll(/<url><loc>([^<]+)<\/loc>/g)].map(match => match[1]);
const expected = files.filter(file => seoPages[file].indexable !== false && !preview).map(canonicalUrl);
assert.deepEqual(listed.sort(), expected.sort());
assert.equal(new Set(listed).size, listed.length);
for (const [, url] of sitemap.matchAll(/<(?:loc|image:loc)>([^<]+)<\/(?:loc|image:loc)>/g)) localUrl(url);
for (const [, date] of sitemap.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)) { assert.match(date, /^\d{4}-\d{2}-\d{2}$/); assert.ok(Date.parse(date) <= Date.now()); }
assert.ok(!/privacy\.html|404\.html|chatgpt\.site|glossygnat/.test(sitemap));
assert.ok(read('robots.txt').includes('Allow: /'));
assert.equal(read('robots.txt').includes(`Sitemap: ${seoConfig.origin}/sitemap.xml`), !preview);
assert.ok(!/Disallow|noindex/i.test(read('robots.txt')));
const delivery = JSON.parse(readFileSync(resolve(root, 'assets/image-delivery.json'), 'utf8')).images;
for (const [file, image] of Object.entries(delivery)) {
  assert.equal(hash(readFileSync(resolve(root, 'assets', file))), image.sourceSha256);
  for (const variant of image.variants) {
    const bytes = readFileSync(resolve(out, 'assets', variant.file));
    assert.equal(hash(bytes), variant.sha256); assert.equal(bytes.subarray(8,12).toString(), 'WEBP');
  }
}
if (existsSync(resolve(root, '../vercel.json'))) {
  const vercel = JSON.parse(readFileSync(resolve(root, '../vercel.json'), 'utf8'));
  assert.ok(!vercel.rewrites, 'Preserve real 404 responses');
  assert.ok(vercel.redirects.some(rule => rule.source === '/index.html' && rule.destination === '/' && rule.permanent));
  assert.ok(vercel.headers.some(rule => rule.source === '/downloads/:file*' && rule.headers.some(header => header.key === 'X-Robots-Tag' && header.value === 'noindex')));
}
console.log(`Passed SEO: ${files.length} unique page heads, ${listed.length} canonical sitemap URLs, schema, robots, responsive images, source hashes and hosting rules (${preview ? 'preview' : 'production'}).`);
