import { cp, access } from 'node:fs/promises';
import path from 'node:path';
import { defineConfig, type Plugin } from 'vite';

const root = __dirname;

/**
 * Ship `portfolio/` — Mariela's raw project assets — alongside the built site.
 * Vite serves it straight from the project root in dev; this copies it into
 * `dist/` for production so `/portfolio/<project>/<image>` keeps resolving.
 */
function copyPortfolioAssets(): Plugin {
  return {
    name: 'copy-portfolio-assets',
    apply: 'build',
    async closeBundle() {
      const from = path.resolve(root, 'portfolio');
      try {
        await access(from);
      } catch {
        this.warn('No portfolio/ folder found — skipping asset copy.');
        return;
      }
      await cp(from, path.resolve(root, 'dist/portfolio'), {
        recursive: true,
        filter: (src) => {
          const rel = path.relative(from, src);
          if (!rel) return true;
          return !/(^|[\\/])[._]/.test(rel) && !src.endsWith('.md');
        }
      });
    }
  };
}

export default defineConfig({
  plugins: [copyPortfolioAssets()],
  resolve: {
    alias: { '@': path.resolve(root, '.') }
  },
  build: {
    target: 'es2020',
    cssMinify: true,
    rollupOptions: {
      input: {
        main: path.resolve(root, 'index.html'),
        bio: path.resolve(root, 'bio/index.html'),
        gallery: path.resolve(root, 'gallery/index.html'),
        contact: path.resolve(root, 'contact/index.html'),
        project: path.resolve(root, 'project/index.html'),
        styleguide: path.resolve(root, 'styleguide/index.html')
      }
    }
  },
  server: {
    // HMR is disabled in AI Studio via the DISABLE_HMR env var.
    hmr: process.env.DISABLE_HMR !== 'true'
  }
});
