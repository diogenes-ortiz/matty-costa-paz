// @ts-check
import { defineConfig } from 'astro/config';

// Publicado en GitHub Pages. Al conectar un dominio propio: cambiar site y quitar base.
export default defineConfig({
  site: 'https://diogenes-ortiz.github.io',
  base: '/matty-costa-paz',
  trailingSlash: 'always',
  server: { port: 4340 },
});
