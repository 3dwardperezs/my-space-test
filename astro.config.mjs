import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import netlify from '@astrojs/netlify';
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  adapter: netlify(),
  site: 'https://3dwardperezs.github.io',
  base: 'my-space-test'
});
