import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.femmenest.com/',
  integrations: [sitemap()],
  compressHTML: true,
});
