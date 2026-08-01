/**
 * Build-time image optimisation for `portfolio/`.
 *
 * Mariela's originals stay untouched in the repository — full resolution, as
 * exported from Revit, Enscape or the camera. This produces web-sized copies
 * into the build output at the *same relative paths and extensions*, so the
 * URLs in `gallery-data.js` keep working and nothing in the markup changes.
 *
 * Runs automatically during `npm run build`; also available standalone:
 *
 *     npm run optimize:images -- dist/portfolio
 */
import { readdir, mkdir, copyFile, stat } from 'node:fs/promises';
import { join, extname, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE = join(ROOT, 'portfolio');

/** Long edge in pixels. Covers render at ~800px CSS, so this leaves retina room. */
const MAX_EDGE = 2000;
const JPEG_QUALITY = 80;

const RASTER = new Set(['.jpg', '.jpeg', '.png']);
const COPY_AS_IS = new Set(['.svg', '.webp', '.avif', '.gif']);

const mb = (bytes) => (bytes / 1048576).toFixed(1);

async function walk(dir, prefix = '') {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name.startsWith('.') || entry.name.startsWith('_')) continue;
    const rel = prefix + entry.name;
    if (entry.isDirectory()) files.push(...await walk(join(dir, entry.name), `${rel}/`));
    else files.push(rel);
  }
  return files;
}

/**
 * @param {string} destDir  where the optimised tree should land
 * @param {(msg: string) => void} [log]
 */
export async function optimizePortfolio(destDir, log = console.log) {
  try {
    await stat(SOURCE);
  } catch {
    log('No portfolio/ folder — skipping image optimisation.');
    return;
  }

  let sharp;
  try {
    ({ default: sharp } = await import('sharp'));
  } catch {
    log('sharp is not installed — copying portfolio images at full size.');
  }

  const files = await walk(SOURCE);
  let sourceBytes = 0;
  let outputBytes = 0;
  let converted = 0;

  for (const rel of files) {
    const from = join(SOURCE, rel);
    const to = join(destDir, rel);
    const ext = extname(rel).toLowerCase();

    await mkdir(dirname(to), { recursive: true });

    // Metadata and notes stay out of the build.
    if (ext === '.json' || ext === '.md') continue;

    const { size } = await stat(from);
    sourceBytes += size;

    if (!sharp || (!RASTER.has(ext) && !COPY_AS_IS.has(ext))) {
      await copyFile(from, to);
      outputBytes += size;
      continue;
    }

    if (COPY_AS_IS.has(ext)) {
      await copyFile(from, to);
      outputBytes += size;
      continue;
    }

    try {
      const pipeline = sharp(from, { failOn: 'none' })
        .rotate()                                   // honour EXIF orientation
        .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: 'inside', withoutEnlargement: true });

      // Keep the extension so existing URLs stay valid.
      if (ext === '.png') pipeline.png({ compressionLevel: 9, palette: true, quality: JPEG_QUALITY });
      else pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true, progressive: true });

      const { size: written } = await pipeline.toFile(to).then(() => stat(to));

      // Never ship something larger than the original.
      if (written >= size) {
        await copyFile(from, to);
        outputBytes += size;
      } else {
        outputBytes += written;
        converted += 1;
      }
    } catch (error) {
      log(`  ! ${rel}: ${error.message} — copying original`);
      await copyFile(from, to);
      outputBytes += size;
    }
  }

  const saved = sourceBytes - outputBytes;
  log(
    `portfolio images: ${files.length} file(s), ${converted} re-encoded — ` +
    `${mb(sourceBytes)} MB → ${mb(outputBytes)} MB` +
    (saved > 0 ? ` (−${Math.round((saved / sourceBytes) * 100)}%)` : '')
  );
}

// Standalone: node scripts/optimize-images.mjs [destination]
if (process.argv[1] && relative(process.argv[1], fileURLToPath(import.meta.url)) === '') {
  const dest = process.argv[2] ? join(ROOT, process.argv[2]) : join(ROOT, 'dist', 'portfolio');
  await optimizePortfolio(dest);
}
