// Sitemap con pares español/inglés (hreflang) e imágenes de cada obra.
import { getImage } from 'astro:assets';
import { ROUTES, PROJECTS } from '../data/site.js';
import { photo, altFor } from '../lib/helpers.js';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export async function GET({ site }) {
  const base = import.meta.env.BASE_URL.replace(/[/]?$/, '/');
  const abs = (p) => new URL(base + p, site).href;
  const today = new Date().toISOString().slice(0, 10);

  // [ruta es, ruta en, prioridad, imágenes]
  const pages = ['home', 'projects', 'studio', 'press', 'contact'].map((k) => [ROUTES.es[k], ROUTES.en[k], k === 'home' ? '1.0' : '0.8', []]);
  for (const p of PROJECTS) {
    const imgs = await Promise.all(p.gallery.map(async ([f]) => ({
      loc: abs((await getImage({ src: photo(p.slug, f), width: 1200, format: 'jpg' })).src.replace(base, '')),
      es: altFor(p, f, 'es'),
    })));
    pages.push([`${ROUTES.es.projects}${p.slug}/`, `${ROUTES.en.projects}${p.slug}/`, '0.7', imgs]);
  }

  const urls = pages.flatMap(([es, en, pr, imgs]) => [es, en].map((loc) => `  <url>
    <loc>${abs(loc)}</loc>
    <lastmod>${today}</lastmod>
    <priority>${pr}</priority>
    <xhtml:link rel="alternate" hreflang="es" href="${abs(es)}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${abs(en)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(es)}"/>
${imgs.map((i) => `    <image:image><image:loc>${esc(i.loc)}</image:loc><image:caption>${esc(i.es)}</image:caption></image:image>`).join('\n')}
  </url>`)).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
