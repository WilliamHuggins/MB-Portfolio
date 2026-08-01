import path from 'node:path';
import { defineConfig, type Plugin } from 'vite';

const root = __dirname;

/**
 * Ship `portfolio/` — Mariela's project assets — alongside the built site.
 * Vite serves the folder straight from the project root in dev; for production
 * the images are resized and re-encoded into `dist/portfolio/` at the same
 * relative paths, so `/portfolio/<project>/<image>` keeps resolving while the
 * originals stay untouched in the repository.
 */
function portfolioAssets(): Plugin {
  return {
    name: 'portfolio-assets',
    apply: 'build',
    async closeBundle() {
      const { optimizePortfolio } = await import('./scripts/optimize-images.mjs');
      await optimizePortfolio(path.resolve(root, 'dist/portfolio'), (msg: string) =>
        this.info(msg)
      );
    }
  };
}

export default defineConfig({
  plugins: [portfolioAssets()],
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
