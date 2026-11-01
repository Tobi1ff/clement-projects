// Optional maintenance tooling. Normal builds use the committed delivery manifest.
// Install sharp separately, or set CPS_SHARP_MODULE to an existing sharp module.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { agriculturePhotos } from './agriculture-gallery-data.mjs';
import { constructionPhotos } from './construction-gallery-data.mjs';
const { default: sharp } = await import(process.env.CPS_SHARP_MODULE || 'sharp');
const root = resolve(import.meta.dirname, '..');
const folder = resolve(root, 'assets/optimized');
mkdirSync(folder, { recursive: true });
const names = [...new Set(['construction-team.jpg', 'construction-drainage.jpg', 'mining-pumps.jpg', 'pump-repair.jpg', 'lifting-rigging.jpg', ...agriculturePhotos.map(p => p.file), ...constructionPhotos.map(p => p.file)])].sort();
const images = {};
let originalBytes = 0, deliveryBytes = 0;
for (const name of names) {
  const source = readFileSync(resolve(root, 'assets', name));
  const meta = await sharp(source).metadata();
  const widths = [...new Set([480, 800, 1200, Math.min(1600, meta.width)].filter(w => w <= meta.width))].sort((a,b) => a-b);
  const variants = [];
  for (const width of widths) {
    const { data, info } = await sharp(source).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 78, effort: 5 }).toBuffer({ resolveWithObject: true });
    const hash = createHash('sha256').update(data).digest('hex');
    const file = `optimized/${name.replace(/\.[^.]+$/, '')}-w${info.width}-${hash.slice(0,12)}.webp`;
    writeFileSync(resolve(root, 'assets', file), data);
    variants.push({ file, width: info.width, height: info.height, bytes: data.length, sha256: hash });
  }
  images[name] = { sourceSha256: createHash('sha256').update(source).digest('hex'), width: meta.width, height: meta.height, bytes: source.length, variants };
  originalBytes += source.length;
  deliveryBytes += variants.find(v => v.width >= Math.min(800,meta.width))?.bytes || variants.at(-1).bytes;
}
writeFileSync(resolve(root, 'assets/image-delivery.json'), JSON.stringify({ version: 1, images }, null, 2) + '\n');
for (const [file, size] of [['favicon.png',48],['apple-touch-icon.png',180]]) {
  await sharp(resolve(root, 'src/favicon.svg')).resize(size,size).png().toFile(resolve(root,'src',file));
}
console.log(`Prepared ${names.length} source photographs. Original total ${originalBytes} bytes; representative <=800px WebP total ${deliveryBytes} bytes (${Math.round((1-deliveryBytes/originalBytes)*100)}% smaller). Original files preserved.`);
