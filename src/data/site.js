// Datos del sitio. Regla: nada inventado. Lo que falta va como [COMPLETAR].

export const SITE = {
  name: 'Matty Costa Paz',
  email: 'info@mattycostapaz.com.ar', // del sitio original (2024); [CONFIRMAR] que siga activo
  instagram: 'https://www.instagram.com/mattycostapaz/',
  linkedin: 'https://www.linkedin.com/in/matty-costa-paz-94992024/',
  cities: ['Buenos Aires', 'José Ignacio', 'París', 'Madrid'],
};

// Rutas por idioma (las páginas internas se construyen en la siguiente etapa).
export const ROUTES = {
  es: { home: '', projects: 'proyectos/', studio: 'estudio/', services: 'servicios/', press: 'prensa/', contact: 'contacto/' },
  en: { home: 'en/', projects: 'en/projects/', studio: 'en/studio/', services: 'en/services/', press: 'en/press/', contact: 'en/contact/' },
};

export const T = {
  es: {
    lang: 'es',
    locale: 'es_AR',
    title: 'Matty Costa Paz | Diseño de interiores',
    description:
      'Matty Costa Paz, diseñadora de interiores con más de 30 años de trayectoria. Proyectos residenciales y corporativos en Buenos Aires, José Ignacio, París y Madrid.',
    nav: { projects: 'Proyectos', studio: 'Estudio', services: 'Servicios', press: 'Prensa', contact: 'Contacto' },
    menu: 'Menú',
    close: 'Cerrar',
    role: 'Diseño de interiores',
    heroCaption: 'Palacio de los Patos, Buenos Aires',
    statement: 'Interiores que integran arquitectura, materia y luz.',
    intro:
      'Más de 30 años diseñando residencias y espacios de trabajo, siempre en equipo con el cliente, el estudio de arquitectura y la empresa constructora.',
    selected: 'Proyectos seleccionados',
    latest: 'Últimos proyectos',
    vertical: 'Recientes',
    verticalStudio: 'Estudio',
    verticalPress: 'Prensa',
    view: 'Ver proyecto',
    featured: 'Proyecto destacado',
    pressTitle: 'En la prensa',
    allProjects: 'Ver todos los proyectos',
    studioLabel: 'Estudio',
    studioText:
      'Su trabajo combina el uso refinado de los materiales, una paleta de colores sofisticada y el diálogo entre el diseño contemporáneo y las piezas con historia propia. El resultado son espacios que reflejan la personalidad de quienes los habitan.',
    memberships: [
      'Leaders of Design Council, miembro',
      'DArA, Comisión Directiva durante casi una década',
      'Nexo con IFI, International Federation of Interior Architects / Designers',
    ],
    studioLink: 'Conocer el estudio',
    pressLabel: 'Prensa',
    pressLink: 'Ver notas',
    contactLabel: 'Contacto',
    contactTitle: 'Conversemos sobre su próximo proyecto.',
    photo: 'Foto',
    pending: '[COMPLETAR]',
    rights: 'Todos los derechos reservados.',
    switchTo: 'English',
  },
  en: {
    lang: 'en',
    locale: 'en_US',
    title: 'Matty Costa Paz | Interior Design',
    description:
      'Matty Costa Paz, interior designer with over 30 years of experience. Residential and corporate projects in Buenos Aires, José Ignacio, Paris and Madrid.',
    nav: { projects: 'Projects', studio: 'Studio', services: 'Services', press: 'Press', contact: 'Contact' },
    menu: 'Menu',
    close: 'Close',
    role: 'Interior design',
    heroCaption: 'Palacio de los Patos, Buenos Aires',
    statement: 'Interiors that bring together architecture, material and light.',
    intro:
      'Over 30 years designing residences and workplaces, always working as a team with the client, the architecture studio and the builder.',
    selected: 'Selected projects',
    latest: 'Latest work',
    vertical: 'Recent',
    verticalStudio: 'Studio',
    verticalPress: 'Press',
    view: 'View project',
    featured: 'Featured project',
    pressTitle: 'In the press',
    allProjects: 'View all projects',
    studioLabel: 'Studio',
    studioText:
      'Her work combines a refined use of materials, a sophisticated colour palette and a dialogue between contemporary design and pieces with a history of their own, creating spaces that reflect the personality of the people who live in them.',
    memberships: [
      'Leaders of Design Council, member',
      'DArA, Executive Board for nearly a decade',
      'Liaison with IFI, International Federation of Interior Architects / Designers',
    ],
    studioLink: 'About the studio',
    pressLabel: 'Press',
    pressLink: 'Read the press',
    contactLabel: 'Contact',
    contactTitle: "Let's talk about your next project.",
    photo: 'Photo',
    pending: '[TO COMPLETE]',
    rights: 'All rights reserved.',
    switchTo: 'Español',
  },
};

