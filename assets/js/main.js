/**
 * Mariela Brown — portfolio runtime.
 *
 * One module drives every page: theme, language, chrome, motion and the
 * data-driven work archive. Pages only need `<script type="module"
 * src="/assets/js/main.js">`.
 */
import translations from './i18n.js';
import projects from './gallery-data.js';

const STORE = { theme: 'mb-theme', lang: 'mb-lang' };
const LANGS = ['en', 'es'];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let lang = readLang();

/* ---------------------------------------------------------------- helpers */

function readLang() {
  const stored = localStorage.getItem(STORE.lang);
  if (LANGS.includes(stored)) return stored;
  return (navigator.language || 'en').toLowerCase().startsWith('es') ? 'es' : 'en';
}

function t(key) {
  return (translations[lang] && translations[lang][key]) || translations.en[key] || key;
}

function esc(value) {
  return String(value ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[c]);
}

/** Pick the active-language string from a `{ en, es }` field. */
function pick(field) {
  if (field == null) return '';
  if (typeof field === 'string') return field;
  return field[lang] ?? field.en ?? '';
}

/** Cover art, or an engraved monogram placeholder when no asset exists yet. */
function mediaMarkup(src, alt, monogram, eager = false) {
  if (src) {
    return `<img src="${esc(src)}" alt="${esc(alt)}" ${eager ? '' : 'loading="lazy"'} decoding="async">`;
  }
  return `<div class="media-fill" role="img" aria-label="${esc(alt)}"><span aria-hidden="true">${esc(monogram || 'MB')}</span></div>`;
}

function projectUrl(slug) {
  return `/project/?p=${encodeURIComponent(slug)}`;
}

/* ------------------------------------------------------------------ theme */

function initTheme() {
  // Obsidian is the house look, so dark is the default regardless of the OS
  // preference — visitors who want the alabaster theme choose it in the header.
  const stored = localStorage.getItem(STORE.theme);
  document.documentElement.setAttribute('data-theme', stored === 'light' ? 'light' : 'dark');

  document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem(STORE.theme, next);
    });
  });
}

/* --------------------------------------------------------------- language */

function applyTranslations(root = document) {
  root.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const attr = el.getAttribute('data-i18n-attr');
    const value = t(key);
    if (attr) el.setAttribute(attr, value);
    else el.textContent = value;
  });
}

function setLanguage(next, { persist = true } = {}) {
  if (!LANGS.includes(next)) return;
  lang = next;
  if (persist) localStorage.setItem(STORE.lang, next);

  document.documentElement.lang = next;
  applyTranslations();

  document.querySelectorAll('[data-lang-set]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang-set') === next));
  });

  // Swap the canonical/alternate hints and any language-specific metadata.
  const desc = document.querySelector('meta[name="description"][data-i18n]');
  if (desc) desc.setAttribute('content', t(desc.getAttribute('data-i18n')));

  document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: next } }));
}

function initLanguage() {
  document.querySelectorAll('[data-lang-set]').forEach((btn) => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang-set')));
  });
  setLanguage(lang, { persist: false });
}

/* --------------------------------------------------------------- preloader */

function initPreloader() {
  const loader = document.querySelector('[data-preloader]');
  const curtain = document.querySelector('[data-curtain]');

  const finish = () => {
    if (loader) loader.classList.add('is-done');
    if (curtain) requestAnimationFrame(() => curtain.classList.add('is-lifting'));
    document.body.classList.remove('is-locked');
    document.body.classList.add('is-ready');
  };

  if (!loader || reduceMotion) {
    if (loader) loader.remove();
    if (curtain) curtain.classList.add('is-lifting');
    document.body.classList.add('is-ready');
    return;
  }

  document.body.classList.add('is-locked');
  const bar = loader.querySelector('[data-preloader-bar]');
  const count = loader.querySelector('[data-preloader-count]');

  let value = 0;
  const tick = setInterval(() => {
    value = Math.min(100, value + Math.random() * 22 + 8);
    if (bar) bar.style.transform = `scaleX(${value / 100})`;
    if (count) count.textContent = `${String(Math.floor(value)).padStart(3, '0')}`;
    if (value >= 100) {
      clearInterval(tick);
      setTimeout(finish, 380);
    }
  }, 170);

  // Never trap the visitor behind the loader.
  setTimeout(() => { clearInterval(tick); finish(); }, 4200);
}

