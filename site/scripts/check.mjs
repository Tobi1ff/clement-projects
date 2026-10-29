import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import assert from 'node:assert/strict';

const root = resolve(import.meta.dirname, '../dist');
const pages = readdirSync(root).filter(name => name.endsWith('.html'));
const idsByPage = new Map();
let checkedLinks = 0;
for (const page of pages) {
  const html = readFileSync(resolve(root, page), 'utf8');
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(x => x[1]);
  assert.equal(new Set(ids).size, ids.length, `${page}: duplicate id`);
  idsByPage.set(page, new Set(ids));
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1, `${page}: must have one main heading`);
  assert.match(html, /<title>[^<]+<\/title>/, `${page}: missing title`);
  assert.match(html, /<meta name="description" content="[^"]+">/, `${page}: missing description`);
  assert.match(html, /<html lang="en-ZA">/, `${page}: missing language`);
  assert.match(html, /<main id="main">/, `${page}: missing main landmark`);
  for (const [, tag] of html.matchAll(/<(img\b[^>]*>)/g)) assert.match(tag, /\balt="[^"]*"/, `${page}: image needs alt attribute`);
  assert.ok(!/\b(?:src|href)="(?:undefined|null|#)"/.test(html), `${page}: placeholder URL`);
}
for (const page of pages) {
  const html = readFileSync(resolve(root, page), 'utf8');
  for (const [, reference] of html.matchAll(/\b(?:href|src)="([^"]*)"/g)) {
    if (!reference || /^(?:https?:|mailto:|tel:|data:)/.test(reference)) continue;
    const [pathAndQuery, hash] = reference.split('#');
    const target = pathAndQuery.split('?')[0] || page;
    const destination = resolve(dirname(resolve(root, page)), decodeURIComponent(target));
    assert.ok(destination.startsWith(root), `${page}: path leaves distribution directory`);
    assert.ok(existsSync(destination), `${page}: missing ${reference}`);
    assert.ok(statSync(destination).isFile(), `${page}: not a file: ${reference}`);
    if (hash) {
      const targetPage = destination.slice(root.length + 1);
      assert.ok(idsByPage.get(targetPage)?.has(hash), `${page}: missing anchor ${reference}`);
    }
    checkedLinks++;
  }
}
const css = readFileSync(resolve(root, 'styles.css'), 'utf8');
for (const [, path] of css.matchAll(/url\(['"]?([^'")]+)['"]?\)/g)) assert.ok(existsSync(resolve(root, path)), `CSS: missing ${path}`);
assert.match(css, /prefers-reduced-motion/);
assert.match(css, /focus-visible/);
const contact = readFileSync(resolve(root, 'contact.html'), 'utf8');
for (const [, id] of contact.matchAll(/<(?:input|select|textarea)\b[^>]*\bid="([^"]+)"/g)) assert.ok(contact.includes(`for="${id}"`), `Contact field ${id} has no label`);
for (const file of ['cps-industrial-construction-profile.pdf', 'cps-agriculture-profile.pdf']) {
  assert.equal(readFileSync(resolve(root, 'downloads', file)).subarray(0, 5).toString(), '%PDF-', `${file}: invalid PDF`);
}
console.log(`Passed: ${pages.length} pages, ${checkedLinks} local references, unique IDs, heading structure, form labels, image alternatives, both PDF downloads and accessibility CSS.`);
