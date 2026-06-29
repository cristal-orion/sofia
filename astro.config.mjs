import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deploy: dominio dedicato prontosofia.it, servito da Nginx (Docker) su Coolify.
export default defineConfig({
  site: 'https://prontosofia.it',
  server: { port: 4321 },
  integrations: [sitemap()],
});
