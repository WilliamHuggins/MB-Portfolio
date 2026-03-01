document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initMobileNav();
  initIntersectionObserver();
  
  // Page specific initializations
  if (document.getElementById('gallery-grid')) {
    initGallery();
  }
  
  if (document.getElementById('project-detail')) {
    renderProjectDetail();
  }
});

// Theme Management
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const storedTheme = localStorage.getItem('theme');
  
  let currentTheme = storedTheme || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeButton(themeToggle, currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      currentTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', currentTheme);
      localStorage.setItem('theme', currentTheme);
      updateThemeButton(themeToggle, currentTheme);
    });
  }
}

function updateThemeButton(btn, theme) {
  if (btn) {
    btn.textContent = theme === 'light' ? '☾' : '☼';
    btn.setAttribute('aria-label', `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`);
  }
}

// Language Management
function initLanguage() {
  const langToggle = document.getElementById('lang-toggle');
  const storedLang = localStorage.getItem('lang') || 'en';
  
  setLanguage(storedLang);

  if (langToggle) {
    langToggle.textContent = storedLang === 'en' ? 'ES' : 'EN';
    langToggle.addEventListener('click', () => {
      const newLang = localStorage.getItem('lang') === 'en' ? 'es' : 'en';
      setLanguage(newLang);
      langToggle.textContent = newLang === 'en' ? 'ES' : 'EN';
    });
  }
}

function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (window.translations && window.translations[lang] && window.translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = window.translations[lang][key];
      } else if (el.tagName === 'OPTION') {
        el.textContent = window.translations[lang][key];
      } else {
        el.textContent = window.translations[lang][key];
      }
    }
  });
}

// Mobile Navigation
function initMobileNav() {
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav-links');
  
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('active');
      const isExpanded = nav.classList.contains('active');
      toggle.setAttribute('aria-expanded', isExpanded);
      toggle.textContent = isExpanded ? '✕' : '☰';
    });
  }
}

// Intersection Observer for Fade-ins
function initIntersectionObserver() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}

// Gallery Logic
let currentFilter = 'all';
let currentSort = 'year-desc';

function initGallery() {
  const filterBtns = document.querySelectorAll('.gallery-filters .control-btn');
  const sortSelect = document.getElementById('sort-select');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentFilter = e.target.getAttribute('data-filter');
      renderGallery();
    });
  });
  
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderGallery();
    });
  }
  
  renderGallery();
}

function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid || !window.galleryData) return;
  
  let filteredData = window.galleryData;
  
  if (currentFilter !== 'all') {
    filteredData = filteredData.filter(item => item.tags.includes(currentFilter));
  }
  
  filteredData.sort((a, b) => {
    if (currentSort === 'year-desc') return parseInt(b.year) - parseInt(a.year);
    if (currentSort === 'year-asc') return parseInt(a.year) - parseInt(b.year);
    if (currentSort === 'title-asc') return a.title.localeCompare(b.title);
    if (currentSort === 'title-desc') return b.title.localeCompare(a.title);
    return 0;
  });
  
  if (filteredData.length === 0) {
    grid.innerHTML = `<p data-i18n="gallery.empty">${window.translations[localStorage.getItem('lang') || 'en']['gallery.empty']}</p>`;
    return;
  }

  const html = filteredData.map(item => `
    <a href="/project/?id=${item.id}" class="gallery-item fade-in" style="text-decoration: none; color: inherit;">
      <div class="gallery-img-wrap">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
      </div>
      <div class="gallery-meta">
        <h3 class="gallery-title">${item.title}</h3>
        <span class="gallery-role">${item.role} &mdash; ${item.year}</span>
      </div>
    </a>
  `).join('');
  
  grid.innerHTML = html;
  
  // Re-init observer for new elements
  initIntersectionObserver();
}

// Project Detail Logic
function renderProjectDetail() {
  const container = document.getElementById('project-detail');
  if (!container || !window.galleryData) return;
  
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  
  const project = window.galleryData.find(p => p.id === id);
  const lang = localStorage.getItem('lang') || 'en';
  
  if (!project) {
    container.innerHTML = `<h1>${window.translations[lang]['project.notfound']}</h1>`;
    return;
  }
  
  document.title = `${project.title} | Mariella Brown`;
  
  const toolsHtml = project.tools.map(t => `<span class="tag">${t}</span>`).join('');
  
  container.innerHTML = `
    <div class="project-header fade-in">
      <h1 class="project-title">${project.title}</h1>
      <div class="project-meta-grid">
        <div class="meta-block">
          <span class="meta-label" data-i18n="project.role">${window.translations[lang]['project.role']}</span>
          <span class="meta-value">${project.role}</span>
        </div>
        <div class="meta-block">
          <span class="meta-label" data-i18n="project.year">${window.translations[lang]['project.year']}</span>
          <span class="meta-value">${project.year}</span>
        </div>
        <div class="meta-block">
          <span class="meta-label" data-i18n="project.tools">${window.translations[lang]['project.tools']}</span>
          <div class="tags-container">${toolsHtml}</div>
        </div>
      </div>
    </div>
    
    <div class="project-hero-image fade-in">
      <img src="${project.image.replace('600/800', '1200/800')}" alt="${project.title}" />
    </div>
    
    <div class="project-description fade-in">
      <p>${project.description}</p>
    </div>
  `;
  
  initIntersectionObserver();
}
