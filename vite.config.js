import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import FullReload from 'vite-plugin-full-reload';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(process.cwd(), 'src/components'),
    }),
    FullReload(['src/components/**/*.html']),
  ],
});
