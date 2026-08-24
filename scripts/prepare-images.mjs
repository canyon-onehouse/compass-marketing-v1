/**
 * One-off migration script: compress the prototype photos referenced by the
 * live pages into public/images/ as web-sized WebP, copy the logo SVGs, and
 * extract the <image-slot> images from the Claude Design sidecar JSON.
 *
 * Usage: node scripts/prepare-images.mjs
 */
import { readdir, readFile, mkdir, writeFile, copyFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const SRC = path.resolve('uploads/Compass Design Website');
const OUT = path.resolve('public/images');
const MAX_EDGE = 2000;
const QUALITY = 80;
const SKIP_HTML = new Set(['Compass Homepage v1.html', 'Projects v1.html']);

// Slot ids actually used by live pages (from <image-slot id="...">)
const USED_SLOTS = [
  'home-feature-project',
  'proj-cliff',
  'proj-hollis',
  'proj-marin',
  'team-elena',
  'team-daniel',
];

await mkdir(OUT, { recursive: true });

// 1. Collect referenced assets from live HTML files
const htmlFiles = (await readdir(SRC)).filter(
  (f) => f.endsWith('.html') && !SKIP_HTML.has(f)
);
const referenced = new Set();
for (const f of htmlFiles) {
  const html = await readFile(path.join(SRC, f), 'utf8');
  for (const m of html.matchAll(/src="assets\/([^"]+)"/g)) referenced.add(m[1]);
}
console.log(`${htmlFiles.length} live pages reference ${referenced.size} assets`);

// 2. Convert photos / copy SVGs
const manifest = [];
for (const name of [...referenced].sort()) {
  const srcPath = path.join(SRC, 'assets', name);
  const ext = path.extname(name).toLowerCase();
  if (ext === '.svg') {
    await copyFile(srcPath, path.join(OUT, name));
    manifest.push([name, 'svg', '']);
    continue;
  }
  const outName = name.replace(/\.(png|jpe?g)$/i, '.webp');
  const img = sharp(srcPath).rotate();
  const meta = await img.metadata();
  const landscape = (meta.width ?? 0) >= (meta.height ?? 0);
  const resized = img.resize(
    landscape ? { width: Math.min(meta.width, MAX_EDGE), withoutEnlargement: true }
              : { height: Math.min(meta.height, MAX_EDGE), withoutEnlargement: true }
  );
  const buf = await resized.webp({ quality: QUALITY }).toBuffer();
  await writeFile(path.join(OUT, outName), buf);
  const outMeta = await sharp(buf).metadata();
  manifest.push([outName, `${outMeta.width}x${outMeta.height}`, `${(buf.length / 1024).toFixed(0)} KB`]);
}

// 3. Extract used image-slot images from the sidecar
const state = JSON.parse(
  await readFile(path.join(SRC, '.image-slots.state.json'), 'utf8')
);
for (const id of USED_SLOTS) {
  const entry = state[id];
  const dataUri = entry?.u ?? entry?.url ?? entry?.src ?? entry?.dataUrl;
  if (!dataUri || !dataUri.startsWith('data:image/')) {
    console.warn(`!! slot ${id}: no data URI found (keys: ${entry ? Object.keys(entry) : 'missing'})`);
    continue;
  }
  const b64 = dataUri.slice(dataUri.indexOf(',') + 1);
  const buf = Buffer.from(b64, 'base64');
  const outName = `slot-${id}.webp`;
  await writeFile(path.join(OUT, outName), await sharp(buf).webp({ quality: 90 }).toBuffer());
  const m = await sharp(buf).metadata();
  manifest.push([outName, `${m.width}x${m.height}`, `${(buf.length / 1024).toFixed(0)} KB`]);
}

console.log('\nname\tdimensions\tsize');
for (const row of manifest) console.log(row.join('\t'));
