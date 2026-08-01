# Mariela Brown — Design Portfolio

A bilingual (English / Español) portfolio site for designer and art director
Mariela Brown. Static HTML, one CSS file, one JS module — no framework, no
runtime dependencies.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script | Does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the built site |
| `npm run sync:portfolio` | Rebuild the archive from `portfolio/` |
| `npm run lint` | Type-check `vite.config.ts` |

## Structure

```
index.html            Home — hero, featured work, practice, capabilities, CTA
gallery/              The archive: filter by discipline, sort by year or title
project/              Case study, rendered from ?p=<slug>
bio/                  Atelier — biography, stats, disciplines, milestones
contact/              Enquiry form (opens the visitor's mail client)
styleguide/           Design tokens and components (noindex)

assets/css/styles.css Whole design system, sectioned and commented
assets/js/main.js     Site runtime: theme, language, motion, all rendering
assets/js/i18n.js     Every UI string, EN + ES
assets/js/gallery-data.js  The project archive (bilingual content)

portfolio/            Mariela's real project assets — see portfolio/README.md
scripts/sync-portfolio.mjs  Turns that folder into gallery-data.js
```

## Adding projects

Put the artwork in `portfolio/<project-name>/`, optionally with a
`project.json` beside it, then:

```bash
npm run sync:portfolio
```

The full folder convention is documented in [`portfolio/README.md`](portfolio/README.md).
Projects without a cover image render an engraved monogram placeholder, so the
site never looks unfinished while artwork is still being prepared.

You can also edit `assets/js/gallery-data.js` directly — the sync script merges
into it rather than overwriting, so hand-written copy survives.

## Language

Every visible string lives in `assets/js/i18n.js` under a key, and elements
opt in with `data-i18n="key"`:

```html
<h2 data-i18n="featured.title">A collection built on quiet confidence.</h2>
<input data-i18n="contact.form.namePh" data-i18n-attr="placeholder">
```

`data-i18n-attr` targets an attribute instead of the text content. Project
copy is bilingual in the data itself (`{ en, es }` objects and paragraph
arrays), so switching language re-renders cards, case studies and filters.

The switch is in the header. The choice persists in `localStorage`; first-time
visitors get Spanish automatically if their browser prefers it. `<html lang>`
updates with the toggle, and sorting uses `Intl.Collator` for the active
language.

## Design system

Dark by default — obsidian `#08080A` with champagne `#C9A227` — plus a light
alabaster theme behind the header toggle. Cormorant Garamond for display, Jost
for interface text. Everything is driven by custom properties at the top of
`styles.css`; the two themes differ only in that token block.

Motion: preloader and curtain reveal, masked line reveals, image wipe-ins,
magnetic buttons, a custom cursor that swells to `VIEW` over project media,
scroll progress, a hiding header and parallax. All of it collapses cleanly
under `prefers-reduced-motion: reduce`.

## Deploying

`npm run build` emits a fully static `dist/` — deploy it anywhere. The build
also copies `portfolio/` into `dist/portfolio/` so image paths keep working.
Update the canonical URLs in each page's `<head>`, `sitemap.xml` and
`robots.txt` if the domain differs from `marielabrown.com`.

## Content still to replace

- Contact address `hello@marielabrown.com` and the social links in the footer
- The statistics on the home and Atelier pages
- Project copy in `assets/js/gallery-data.js`, once the real work is in
