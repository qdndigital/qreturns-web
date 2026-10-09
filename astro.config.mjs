import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://qreturns.com',
  // Inline each page's CSS so it isn't a separate render-blocking request.
  build: { inlineStylesheets: 'always' },
  integrations: [tailwind({ applyBaseStyles: false })],
});