/* ------------------------------------------------------------------ cursor */

function initCursor() {
  if (reduceMotion || window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  const ring = document.createElement('div');
  ring.className = 'cursor-ring';
  ring.innerHTML = `<span data-cursor-label>${esc(t('work.view'))}</span>`;
  document.body.append(dot, ring);

  document.addEventListener('languagechange', () => {
    const label = ring.querySelector('[data-cursor-label]');
    if (label) label.textContent = t('work.view');
  });

  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let rx = x;
  let ry = y;

  window.addEventListener('mousemove', (e) => {
    x = e.clientX;
    y = e.clientY;
    document.body.classList.add('cursor-ready');
  }, { passive: true });

  document.addEventListener('mouseleave', () => document.body.classList.remove('cursor-ready'));

  (function loop() {
    rx += (x - rx) * 0.16;
    ry += (y - ry) * 0.16;
    dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
    requestAnimationFrame(loop);
  })();

  document.addEventListener('mouseover', (e) => {
    const el = e.target instanceof Element ? e.target : null;
    if (!el) return;
    if (el.closest('[data-cursor="view"]')) document.body.classList.add('cursor-view');
    else if (el.closest('a, button, input, textarea, select, [role="button"]')) {
      document.body.classList.add('cursor-hover');
    }
  });
  document.addEventListener('mouseout', (e) => {
    const el = e.target instanceof Element ? e.target : null;
    if (!el) return;
    if (el.closest('[data-cursor="view"]')) document.body.classList.remove('cursor-view');
    if (el.closest('a, button, input, textarea, select, [role="button"]')) {
      document.body.classList.remove('cursor-hover');
    }
  });
}

/* ------------------------------------------------------------- image fallback */

/**
 * Swap any image that fails to load for the engraved monogram placeholder,
 * so a missing asset never shows a broken-image glyph.
 */
function initImageFallbacks() {
  const replace = (img) => {
    if (img.dataset.fallbackApplied) return;
    img.dataset.fallbackApplied = 'true';
    const fill = document.createElement('div');
    fill.className = 'media-fill';
    fill.setAttribute('role', 'img');
    fill.setAttribute('aria-label', img.alt || '');
    fill.innerHTML = `<span aria-hidden="true">${esc(img.dataset.fallback || 'MB')}</span>`;
    img.replaceWith(fill);
  };

  document.querySelectorAll('img[data-fallback]').forEach((img) => {
    if (img.complete && img.naturalWidth === 0) replace(img);
    else img.addEventListener('error', () => replace(img), { once: true });
  });
}

/* ------------------------------------------------------------------ chrome */

function initHeader() {
  const header = document.querySelector('[data-header]');
  const progress = document.querySelector('[data-progress]');
  if (!header && !progress) return;

  let last = window.scrollY;
  let ticking = false;

  const update = () => {
    const y = window.scrollY;

    if (header) {
      header.classList.toggle('is-stuck', y > 24);
      const hide = y > 320 && y > last && !document.body.classList.contains('nav-open');
      header.classList.toggle('is-hidden', hide);
    }

    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
    }

    last = y;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });

  update();
}

function initNav() {
  const toggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (!toggle || !nav) return;

  const close = () => {
    document.body.classList.remove('nav-open', 'is-locked');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const open = !document.body.classList.contains('nav-open');
    document.body.classList.toggle('nav-open', open);
    document.body.classList.toggle('is-locked', open);
    toggle.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });

  // Mark the current page in the nav.
  const here = window.location.pathname.replace(/index\.html$/, '');
  nav.querySelectorAll('a').forEach((a) => {
    const href = a.getAttribute('href');
    if (href && href === here) a.setAttribute('aria-current', 'page');
  });
}

/* ------------------------------------------------------------------ motion */

const revealObserver = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        obs.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 })
  : null;

function observeReveals(root = document) {
  const targets = root.querySelectorAll('.reveal:not(.is-in), .reveal-mask:not(.is-in), .reveal-wipe:not(.is-in)');
  if (!revealObserver || reduceMotion) {
    targets.forEach((el) => el.classList.add('is-in'));
    return;
  }
  targets.forEach((el) => revealObserver.observe(el));
}

