// @ts-check
import { defineConfig } from 'astro/config';

// Publicado en GitHub Pages con dominio propio (public/CNAME).
export default defineConfig({
  site: 'https://mattycostapaz.com',
  trailingSlash: 'always',
  server: { port: 4340 },
});
