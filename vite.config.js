import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Ensures relative assets loading in production environments
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
});
