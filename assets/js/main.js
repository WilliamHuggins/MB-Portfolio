document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initMobileNav();
  initIntersectionObserver();
  
  // Page specific initializations
  if (document.getElementById('gallery-grid')) {
    renderGallery();
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

// Gallery Rendering
function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid || !window.galleryData) return;
  
  if (window.galleryData.length === 0) {
    grid.innerHTML = `<p data-i18n="gallery.empty">${window.translations[localStorage.getItem('lang') || 'en']['gallery.empty']}</p>`;
    return;
  }

  const html = window.galleryData.map(item => `
    <article class="gallery-item fade-in">
      <div class="gallery-img-wrap">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
      </div>
      <div class="gallery-meta">
        <h3 class="gallery-title">${item.title}</h3>
        <span class="gallery-role">${item.role} &mdash; ${item.year}</span>
      </div>
    </article>
  `).join('');
  
  grid.innerHTML = html;
  
  // Re-init observer for new elements
  initIntersectionObserver();
}
