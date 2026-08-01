# `portfolio/` — Mariela's project assets

Drop the real artwork here and the site picks it up. One folder per project:

```
portfolio/
  Passive Solar ADU/
    project.json        ← metadata (bilingual)
    Floor Plan.png
    Renderings/         ← sub-folders are included, kept together
      3D Exterior - South.png
  Surf House ADU/
    project.json
    Section.jpg
```

Six projects are already set up this way. Add a seventh by dropping in a
folder and running the sync.

Then run:

```bash
npm run sync:portfolio
```

That regenerates `assets/js/gallery-data.js` — covers, gallery images and any
metadata you supplied. Restart or reload the dev server and the work is live.

## Naming

- **Folder name → slug and URL** unless `project.json` sets `slug`.
  `Surf House ADU/` becomes `/project/?p=surf-house-adu`. A leading `01-` is
  only for ordering and is stripped from the slug.
- **Spaces and punctuation in filenames are fine** — paths are URL-encoded
  for you, including `#` and `&`.
- **Sub-folders are scanned too**, and their images stay grouped after the
  loose ones, so a `Renderings/` set reads as a set.
- **Image order** is alphanumeric, so prefix files `01-`, `02-`, `03-` to
  control the sequence in the project gallery.
- A file named `cover.*` is used as the cover unless `project.json` names one.
- Folders starting with `.` or `_` are skipped.

Supported image types: `.jpg` `.jpeg` `.png` `.webp` `.avif` `.gif` `.svg`

## `project.json`

Every field is optional. Anything you leave out keeps whatever is already in
`gallery-data.js`, so re-running the sync never destroys hand-written copy.

```json
{
  "slug":    "surf-house-adu",
  "title":   { "en": "Surf House ADU", "es": "ADU Surf House" },
  "client":  { "en": "Studio project", "es": "Proyecto de taller" },
  "role":    { "en": "Architectural Design", "es": "Diseño Arquitectónico" },
  "summary": { "en": "One line for the card.", "es": "Una línea para la ficha." },
  "body": {
    "en": ["First paragraph.", "Second paragraph."],
    "es": ["Primer párrafo.", "Segundo párrafo."]
  },
  "year": "2024",
  "discipline": "residential",
  "tools": ["Revit", "Enscape", "Physical model"],
  "featured": true,
  "cover": "Exterior Perspective - Night Time.jpg",
  "monogram": "SH"
}
```

- `discipline` must be one of: `residential`, `commercial`, `interiors`,
  `urban`. These drive the filters on the Work page — the labels are
  translated in `assets/js/i18n.js` under `work.filter.*`. To add a
  discipline, add it to `DISCIPLINES` in `scripts/sync-portfolio.mjs` and add
  a `work.filter.<name>` string in both languages.
- `featured: true` puts the project on the home page (the first four win).
- `cover` is a path relative to the project folder — `"Renderings/3D
  Exterior - South.png"` works.
- Passing a plain string instead of `{ en, es }` uses it for both languages.
- `monogram` is the two letters drawn in the placeholder artwork shown until a
  cover image exists.

## Images

**Commit the originals — no need to resize anything.** `npm run build`
resizes and re-encodes every image into `dist/portfolio/` at the same paths
(currently 70 MB of originals → about 15 MB shipped), and the site lazy-loads
everything below the fold. Your files here stay untouched at full resolution.

Cards and the featured rows crop to landscape (4:3), so a wide rendering,
plan or elevation reads best as a cover. Portrait images still work — they
are cropped, not squashed.

Tuning lives at the top of `scripts/optimize-images.mjs` (`MAX_EDGE`,
`JPEG_QUALITY`).
