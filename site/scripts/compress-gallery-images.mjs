// Compress construction gallery photos to WebP without changing the originals.
// Run with: npm run compress:gallery
// Requires the `sharp` package to be installed in the site project.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve, basename, extname } from 'node:path';
import { createHash } from 'node:crypto';
import { constructionPhotos } from './construction-gallery-data.mjs';

const { default: sharp } = await import(process.env.CPS_SHARP_MODULE || 'sharp');
const root = resolve(import.meta.dirname, '..');
const assetsDir = resolve(root, 'assets');
const outputDir = resolve(assetsDir, 'compressed');
const maxWidth = 1600;
const quality = 78;

mkdirSync(outputDir, { recursive: true });

let sourceTotal = 0;
let compressedTotal = 0;
const results = [];

for (const photo of constructionPhotos) {
  const sourcePath = resolve(assetsDir, photo.file);
  const source = readFileSync(sourcePath);
  const metadata = await sharp(source).metadata();
  const outputName = `${basename(photo.file, extname(photo.file))}.webp`;
  const outputPath = resolve(outputDir, outputName);
  const { data, info } = await sharp(source)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality, effort: 5 })
    .toBuffer({ resolveWithObject: true });

  writeFileSync(outputPath, data);
  sourceTotal += source.byteLength;
  compressedTotal += data.byteLength;
  results.push({
    source: photo.file,
    output: `compressed/${outputName}`,
    sourceBytes: source.byteLength,
    outputBytes: data.byteLength,
    width: info.width,
    height: info.height,
    sourceSha256: createHash('sha256').update(source).digest('hex'),
  });
}

writeFileSync(
  resolve(outputDir, 'manifest.json'),
  `${JSON.stringify({ version: 1, quality, maxWidth, images: results }, null, 2)}\n`,
);

const saved = sourceTotal - compressedTotal;
const percent = sourceTotal ? Math.round((saved / sourceTotal) * 100) : 0;
console.log(`Compressed ${results.length} construction gallery images.`);
console.log(`Source total: ${formatBytes(sourceTotal)}`);
console.log(`WebP total: ${formatBytes(compressedTotal)}`);
console.log(`Saved: ${formatBytes(saved)} (${percent}%)`);

function formatBytes(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}
