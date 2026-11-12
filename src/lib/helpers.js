// Utilidades compartidas: rutas con base y fotos de proyectos.
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