function initMagnetic() {
  if (reduceMotion || window.matchMedia('(hover: none)').matches) return;

  document.querySelectorAll('[data-magnetic]').forEach((el) => {
    const strength = Number(el.getAttribute('data-magnetic')) || 0.28;

    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate3d(${dx * strength}px, ${dy * strength}px, 0)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      el.style.transform = 'translate3d(0, 0, 0)';
      setTimeout(() => { el.style.transition = ''; }, 620);
    });
  });
}

function initHeroAura() {
  const aura = document.querySelector('[data-aura]');
  if (!aura || reduceMotion) return;

  window.addEventListener('mousemove', (e) => {
    const dx = (e.clientX / window.innerWidth - 0.5) * 90;
    const dy = (e.clientY / window.innerHeight - 0.5) * 90;
    aura.style.transform = `translate3d(calc(-50% + ${dx}px), calc(-50% + ${dy}px), 0)`;
  }, { passive: true });
}

function initParallax() {
  const items = [...document.querySelectorAll('[data-parallax]')];
  if (!items.length || reduceMotion) return;

  let ticking = false;
  const update = () => {
    const vh = window.innerHeight;
    items.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom < -200 || rect.top > vh + 200) return;
      const depth = Number(el.getAttribute('data-parallax')) || 0.08;
      const offset = (rect.top + rect.height / 2 - vh / 2) * depth;
      el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
    });
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });

  update();
}

function initMarquee() {
  document.querySelectorAll('[data-marquee]').forEach((track) => {
    const group = track.firstElementChild;
    if (!group) return;
    const clone = group.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
  });
}

/* ------------------------------------------------------------------ stats */

/**
 * Fill `[data-stat]` from the archive itself, so the numbers on the page can
 * never drift away from the work that is actually published.
 */
function renderStats() {
  const nodes = document.querySelectorAll('[data-stat]');
  if (!nodes.length || !projects.length) return;

  const years = projects.map((p) => Number(p.year)).filter(Boolean);
  const values = {
    projects: String(projects.length).padStart(2, '0'),
    disciplines: String(new Set(projects.map((p) => p.discipline)).size).padStart(2, '0'),
    years: years.length
      ? (Math.min(...years) === Math.max(...years)
          ? String(Math.min(...years))
          : `${Math.min(...years)}–${Math.max(...years)}`)
      : '—',
    assets: String(projects.reduce((n, p) => n + (p.cover ? 1 : 0) + p.images.length, 0))
  };

  nodes.forEach((el) => {
    const key = el.getAttribute('data-stat');
    if (values[key] !== undefined) el.textContent = values[key];
  });
}

/* ------------------------------------------------------- featured (home) */

function renderFeatured() {
  const host = document.querySelector('[data-featured]');
  if (!host) return;

  const list = projects.filter((p) => p.featured).slice(0, 4);

  host.innerHTML = list.map((p, i) => `
    <article class="feature reveal" style="--delay:${i * 0.06}s">
      <a class="feature__media reveal-wipe" href="${projectUrl(p.slug)}" data-cursor="view"
         aria-label="${esc(pick(p.title))}">
        <span class="feature__index">${String(i + 1).padStart(2, '0')} / ${String(list.length).padStart(2, '0')}</span>
        ${mediaMarkup(p.cover, pick(p.title), p.monogram)}
      </a>
      <div class="feature__body">
        <p class="meta-row">
          <span>${esc(t(`work.filter.${p.discipline}`))}</span>
          <span>${esc(p.year)}</span>
        </p>
        <h3 class="feature__title"><a href="${projectUrl(p.slug)}">${esc(pick(p.title))}</a></h3>
        <p class="feature__desc">${esc(pick(p.summary))}</p>
        <p><a class="text-link" href="${projectUrl(p.slug)}">${esc(t('work.view'))}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a></p>
      </div>
    </article>
  `).join('');

  observeReveals(host);
}

/* --------------------------------------------------------- work archive */

const archive = { filter: 'all', sort: 'year-desc' };

function disciplines() {
  return [...new Set(projects.map((p) => p.discipline))];
}

