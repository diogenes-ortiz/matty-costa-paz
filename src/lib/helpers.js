// Utilidades compartidas: rutas con base, fotos de proyectos y textos SEO.
const photos = import.meta.glob('../assets/projects/*/*.{jpg,jpeg,png}', { eager: true, import: 'default' });
const logos = import.meta.glob('../assets/press/*', { eager: true, import: 'default' });

export const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
export const u = (p = '') => base + p;
export const photo = (slug, file) => {
  const img = photos[`../assets/projects/${slug}/${file}`];
  if (!img) throw new Error(`Falta la foto ${slug}/${file}`);
  return img;
};
export const logo = (file) => logos[`../assets/press/${file}`];

// Archivo de la galería por posición (0 = primera foto).
export const nth = (p, i) => p.gallery[i][0];

// Lugar corto para títulos y alt: "Retiro, Ciudad de Buenos Aires" -> "Buenos Aires".
export const shortPlace = (p, lang) => p.seoPlace?.[lang] ?? p.place[lang].split(',')[0];

// Texto alternativo descriptivo: qué se ve + obra + lugar (+ autoría en la foto principal).
export const altFor = (p, file, lang, { full = false } = {}) => {
  const g = p.gallery.find((x) => x[0] === file);
  const what = g ? g[lang === 'es' ? 1 : 2] : p.name[lang];
  const where = shortPlace(p, lang);
  const ctx = p.name[lang] === where ? where : `${p.name[lang]}, ${where}`;
  if (full) return lang === 'es'
    ? `${what}. ${ctx}, proyecto de interiorismo de Matty Costa Paz`
    : `${what}. ${ctx}, interior design project by Matty Costa Paz`;
  return `${what}, ${ctx}`;
};

// Intro factual para obras sin texto propio (solo datos del portfolio).
export const factualIntro = (p, lang) => lang === 'es'
  ? `${p.scope.es} que realicé en ${p.place.es}, finalizado en ${p.year}.`
  : `${p.scope.en} project I completed in ${p.place.en} in ${p.year}.`;

// Título y descripción SEO de cada obra.
export const projectSeo = (p, lang) => {
  const where = shortPlace(p, lang);
  const n = p.name[lang];
  const es = lang === 'es';
  const kw = es ? 'Interiorismo' : 'Interior design';
  // De más completo a más corto: el primero que entra en 62 caracteres.
  const options = n.includes(where)
    ? [`${n} (${p.year}) | ${kw}, Matty Costa Paz`, `${n} | ${kw}, Matty Costa Paz`, `${n} | Matty Costa Paz`]
    : [`${n} · ${kw} ${es ? 'en' : 'in'} ${where} | Matty Costa Paz`, `${n} | ${kw}, Matty Costa Paz`, `${n} | Matty Costa Paz`];
  const title = options.find((x) => x.length <= 62) ?? options.at(-1);
  // Descripción: lugar, año, alcance y palabra clave, en menos de 160 caracteres.
  const ctx = n.includes(where) ? `${n} (${p.year})` : `${n} (${where}, ${p.year})`;
  const scope = p.scope[lang].toLowerCase();
  const variants = es
    ? [`${ctx}: ${scope} de Matty Costa Paz, interiorista en Buenos Aires. Fotos y ficha de la obra.`, `${ctx}: ${scope} de Matty Costa Paz, interiorista en Buenos Aires.`]
    : [`${ctx}: ${scope} by Matty Costa Paz, interior designer in Buenos Aires. Photos and project details.`, `${ctx}: ${scope} by Matty Costa Paz, interior designer in Buenos Aires.`];
  const description = variants.find((x) => x.length <= 160) ?? variants.at(-1);
  return { title, description };
};
