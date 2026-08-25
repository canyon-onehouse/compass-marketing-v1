/**
 * Generate the brand favicon set in src/app/ from the master icon SVG:
 *   - favicon.ico   (16/32/48 PNG-in-ICO, from src/app/icon.svg)
 *   - apple-icon.png (180x180, full-bleed square corners — iOS masks its own)
 *
 * Usage: node scripts/generate-favicons.mjs
 */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const APP = path.resolve('src/app');
const ICO_SIZES = [16, 32, 48];
const APPLE_SIZE = 180;

const iconSvg = await readFile(path.join(APP, 'icon.svg'), 'utf8');

// ICO container with PNG-encoded entries: 6-byte header, one 16-byte
// directory entry per image, then the PNG payloads.
function packIco(pngs) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(pngs.length, 4);

  const dir = Buffer.alloc(16 * pngs.length);
  let offset = header.length + dir.length;
  pngs.forEach(({ size, buf }, i) => {
    const o = i * 16;
    dir.writeUInt8(size === 256 ? 0 : size, o); // width (0 = 256)
    dir.writeUInt8(size === 256 ? 0 : size, o + 1); // height
    dir.writeUInt8(0, o + 2); // palette count
    dir.writeUInt8(0, o + 3); // reserved
    dir.writeUInt16LE(1, o + 4); // color planes
    dir.writeUInt16LE(32, o + 6); // bits per pixel
    dir.writeUInt32LE(buf.length, o + 8);
    dir.writeUInt32LE(offset, o + 12);
    offset += buf.length;
  });
  return Buffer.concat([header, dir, ...pngs.map((p) => p.buf)]);
}

const manifest = [];

// 1. favicon.ico from the rounded-tile master SVG
const pngs = [];
for (const size of ICO_SIZES) {
  const buf = await sharp(Buffer.from(iconSvg)).resize(size, size).png().toBuffer();
  pngs.push({ size, buf });
}
const ico = packIco(pngs);
await writeFile(path.join(APP, 'favicon.ico'), ico);
manifest.push(['favicon.ico', ICO_SIZES.join('/'), `${(ico.length / 1024).toFixed(1)} KB`]);

// 2. apple-icon.png: same composition, full-bleed background (rx=0)
const appleSvg = iconSvg.replace('rx="300"', 'rx="0"');
const appleBuf = await sharp(Buffer.from(appleSvg)).resize(APPLE_SIZE, APPLE_SIZE).png().toBuffer();
await writeFile(path.join(APP, 'apple-icon.png'), appleBuf);
manifest.push(['apple-icon.png', `${APPLE_SIZE}x${APPLE_SIZE}`, `${(appleBuf.length / 1024).toFixed(1)} KB`]);

console.log('name\tdimensions\tsize');
for (const row of manifest) console.log(row.join('\t'));
