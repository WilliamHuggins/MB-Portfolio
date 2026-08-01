#!/usr/bin/env node
/**
 * sync-portfolio — turn a folder of Mariela's real project assets into the
 * site's archive data.
 *
 *   npm run sync:portfolio
 *
 * Expected layout (see portfolio/README.md):
 *
 *   portfolio/
 *     01-maison-lumiere/
 *       project.json          ← optional metadata, bilingual
 *       cover.jpg             ← optional; otherwise the first image is used
 *       01-detail.jpg
 *       02-spread.jpg
 *
 * Folders are matched to existing entries in assets/js/gallery-data.js by
 * slug, so hand-written copy is preserved: the script only fills in `cover`
 * and `images`, plus any fields supplied in project.json. Folders with no
 * matching entry are appended as new projects.
 */
import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, relative, extname, basename, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PORTFOLIO_DIR = join(ROOT, 'portfolio');
const DATA_FILE = join(ROOT, 'assets', 'js', 'gallery-data.js');

const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif', '.svg']);
const DISCIPLINES = ['branding', 'editorial', 'digital', 'packaging', 'spatial'];

/* ------------------------------------------------------------------ utils */

const slugify = (value) =>
  String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')  // strip accents
    .toLowerCase()
    .replace(/^\d+[\s._-]+/, '')      // drop an ordering prefix like "01-"
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const titleize = (value) =>
  String(value)
    .replace(/^\d+[\s._-]+/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());

const monogramFor = (title) => {
  const words = String(title).split(/\s+/).filter(Boolean);
  const letters = words.length > 1
    ? words[0][0] + words[1][0]
    : (words[0] || 'MB').slice(0, 2);
  return letters.toUpperCase();
};

/** Web path for a file on disk, e.g. /portfolio/01-maison/cover.jpg */
const webPath = (absolute) => '/' + relative(ROOT, absolute).split(/[\\/]/).join('/');

/** JS object literal with stable, readable formatting. */
function serialize(value, indent = 2) {
  const pad = ' '.repeat(indent);
  if (value === null || value === undefined) return 'null';
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  if (typeof value === 'string') return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;

  if (Array.isArray(value)) {
    if (!value.length) return '[]';
    const inline = value.every((v) => typeof v === 'string') && value.join('').length < 60;
    if (inline) return `[${value.map((v) => serialize(v)).join(', ')}]`;
    return `[\n${value.map((v) => `${pad}  ${serialize(v, indent + 2)}`).join(',\n')}\n${pad}]`;
  }

  const entries = Object.entries(value);
  if (!entries.length) return '{}';
  return `{\n${entries
    .map(([k, v]) => `${pad}  ${/^[a-zA-Z_$][\w$]*$/.test(k) ? k : `'${k}'`}: ${serialize(v, indent + 2)}`)
    .join(',\n')}\n${pad}}`;
}

/* ------------------------------------------------------------------- scan */

async function readFolder(dir) {
  const name = basename(dir);
  const slug = slugify(name);
  const entries = await readdir(dir, { withFileTypes: true });

  const images = entries
    .filter((e) => e.isFile() && IMAGE_EXT.has(extname(e.name).toLowerCase()))
    .map((e) => e.name)
    .sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));

  let meta = {};
  const metaPath = join(dir, 'project.json');
  if (existsSync(metaPath)) {
    try {
      meta = JSON.parse(await readFile(metaPath, 'utf8'));
    } catch (error) {
      console.warn(`  ! ${name}/project.json is not valid JSON — ignoring (${error.message})`);
    }
  }

  const coverName = meta.cover && images.includes(meta.cover)
    ? meta.cover
    : images.find((f) => /^cover\./i.test(f)) || images[0] || null;

  const gallery = images.filter((f) => f !== coverName);

  return {
    slug: meta.slug || slug,
    name,
    meta,
    cover: coverName ? webPath(join(dir, coverName)) : null,
    images: gallery.map((f) => webPath(join(dir, f))),
    imageCount: images.length
  };
}

/* ------------------------------------------------------------------- merge */

function bilingual(value, fallback) {
  if (value == null) return fallback;
  if (typeof value === 'string') return { en: value, es: value };
  return { en: value.en ?? fallback?.en ?? '', es: value.es ?? value.en ?? fallback?.es ?? '' };
}