export const CATEGORIES = {
  residencial: { es: 'Residencial', en: 'Residential' },
  corporativo: { es: 'Corporativo', en: 'Corporate' },
  casafoa: { es: 'Casa FOA', en: 'Casa FOA' },
  internacional: { es: 'Internacional', en: 'International' },
};

// Proyectos con fotos. Fuente de cada dato en `source`. year: null => [COMPLETAR].
// Las fotos son de las notas de prensa: confirmar con Matty el permiso de uso y el crédito.
export const PROJECTS = [
  {
    slug: 'piso-barrio-salamanca',
    name: { es: 'Piso en Barrio de Salamanca', en: 'Barrio de Salamanca Apartment' },
    category: 'internacional',
    type: { es: 'Residencial', en: 'Residential' },
    place: { es: 'Madrid, España', en: 'Madrid, Spain' },
    year: null,
    area: '300 m² aprox.',
    credit: 'Belén Imaz',
    excerpt: {
      es: 'Casi 300 m² en el barrio de Salamanca, reformados en ocho meses. Espacios abiertos y conectados, blanco absoluto y molduras de yeso que ponen en valor la esencia clásica del edificio.',
      en: 'Almost 300 m² in Madrid’s Salamanca district, renovated in eight months. Open, connected spaces, pure white and plaster mouldings that honour the classic spirit of the building.',
    },
    source: 'Elle Decor España 06/03/2023; Casa Vogue Brasil 02/2023',
  },
  {
    slug: 'beach-house-jose-ignacio',
    name: { es: 'Beach House José Ignacio', en: 'Beach House José Ignacio' },
    category: 'internacional',
    type: { es: 'Residencial', en: 'Residential' },
    place: { es: 'José Ignacio, Uruguay', en: 'José Ignacio, Uruguay' },
    year: null,
    credit: '[COMPLETAR] (Elle publica las fotos como D.R.)',
    excerpt: {
      es: 'Una casa frente al mar, rediseñada desde la fachada hasta el paisajismo. Blanco, materiales naturales y celosías de madera de inspiración marroquí, en diálogo con una colección de arte moderno.',
      en: 'A beachfront house, redesigned from façade to landscape. White surfaces, natural materials and Moroccan-inspired timber lattices in dialogue with a modern art collection.',
    },
    source: 'Elle Argentina 04/12/2020',
  },
];

export const PRESS = [
  { name: 'Infobae', file: 'infobae.svg', h: 22, url: 'https://www.infobae.com/grandes-libros/2021/01/17/ideas-para-repensar-tu-casa-por-pompi-gutnisky-y-matty-costa-paz/' },
  { name: 'Elle Decor', file: 'elle-decor.svg', h: 26, url: 'https://www.elledecor.com/es/casas/a43208138/piso-barrio-salamanca-minimalista-elegante-senorial-blanco/' },
  { name: 'Casa Vogue', file: 'casavogue.png', h: 34, url: 'https://casavogue.globo.com/interiores/decor-do-dia/noticia/2023/02/decor-do-dia-area-social-com-sala-intima-em-abordagem-minimalista.ghtml' },
  { name: 'Elle', file: 'elle.svg', h: 26, url: 'https://elle.clarin.com/deco/jose-ignacio-casa-ultramoderna-cara-mar_0_pR0ndnGiPr.html' },
  { name: 'AD', file: 'ad.svg', h: 34, url: 'https://www.ad-italia.it/gallery/arte-collezionista-palacio-de-los-patos-matty-costa-paz/' },
  { name: 'La Nación', file: 'lanacion.svg', h: 16, url: null }, // [COMPLETAR] link completo
  { name: 'Estilo Propio', file: 'estilopropio.avif', h: 20, url: 'https://revistaestilopropio.com/nota/militante-del-diseno/' },
  { name: 'ARQA', file: 'arqa.png', h: 36, url: 'https://arqa.com/autores/matty-costa-paz' },
  { name: 'ARQ Clarín', file: 'arq.png', h: 30, url: null },
  { name: 'El Mercurio', file: 'elmercurio.svg', h: 15, url: null },
];
