// robots.txt. Nota: en GitHub Pages bajo /matty-costa-paz/ los buscadores solo leen el robots.txt
// de la raíz del dominio; este archivo sirve cuando se conecte un dominio propio.
// Mientras tanto, el sitemap se envía a mano en Google Search Console.
export function GET({ site }) {
  const base = import.meta.env.BASE_URL.replace(/[/]?$/, '/');
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${new URL(base + 'sitemap.xml', site).href}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