function bilingualBody(value, fallback) {
  if (value == null) return fallback;
  const toArray = (v) => (Array.isArray(v) ? v : String(v).split(/\n{2,}/).map((s) => s.trim()).filter(Boolean));
  if (Array.isArray(value) || typeof value === 'string') {
    const arr = toArray(value);
    return { en: arr, es: arr };
  }
  return {
    en: toArray(value.en ?? fallback?.en ?? []),
    es: toArray(value.es ?? value.en ?? fallback?.es ?? [])
  };
}

function merge(folder, existing) {
  const { meta } = folder;
  const fallbackTitle = titleize(folder.name);
  const title = bilingual(meta.title, existing?.title || { en: fallbackTitle, es: fallbackTitle });

  let discipline = meta.discipline || existing?.discipline || 'branding';
  if (!DISCIPLINES.includes(discipline)) {
    console.warn(`  ! ${folder.name}: unknown discipline "${discipline}" — falling back to "branding"`);
    discipline = 'branding';
  }

  return {
    slug: folder.slug,
    title,
    client: bilingual(meta.client, existing?.client || { en: '—', es: '—' }),
    role: bilingual(meta.role, existing?.role || { en: 'Design', es: 'Diseño' }),
    summary: bilingual(meta.summary, existing?.summary || { en: '', es: '' }),
    body: bilingualBody(meta.body, existing?.body || { en: [], es: [] }),
    year: String(meta.year ?? existing?.year ?? new Date().getFullYear()),
    discipline,
    tools: meta.tools ?? existing?.tools ?? [],
    featured: meta.featured ?? existing?.featured ?? false,
    cover: folder.cover ?? existing?.cover ?? null,
    images: folder.images.length ? folder.images : (existing?.images ?? []),
    monogram: meta.monogram || existing?.monogram || monogramFor(title.en)
  };
}

/* -------------------------------------------------------------------- run */

async function main() {
  if (!existsSync(PORTFOLIO_DIR)) {
    console.error(`No portfolio/ folder found at ${PORTFOLIO_DIR}`);
    console.error('Create it (see portfolio/README.md) and run this again.');
    process.exitCode = 1;
    return;
  }

  const dirents = await readdir(PORTFOLIO_DIR, { withFileTypes: true });
  const dirs = [];
  for (const entry of dirents) {
    if (!entry.isDirectory() || entry.name.startsWith('.') || entry.name.startsWith('_')) continue;
    dirs.push(join(PORTFOLIO_DIR, entry.name));
  }
  dirs.sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));

  if (!dirs.length) {
    console.error('portfolio/ contains no project folders — nothing to sync.');
    process.exitCode = 1;
    return;
  }

  const existing = new Map();
  try {
    const module = await import(pathToFileURL(DATA_FILE).href);
    for (const project of module.default ?? []) existing.set(project.slug, project);
  } catch (error) {
    console.warn(`Could not read current archive (${error.message}) — writing a fresh one.`);
  }

  console.log(`Scanning ${dirs.length} project folder(s)…\n`);

  const merged = [];
  for (const dir of dirs) {
    const folder = await readFolder(dir);
    const project = merge(folder, existing.get(folder.slug));
    merged.push(project);
    const known = existing.has(folder.slug) ? 'updated' : 'added';
    console.log(`  · ${folder.name} → ${folder.slug} (${folder.imageCount} image(s), ${known})`);
  }

  // Keep hand-written entries that have no folder yet, so nothing is lost.
  const syncedSlugs = new Set(merged.map((p) => p.slug));
  const orphans = [...existing.values()].filter((p) => !syncedSlugs.has(p.slug));
  if (orphans.length) {
    console.log(`\n  Keeping ${orphans.length} entr${orphans.length === 1 ? 'y' : 'ies'} with no folder yet.`);
  }

  const all = [...merged, ...orphans];
  const header = await buildHeader();
  const output = `${header}\nconst projects = ${serialize(all, 0)};\n\nif (typeof window !== 'undefined') window.projects = projects;\nexport default projects;\n`;

  await writeFile(DATA_FILE, output, 'utf8');
  console.log(`\nWrote ${all.length} project(s) to ${relative(ROOT, DATA_FILE)}`);
}

async function buildHeader() {
  // Preserve the documentation block at the top of the data file.
  try {
    const current = await readFile(DATA_FILE, 'utf8');
    const end = current.indexOf('*/');
    if (current.trimStart().startsWith('/**') && end !== -1) return current.slice(0, end + 2) + '\n';
  } catch { /* fall through to the default header */ }
  return '/** Project archive — generated by scripts/sync-portfolio.mjs */\n';
}

await stat(ROOT); // fail fast on a broken working directory
await main();
