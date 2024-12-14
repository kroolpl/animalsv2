import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

export default defineConfig({
  site: 'https://pawswhiskers.pl',
  integrations: [tailwind(), icon()],
  vite: {
    ssr: {
      noExternal: ['@fontsource/lato', '@fontsource/playfair-display']
    }
  }
});