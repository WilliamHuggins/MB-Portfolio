# `portfolio/` — Mariela's project assets

Drop the real artwork here and the site picks it up. One folder per project:

```
portfolio/
  01-maison-lumiere/
    project.json        ← optional metadata (bilingual)
    cover.jpg           ← optional; otherwise the first image alphabetically wins
    01-detail.jpg
    02-spread.jpg
  02-the-quiet-hours/
    cover.jpg
    01-cover-flat.jpg
```

Then run:

```bash
npm run sync:portfolio
```

That regenerates `assets/js/gallery-data.js` — covers, gallery images and any
metadata you supplied. Restart or reload the dev server and the work is live.

## Naming

- **Folder name → slug and URL.** `01-maison-lumiere/` becomes
  `/project/?p=maison-lumiere`. A leading `01-` is only for ordering and is
  stripped from the slug.
- **Image order** is alphanumeric, so prefix files `01-`, `02-`, `03-` to
  control the sequence in the project gallery.
- A file literally named `cover.*` is always used as the cover.
- Folders starting with `.` or `_` are skipped.

Supported image types: `.jpg` `.jpeg` `.png` `.webp` `.avif` `.gif` `.svg`

## `project.json`

Every field is optional. Anything you leave out keeps whatever is already in
`gallery-data.js`, so re-running the sync never destroys hand-written copy.

```json
{
  "title":   { "en": "Maison Lumière", "es": "Maison Lumière" },
  "client":  { "en": "Maison Lumière, Paris", "es": "Maison Lumière, París" },
  "role":    { "en": "Identity & Art Direction", "es": "Identidad y Dirección de Arte" },
  "summary": { "en": "One line for the card.", "es": "Una línea para la ficha." },
  "body": {
    "en": ["First paragraph.", "Second paragraph."],
    "es": ["Primer párrafo.", "Segundo párrafo."]
  },
  "year": "2025",
  "discipline": "branding",
  "tools": ["Illustrator", "InDesign", "Figma"],
  "featured": true,
  "cover": "cover.jpg",
  "monogram": "ML"
}
```

- `discipline` must be one of: `branding`, `editorial`, `digital`,
  `packaging`, `spatial`. These drive the filters on the Work page — the
  labels are translated in `assets/js/i18n.js` under `work.filter.*`.
- `featured: true` puts the project on the home page (the first four win).
- Passing a plain string instead of `{ en, es }` uses it for both languages.
- `monogram` is the two letters drawn in the placeholder artwork shown until a
  cover image exists.

## Images

Optimise before committing — these ship as-is. Suggested targets:

| Use     | Size            | Notes                          |
|---------|-----------------|--------------------------------|
| Cover   | 1600 × 2000 px  | Portrait crops suit the grid   |
| Gallery | 2000 px wide    | Landscape, `.webp` if possible |

Keep each file under ~400 KB. The site lazy-loads everything below the fold.
