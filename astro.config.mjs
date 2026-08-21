import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://qreturns.com',
  integrations: [tailwind({ applyBaseStyles: false })],
});
