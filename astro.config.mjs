import { defineConfig } from 'astro/config';

// NOTE: deploy target is /sofia on affinitylab.it.
// Set `base: '/sofia'` (and prefix public assets with import.meta.env.BASE_URL)
// when wiring up the production build.
export default defineConfig({
  site: 'https://www.affinitylab.it',
  server: { port: 4321 },
});
