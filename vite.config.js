import { copyFileSync } from 'node:fs';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    {
      name: 'copy-classic-scripts',
      closeBundle() {
        copyFileSync('support.js', 'dist/support.js');
        copyFileSync('app.js', 'dist/app.js');
      },
    },
  ],
});
