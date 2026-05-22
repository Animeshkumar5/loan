import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const source = join(
  'C:',
  'Users',
  'Betu',
  '.cursor',
  'projects',
  'c-Users-Betu-Desktop-paisaSolution-loan',
  'assets',
  'c__Users_Betu_AppData_Roaming_Cursor_User_workspaceStorage_7d8ec1f5dc92f30e1cbf83c91facd0e4_images_WhatsApp_Image_2026-05-22_at_9.07.41_AM-ba2d5c3b-04a8-4e72-9bc9-f2a96e2ecce0.png'
);
const publicDir = join(root, 'public');

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-48x48.png', size: 48 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'favicon-192x192.png', size: 192 },
];

for (const { name, size } of sizes) {
  await sharp(source)
    .resize(size, size, { fit: 'cover', position: 'centre' })
    .png()
    .toFile(join(publicDir, name));
  console.log(`Wrote ${name}`);
}

// favicon.ico: 16 + 32 + 48 multi-size
const pngBuffers = await Promise.all(
  [16, 32, 48].map((size) =>
    sharp(source).resize(size, size, { fit: 'cover' }).png().toBuffer()
  )
);

// Minimal ICO writer (PNG-in-ICO for modern browsers)
function buildIco(buffers) {
  const count = buffers.length;
  const headerSize = 6 + count * 16;
  let offset = headerSize;
  const entries = buffers.map((buf, i) => {
    const size = [16, 32, 48][i];
    const entry = { size, offset, buf };
    offset += buf.length;
    return entry;
  });
  const total = offset;
  const out = Buffer.alloc(total);
  out.writeUInt16LE(0, 0);
  out.writeUInt16LE(1, 2);
  out.writeUInt16LE(count, 4);
  entries.forEach((e, i) => {
    const base = 6 + i * 16;
    out.writeUInt8(e.size === 256 ? 0 : e.size, base);
    out.writeUInt8(e.size === 256 ? 0 : e.size, base + 1);
    out.writeUInt8(0, base + 2);
    out.writeUInt8(0, base + 3);
    out.writeUInt16LE(1, base + 4);
    out.writeUInt16LE(32, base + 6);
    out.writeUInt32LE(e.buf.length, base + 8);
    out.writeUInt32LE(e.offset, base + 12);
  });
  entries.forEach((e) => e.buf.copy(out, e.offset));
  return out;
}

writeFileSync(join(publicDir, 'favicon.ico'), buildIco(pngBuffers));
console.log('Wrote favicon.ico');