function renderFilters() {
  const host = document.querySelector('[data-filters]');
  if (!host) return;

  const options = ['all', ...disciplines()];
  host.innerHTML = options.map((key) => {
    const n = key === 'all' ? projects.length : projects.filter((p) => p.discipline === key).length;
    return `<button type="button" class="filter-btn${archive.filter === key ? ' is-active' : ''}"
      data-filter="${esc(key)}" aria-pressed="${archive.filter === key}">${esc(t(`work.filter.${key}`))}<sup>${n}</sup></button>`;
  }).join('');

  host.querySelectorAll('[data-filter]').forEach((btn) => {
    btn.addEventListener('click', () => {
      archive.filter = btn.getAttribute('data-filter');
      renderFilters();
      renderArchive();
    });
  });
}

function sortProjects(list) {
  const copy = [...list];
  const collator = new Intl.Collator(lang);
  switch (archive.sort) {
    case 'year-asc': return copy.sort((a, b) => Number(a.year) - Number(b.year));
    case 'title-asc': return copy.sort((a, b) => collator.compare(pick(a.title), pick(b.title)));
    case 'title-desc': return copy.sort((a, b) => collator.compare(pick(b.title), pick(a.title)));
    default: return copy.sort((a, b) => Number(b.year) - Number(a.year));
  }
}

function renderArchive() {
  const grid = document.querySelector('[data-archive]');
  if (!grid) return;

  const filtered = archive.filter === 'all'
    ? projects
    : projects.filter((p) => p.discipline === archive.filter);
  const list = sortProjects(filtered);

  const total = document.querySelector('[data-archive-count]');
  if (total) total.textContent = `${String(list.length).padStart(2, '0')} ${t('work.countSuffix')}`;

  if (!list.length) {
    grid.innerHTML = `<p class="empty-state">${esc(t('work.empty'))}</p>`;
    return;
  }

  grid.innerHTML = list.map((p, i) => `
    <a class="work-card" href="${projectUrl(p.slug)}" style="--delay:${(i % 9) * 0.07}s" data-cursor="view">
      <div class="work-card__media">
        <span class="work-card__year">${esc(p.year)}</span>
        ${mediaMarkup(p.cover, pick(p.title), p.monogram, i < 3)}
        <span class="work-card__veil"></span>
      </div>
      <div class="work-card__body">
        <h2 class="work-card__title">${esc(pick(p.title))}</h2>
        <span class="work-card__role">${esc(pick(p.role))}</span>
      </div>
    </a>
  `).join('');
}

function initArchive() {
  if (!document.querySelector('[data-archive]')) return;

  const sortSelect = document.querySelector('[data-sort]');
  if (sortSelect) {
    sortSelect.value = archive.sort;
    sortSelect.addEventListener('change', () => {
      archive.sort = sortSelect.value;
      renderArchive();
    });
  }

  renderFilters();
  renderArchive();

  document.addEventListener('languagechange', () => {
    renderFilters();
    renderArchive();
  });
}

/* -------------------------------------------------------- project detail */

function currentProject() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('p') || params.get('id');
  return projects.find((p) => p.slug === slug) || null;
}

