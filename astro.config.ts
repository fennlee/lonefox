import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './lonefox.config';

export default defineConfig({
  site: site.url,
  integrations: [sitemap()],
});
