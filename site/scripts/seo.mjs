import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync, cpSync } from 'node:fs';
import { resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { seoPages } from './seo-data.mjs';
import { agriculturePhotos } from './agriculture-gallery-data.mjs';
import { constructionPhotos } from './construction-gallery-data.mjs';

const root = resolve(import.meta.dirname, '..');
export const seoConfig = JSON.parse(readFileSync(resolve(root, 'seo.config.json'), 'utf8'));
const origin = new URL(seoConfig.origin).origin;
if (!origin.startsWith('https://') || seoConfig.origin !== origin) throw new Error('SEO origin must be an HTTPS origin without a path or trailing slash');
export const canonicalUrl = file => `${origin}/${file === 'index.html' ? '' : file}`;
const absolute = path => new URL(path, `${origin}/`).href;
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const jsonLd = data => JSON.stringify(data).replace(/</g, '\\u003c');
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const preview = process.env.SEO_PREVIEW === '1' || process.env.VERCEL_ENV === 'preview';
const assetManifest = JSON.parse(readFileSync(resolve(root,'assets/assets-manifest.json'),'utf8'));
const delivery = JSON.parse(readFileSync(resolve(root,'assets/image-delivery.json'),'utf8')).images;
const photoNames = new Set(Object.keys(delivery));
const voidTags = new Set(['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr']);

function imageInfo(name) {
  const original = name === assetManifest.logo.file ? assetManifest.logo : assetManifest.assets.find(a => a.file === name) || {};
  return { ...original, ...delivery[name] };
}
function usableDelivery(name) {
  const item = delivery[name];
  if (!item) return null;
  // New or changed photographs can still build using their original image.
  return hash(readFileSync(resolve(root,'assets',name))) === item.sourceSha256 ? item : null;
}
function responsiveImages(html) {
  const stack = [];
  return html.replace(/<\/?([a-z][\w:-]*)\b[^>]*>/gi, (tag, rawName) => {
    const name = rawName.toLowerCase();
    if (tag.startsWith('</')) {
      const index = stack.findLastIndex(item => item.name === name);
      if (index >= 0) stack.splice(index);
      return tag;
    }
    if (name === 'img') {
      const original = tag.match(/\bsrc="assets\/([^\"]+)"/)?.[1];
      const image = original && usableDelivery(original);
      if (!image) return tag;
      const variants = image.variants;
      const classes = stack.flatMap(item => item.classes);
      const hero = classes.some(c => ['home-hero','service-hero','parts-hero','ag-gallery-hero','accessories-hero'].includes(c));
      const gallery = classes.includes('ag-photo-card');
      const threeColumns = classes.includes('ag-preview-grid') || classes.includes('service-image');
      const sizes = hero
        ? '(max-width: 800px) calc(100vw - 44px), 52vw'
        : gallery
          ? '(max-width: 560px) calc(100vw - 44px), (max-width: 800px) 50vw, 33vw'
          : threeColumns
            ? '(max-width: 560px) calc(100vw - 44px), (max-width: 800px) 50vw, 33vw'
            : '(max-width: 800px) calc(100vw - 44px), 50vw';
      const fallback = variants.find(v => v.width >= Math.min(800,image.width)) || variants.at(-1);
      tag = tag.replace(/\bsrc="[^"]+"/, `src="assets/${fallback.file}"`);
      tag = tag.replace(/\s(?:srcset|sizes|decoding)="[^"]*"/g, '');
      tag = tag.replace(/\bwidth="\d+"/, `width="${image.width}"`).replace(/\bheight="\d+"/, `height="${image.height}"`);
      if (hero) {
        tag = tag.replace(/\s(?:loading|fetchpriority)="[^"]*"/g,'');
        tag = tag.replace(/>$/, ' loading="eager" fetchpriority="high">');
      }
      return tag.replace(/>$/, ` srcset="${variants.map(v => `assets/${v.file} ${v.width}w`).join(', ')}" sizes="${sizes}" decoding="async">`);
    }
    if (!voidTags.has(name) && !tag.endsWith('/>')) stack.push({ name, classes: (tag.match(/\bclass="([^"]*)"/)?.[1] || '').split(/\s+/) });
    return tag;
  });
}
function structuredData(file, page, mainHtml) {
  const url = canonicalUrl(file);
  const business = seoConfig.business;
  const businessId = `${origin}/#business`;
  const websiteId = `${origin}/#website`;
  const logo = { '@type':'ImageObject', '@id':`${origin}/#logo`, url:absolute('assets/cps-logo.png'), contentUrl:absolute('assets/cps-logo.png'), width:515, height:258 };
  const organization = {
    '@type':'LocalBusiness', '@id':businessId, name:business.name, legalName:business.legalName,
    url:`${origin}/`, logo:{'@id':logo['@id']}, image:absolute('assets/construction-team.jpg'), telephone:business.telephone, email:business.email,
    address:{'@type':'PostalAddress', streetAddress:business.streetAddress, addressLocality:business.addressLocality, addressRegion:business.addressRegion, postalCode:business.postalCode, addressCountry:business.addressCountry},
    sameAs:business.sameAs,
    contactPoint:[{'@type':'ContactPoint', contactType:'General enquiries', email:business.email, telephone:business.telephone, url:absolute('contact.html')},{'@type':'ContactPoint', contactType:'Sales', email:business.salesEmail, telephone:business.telephone, url:absolute('contact.html')},{'@type':'ContactPoint', contactType:'WhatsApp', telephone:business.whatsapp, url:'https://wa.me/27656918895'}],
    founder:{'@type':'Person', name:'Shai Clement', url:absolute('about.html#founder')},
  };
  const webPage = {'@type':page.type || 'WebPage','@id':`${url}#webpage`, url, name:page.title, description:page.description, inLanguage:seoConfig.language, isPartOf:{'@id':websiteId}, about:{'@id':businessId}};
  const graph = [logo, organization, {'@type':'WebSite','@id':websiteId, url:`${origin}/`, name:seoConfig.siteName, inLanguage:seoConfig.language, publisher:{'@id':businessId}}, webPage];
  const mainImages = new Set([...mainHtml.matchAll(/\bsrc="assets\/([^\"]+)"/g)].map(m=>m[1]));
  if (mainImages.has(page.image)) webPage.primaryImageOfPage = {'@type':'ImageObject', url:absolute(`assets/${page.image}`)};
  if (file !== 'index.html' && file !== '404.html') {
    const trail = ['index.html', ...(page.parents || []), file];
    const breadcrumb = {'@type':'BreadcrumbList','@id':`${url}#breadcrumb`, itemListElement:trail.map((name,index)=>({'@type':'ListItem',position:index+1,name:seoPages[name].label,item:canonicalUrl(name)}))};
    webPage.breadcrumb = {'@id':breadcrumb['@id']}; graph.push(breadcrumb);
  }
  if (page.service) {
    const service = {'@type':'Service','@id':`${url}#service`, name:page.service, serviceType:page.service, url, description:page.description, provider:{'@id':businessId}, areaServed:{'@type':'City',name:'Phalaborwa'}};
    webPage.mainEntity = {'@id':service['@id']}; graph.push(service);
  }
  if (page.gallery) {
    const photos = page.gallery === 'construction' ? constructionPhotos : agriculturePhotos;
    webPage.hasPart = photos.map(photo => ({'@type':'ImageObject', name:photo.title, caption:photo.alt, contentUrl:absolute(`assets/${photo.file}`), width:photo.width, height:photo.height}));
  }
  return {'@context':'https://schema.org','@graph':graph};
}

export function finalizeSiteSeo(out) {
  cpSync(resolve(root,'assets/optimized'),resolve(out,'assets/optimized'),{recursive:true});
  const revisionsPath = resolve(root,'seo/page-revisions.json');
  const previous = existsSync(revisionsPath) ? JSON.parse(readFileSync(revisionsPath,'utf8')) : {};
  const revisions = {}, sitemap = [];
  const files = readdirSync(out).filter(name => name.endsWith('.html')).sort();
  for (const file of files) {
    const page = seoPages[file];
    if (!page) throw new Error(`Add SEO data for ${file}`);
    const path = resolve(out,file);
    let html = readFileSync(path,'utf8');
    const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1] || '';
    const url = canonicalUrl(file);
    const indexable = page.indexable !== false && !preview;
    const info = imageInfo(page.image);
    const imageUrl = absolute(`assets/${page.image}`);
    const tags = [
      `<link rel="canonical" href="${url}">`,
      `<meta name="robots" content="${indexable ? 'index, follow, max-image-preview:large' : 'noindex, follow'}">`,
      `<meta property="og:type" content="website">`,
      `<meta property="og:locale" content="${seoConfig.locale}">`,
      `<meta property="og:site_name" content="${escape(seoConfig.siteName)}">`,
      `<meta property="og:title" content="${escape(page.title)}">`,
      `<meta property="og:description" content="${escape(page.description)}">`,
      `<meta property="og:url" content="${url}">`,
      `<meta property="og:image" content="${imageUrl}">`,
      `<meta property="og:image:alt" content="${escape(page.image === 'cps-logo.png' ? seoConfig.siteName : info.description || page.label)}">`,
      `<meta property="og:image:type" content="${page.image.endsWith('.png') ? 'image/png' : 'image/jpeg'}">`,
      ...(info.width && info.height ? [`<meta property="og:image:width" content="${info.width}">`,`<meta property="og:image:height" content="${info.height}">`] : []),
      `<meta name="twitter:card" content="summary_large_image">`,
      `<meta name="twitter:title" content="${escape(page.title)}">`,
      `<meta name="twitter:description" content="${escape(page.description)}">`,
      `<meta name="twitter:image" content="${imageUrl}">`,
      `<meta name="twitter:image:alt" content="${escape(page.image === 'cps-logo.png' ? seoConfig.siteName : info.description || page.label)}">`,
      `<link rel="icon" href="favicon.png" type="image/png" sizes="48x48">`,
      `<link rel="apple-touch-icon" href="apple-touch-icon.png" sizes="180x180">`,
      `<script type="application/ld+json">${jsonLd(structuredData(file,page,main))}</script>`,
    ];
    if (seoConfig.googleSiteVerification) tags.push(`<meta name="google-site-verification" content="${escape(seoConfig.googleSiteVerification)}">`);
    if (seoConfig.bingSiteVerification) tags.push(`<meta name="msvalidate.01" content="${escape(seoConfig.bingSiteVerification)}">`);
    html = html.replace(/<title>[\s\S]*?<\/title>/,`<title>${escape(page.title)}</title>`).replace(/<meta name="description" content="[^"]*">/,`<meta name="description" content="${escape(page.description)}">`).replace('</head>',tags.join('')+'</head>');
    html = responsiveImages(html);
    writeFileSync(path,html);
    const digest = hash(html);
    const modified = previous[file]?.hash === digest ? previous[file].modified : new Date().toISOString().slice(0,10);
    revisions[file] = {hash:digest,modified};
    if (indexable) {
      const images = [...new Set([...main.matchAll(/\bsrc="assets\/([^\"]+)"/g)].map(m=>m[1]).filter(name=>photoNames.has(name)))];
      sitemap.push(`<url><loc>${escape(url)}</loc><lastmod>${modified}</lastmod>${images.map(name=>`<image:image><image:loc>${escape(absolute(`assets/${name}`))}</image:loc></image:image>`).join('')}</url>`);
    }
  }
  writeFileSync(revisionsPath,JSON.stringify(revisions,null,2)+'\n');
  writeFileSync(resolve(out,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${sitemap.join('\n')}\n</urlset>\n`);
  writeFileSync(resolve(out,'robots.txt'),`User-agent: *\nAllow: /\n${preview ? '' : `\nSitemap: ${origin}/sitemap.xml\n`}`);
  const csv = value => `"${String(value).replace(/"/g,'""')}"`;
  writeFileSync(resolve(root,'seo/keyword-map.csv'), ['URL,Page,Primary topic,Supporting topics',...files.filter(file=>seoPages[file].indexable!==false).map(file=>[canonicalUrl(file),seoPages[file].label,seoPages[file].keywords[0]||'',seoPages[file].keywords.slice(1).join('; ')].map(csv).join(','))].join('\n')+'\n');
  const inventory = { origin, preview, indexablePages:sitemap.length, pages:files.map(file=>({file,canonical:canonicalUrl(file),title:seoPages[file].title,description:seoPages[file].description,indexable:seoPages[file].indexable!==false&&!preview})) };
  writeFileSync(resolve(root,'seo/page-inventory.json'),JSON.stringify(inventory,null,2)+'\n');
  console.log(`SEO prepared: ${files.length} page heads, ${sitemap.length} sitemap URLs, local business/service/breadcrumb data and responsive image delivery.`);
}