function renderProject() {
  const host = document.querySelector('[data-project]');
  if (!host) return;

  const project = currentProject();

  if (!project) {
    host.innerHTML = `
      <div class="stack center" style="padding-block: clamp(4rem, 14vw, 10rem); justify-items:center;">
        <h1>${esc(t('project.notfound'))}</h1>
        <a class="btn" href="/gallery/">${esc(t('project.notfoundCta'))}</a>
      </div>`;
    return;
  }

  document.title = `${pick(project.title)} — Mariela Brown`;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) {
    meta.removeAttribute('data-i18n');
    meta.setAttribute('content', pick(project.summary));
  }

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  const facts = [
    { label: t('project.client'), value: esc(pick(project.client)) },
    { label: t('project.role'), value: esc(pick(project.role)) },
    { label: t('project.year'), value: esc(project.year) },
    { label: t('project.discipline'), value: esc(t(`work.filter.${project.discipline}`)) }
  ];

  host.innerHTML = `
    <div class="project-hero">
      <p class="eyebrow reveal">${esc(t(`work.filter.${project.discipline}`))} — ${esc(project.year)}</p>
      <h1 class="project-title reveal" style="--delay:.06s">${esc(pick(project.title))}</h1>
      <p class="lede project-lede reveal" style="--delay:.12s">${esc(pick(project.summary))}</p>
    </div>

    <div class="project-cover reveal-wipe" style="--delay:.16s">
      ${mediaMarkup(project.cover, pick(project.title), project.monogram, true)}
    </div>

    <div class="project-layout">
      <aside class="project-facts reveal">
        ${facts.map((f) => `
          <div class="fact">
            <span class="fact__label">${esc(f.label)}</span>
            <span class="fact__value">${f.value}</span>
          </div>`).join('')}
        <div class="fact">
          <span class="fact__label">${esc(t('project.tools'))}</span>
          <div class="chips">${project.tools.map((tool) => `<span class="chip">${esc(tool)}</span>`).join('')}</div>
        </div>
      </aside>

      <div class="prose reveal" style="--delay:.08s">
        ${(project.body[lang] || project.body.en).map((para, i) =>
          `<p${i === 0 ? ' class="first"' : ''}>${esc(para)}</p>`).join('')}
      </div>
    </div>

    ${project.images && project.images.length ? `
      <section class="project-gallery" data-lightbox-group>
        ${project.images.map((src, i) => `
          <figure class="reveal-wipe" style="--delay:${i * 0.05}s">
            <img src="${esc(src)}" alt="${esc(pick(project.title))} — ${i + 1}" loading="lazy" decoding="async">
          </figure>`).join('')}
      </section>` : ''}

    <a class="project-next" href="${projectUrl(next.slug)}">
      <span class="eyebrow no-rule">${esc(t('project.next'))}</span>
      <span class="project-next__title">${esc(pick(next.title))}</span>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
    </a>
  `;

  observeReveals(host);
  initLightbox();
}

function initLightbox() {
  const figures = document.querySelectorAll('[data-lightbox-group] figure img');
  if (!figures.length) return;

  let box = document.querySelector('[data-lightbox]');
  if (!box) {
    box = document.createElement('div');
    box.className = 'lightbox';
    box.setAttribute('data-lightbox', '');
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.innerHTML = `
      <button class="lightbox__close" type="button" aria-label="Close">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M6 6l12 12M18 6L6 18"/></svg>
      </button>
      <img alt="">`;
    document.body.appendChild(box);
  }

  const img = box.querySelector('img');
  const close = () => {
    box.classList.remove('is-open');
    document.body.classList.remove('is-locked');
  };

  figures.forEach((figure) => {
    figure.parentElement.addEventListener('click', () => {
      img.src = figure.currentSrc || figure.src;
      img.alt = figure.alt;
      box.classList.add('is-open');
      document.body.classList.add('is-locked');
    });
  });

  box.addEventListener('click', (e) => {
    if (e.target === box || e.target.closest('.lightbox__close')) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}

/* ------------------------------------------------------------- contact */

function initContactForm() {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;

  const status = form.querySelector('[data-form-status]');
  const address = form.getAttribute('data-mailto') || 'hello@marielabrown.com';

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const subject = String(data.get('subject') || '').trim();
    const message = String(data.get('message') || '').trim();

    if (!name || !email || !subject || !message) {
      if (status) {
        status.textContent = t('contact.form.invalid');
        status.classList.add('is-visible');
      }
      return;
    }

    const body = `${message}\n\n—\n${name}\n${email}`;
    if (status) {
      status.textContent = t('contact.form.sending');
      status.classList.add('is-visible');
    }
    window.location.href =
      `mailto:${address}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

/* ---------------------------------------------------------------- boot */

function boot() {
  initTheme();
  initLanguage();
  initPreloader();
  initNav();
  initHeader();
  initImageFallbacks();
  initCursor();
  initMarquee();
  initHeroAura();
  initMagnetic();

  renderStats();
  renderFeatured();
  initArchive();
  renderProject();
  initContactForm();

  observeReveals();
  initParallax();

  document.addEventListener('languagechange', () => {
    renderFeatured();
    renderProject();
  });

  document.querySelectorAll('[data-to-top]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
