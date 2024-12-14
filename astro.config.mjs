import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import alpinejs from '@astrojs/alpinejs';

export default defineConfig({
  site: 'https://pawswhiskers.pl',
  integrations: [tailwind(), icon(), alpinejs()],
  vite: {
    ssr: {
      noExternal: ['@fontsource/lato', '@fontsource/playfair-display']
    }
  }
});