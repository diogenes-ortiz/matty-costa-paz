// Datos del sitio. Regla: nada inventado. Lo que falta va como [COMPLETAR].
// Los textos están en primera persona: habla Matty.

export const SITE = {
  name: 'Matty Costa Paz',
  email: 'info@mattycostapaz.com.ar', // del sitio original (2024); [CONFIRMAR] que siga activo
  instagram: 'https://www.instagram.com/mattycostapaz/',
  linkedin: 'https://www.linkedin.com/in/matty-costa-paz-94992024/',
  cities: ['Buenos Aires', 'José Ignacio', 'París', 'Madrid'],
};

export const ROUTES = {
  es: { home: '', projects: 'proyectos/', studio: 'estudio/', press: 'prensa/', contact: 'contacto/' },
  en: { home: 'en/', projects: 'en/projects/', studio: 'en/studio/', press: 'en/press/', contact: 'en/contact/' },
};
export const NAV = ['projects', 'studio', 'press', 'contact'];

export const T = {
  es: {
    lang: 'es',
    locale: 'es_AR',
    title: 'Matty Costa Paz | Diseño de interiores',
    description:
      'Soy Matty Costa Paz, diseñadora de interiores con más de 30 años de trayectoria. Proyectos residenciales y corporativos en Buenos Aires, José Ignacio, París y Madrid.',
    nav: { projects: 'Proyectos', studio: 'Estudio', press: 'Prensa', contact: 'Contacto' },
    menu: 'Menú',
    close: 'Cerrar',
    role: 'Diseño de interiores',
    statement: 'Diseño interiores que integran arquitectura, materia y luz.',
    intro:
      'Hace más de 30 años que diseño residencias y espacios de trabajo, siempre en equipo con cada cliente, el estudio de arquitectura y la empresa constructora.',
    latest: 'Últimos proyectos',
    vertical: 'Recientes',
    verticalStudio: 'Estudio',
    allProjects: 'Ver todos los proyectos',
    view: 'Ver proyecto',
    featured: 'Proyecto destacado',
    studioLabel: 'Estudio',
    studioText:
      'Trabajo con un uso refinado de los materiales, colores sofisticados y el diálogo entre el diseño contemporáneo y las piezas con historia propia. Busco que cada espacio refleje la personalidad de quienes lo habitan.',
    memberships: [
      'Miembro de Leaders of Design Council',
      'Integré la Comisión Directiva de DArA durante casi una década',
      'Fui nexo de DArA con IFI, International Federation of Interior Architects / Designers',
    ],
    studioLink: 'Conocer el estudio',
    pressTitle: 'En la prensa',
    pressLink: 'Ver notas',
    contactLabel: 'Contacto',
    contactTitle: 'Contame sobre tu próximo proyecto.',
    rights: 'Todos los derechos reservados.',
    switchTo: 'English',
    skip: 'Saltar al contenido',
    // Proyectos
    projectsTitle: 'Proyectos',
    projectsIntro: 'Una selección de obras residenciales, corporativas y espacios para Casa FOA, en Argentina, Uruguay y Europa.',
    all: 'Todos',
    emptyCat: 'Estoy cargando los proyectos de esta categoría.',
    fLocation: 'Ubicación', fYear: 'Año', fType: 'Tipo', fArea: 'Superficie', fPhoto: 'Fotografía', fPress: 'Publicado en',
    next: 'Proyecto siguiente',
    back: 'Todos los proyectos',
    // Estudio
    studioTitle: 'Estudio',
    // Prensa
    pressPageTitle: 'Prensa',
    pressIntro: 'Notas, entrevistas y publicaciones sobre mi trabajo.',
    pressOnline: 'Notas online',
    pressArchive: 'Archivo gráfico',
    pressArchiveNote: 'Publicaciones en revistas impresas recopiladas en mi sitio anterior.',
    read: 'Leer nota',
    // Contacto
    contactPageTitle: 'Contacto',
    contactIntro: 'Escribime por mail o por mensaje en Instagram o LinkedIn y coordinamos una primera charla.',
    pending: '[COMPLETAR]',
  },
  en: {
    lang: 'en',
    locale: 'en_US',
    title: 'Matty Costa Paz | Interior Design',
    description:
      "I'm Matty Costa Paz, an interior designer with over 30 years of experience. Residential and corporate projects in Buenos Aires, José Ignacio, Paris and Madrid.",
    nav: { projects: 'Projects', studio: 'Studio', press: 'Press', contact: 'Contact' },
    menu: 'Menu',
    close: 'Close',
    role: 'Interior design',
    statement: 'I design interiors that bring together architecture, material and light.',
    intro:
      'For over 30 years I have been designing homes and workplaces, always working as a team with each client, the architecture studio and the builder.',
    latest: 'Latest work',
    vertical: 'Recent',
    verticalStudio: 'Studio',
    allProjects: 'View all projects',
    view: 'View project',
    featured: 'Featured project',
    studioLabel: 'Studio',
    studioText:
      'I work with a refined use of materials, sophisticated colours and a dialogue between contemporary design and pieces with a history of their own. I want every space to reflect the personality of the people who live in it.',
    memberships: [
      'Member of the Leaders of Design Council',
      'Served on the DArA Executive Board for nearly a decade',
      'Liaison between DArA and IFI, International Federation of Interior Architects / Designers',
    ],
    studioLink: 'About the studio',
    pressTitle: 'In the press',
    pressLink: 'Read the press',
    contactLabel: 'Contact',
    contactTitle: 'Tell me about your next project.',
    rights: 'All rights reserved.',
    switchTo: 'Español',
    skip: 'Skip to content',
    projectsTitle: 'Projects',
    projectsIntro: 'A selection of residential and corporate work and Casa FOA spaces in Argentina, Uruguay and Europe.',
    all: 'All',
    emptyCat: 'Projects in this category are on their way.',
    fLocation: 'Location', fYear: 'Year', fType: 'Type', fArea: 'Area', fPhoto: 'Photography', fPress: 'Published in',
    next: 'Next project',
    back: 'All projects',
    studioTitle: 'Studio',
    pressPageTitle: 'Press',
    pressIntro: 'Articles, interviews and publications about my work.',
    pressOnline: 'Online',
    pressArchive: 'Print archive',
    pressArchiveNote: 'Print magazine features collected on my previous website.',
    read: 'Read article',
    contactPageTitle: 'Contact',
    contactIntro: 'Email me or send a message on Instagram or LinkedIn and we will set up a first conversation.',
    pending: '[TO COMPLETE]',
  },
};

export const CATEGORIES = {
  residencial: { es: 'Residencial', en: 'Residential' },
  corporativo: { es: 'Corporativo', en: 'Corporate' },
  casafoa: { es: 'Casa FOA', en: 'Casa FOA' },
  internacional: { es: 'Internacional', en: 'International' },
};

// Proyectos con fotos, en el orden de la grilla. year: null => [COMPLETAR].
// Las fotos vienen de las notas de prensa: confirmar con Matty el permiso de uso y el crédito.
export const PROJECTS = [
  {
    slug: 'piso-barrio-salamanca',
    name: { es: 'Piso en Barrio de Salamanca', en: 'Barrio de Salamanca Apartment' },
    categories: ['residencial', 'internacional'],
    type: { es: 'Residencial', en: 'Residential' },
    place: { es: 'Madrid, España', en: 'Madrid, Spain' },
    year: null,
    area: { es: 'Casi 300 m²', en: 'Almost 300 m²' },
    credit: 'Belén Imaz',
    cover: 'salon-sofa-marron.jpg',
    card: 'salon.jpg',
    press: ['elledecor', 'casavogue'],
    excerpt: {
      es: 'Reformé casi 300 m² en el barrio de Salamanca en ocho meses. Espacios abiertos y conectados, blanco absoluto y molduras de yeso que ponen en valor la esencia clásica del edificio.',
      en: 'I renovated almost 300 m² in Madrid’s Salamanca district in eight months. Open, connected spaces, pure white and plaster mouldings that honour the classic spirit of the building.',
    },
    body: {
      es: [
        'La propietaria, argentina, empezaba una nueva etapa en Madrid y volvió a confiarme su casa: veinte años antes habíamos hecho juntas su primer proyecto, un ático en Palermo Chico.',
        'El piso tenía todo a favor: suelos de madera natural, techos altísimos, balcones que llenan el salón de luz y un patio que da silencio a las áreas privadas. Mi trabajo fue darle un carácter propio, respetando y poniendo en valor la esencia clásica del edificio.',
        'Planteé una planta abierta, con continuidad visual entre la entrada, el salón, el comedor y una sala íntima separada por un cerramiento de aluminio bronce y vidrio. La idea fue no generar divisiones, sino conexiones. Sobre el blanco de las paredes sumé molduras de yeso a la manera de la época del edificio, para dar ritmo y calidad a los ambientes.',
        'Lo terminamos en ocho meses y varios viajes. El resultado es un refugio sereno, una página en blanco para un nuevo capítulo.',
      ],
      en: [
        'The owner, from Argentina, was starting a new chapter in Madrid and trusted me with her home once again: twenty years earlier we had done her first project together, a penthouse in Palermo Chico.',
        'The apartment had everything going for it: natural wood floors, very high ceilings, balconies that flood the living room with light and a courtyard that brings silence to the private areas. My job was to give it its own character while respecting and enhancing the classic spirit of the building.',
        'I designed an open plan, with visual continuity between the entrance, living room, dining room and an intimate sitting room set behind a bronze aluminium and glass partition. The idea was to create connections, not divisions. Against the white walls I added plaster mouldings in the style of the building’s period, bringing rhythm and quality to each room.',
        'We finished it in eight months and several trips. The result is a serene retreat, a blank page for a new chapter.',
      ],
    },
    gallery: [
      ['salon-sofa-marron.jpg', 'Living blanco con sofá de cuero marrón, butacas tapizadas y alfombra a rayas', 'White living room with a tan leather sofa, upholstered armchairs and a striped rug'],
      ['salon.jpg', 'Rincón del salón con butaca blanca, mesa de mármol y ventanal', 'Living room corner with a white armchair, marble table and tall window'],
      ['mesa-centro.jpg', 'Mesa de centro de mármol de Carrara con objetos y flores rojas', 'Carrara marble coffee table with objects and red flowers'],
      ['salon-comedor.jpg', 'Salón y comedor integrados con balcones y molduras', 'Open living and dining room with balconies and mouldings'],
      ['comedor-alfombra.jpg', 'Comedor con mesa oscura, sillas blancas y lámparas colgantes', 'Dining room with a dark table, white chairs and pendant lamps'],
      ['sala-estar-cerramiento.jpg', 'Sala íntima tras un cerramiento de aluminio bronce y vidrio', 'Intimate sitting room behind a bronze aluminium and glass partition'],
      ['ceramiento-cristal.jpg', 'Cerramiento de vidrio y perfiles de aluminio bronce', 'Glass partition with bronze aluminium frames'],
      ['pasillo-entrada.jpg', 'Pasillo de entrada blanco con vista al salón', 'White entrance hall looking into the living room'],
      ['cocina.jpg', 'Cocina blanca con mesa redonda y sillas tapizadas', 'White kitchen with a round table and upholstered chairs'],
      ['escritorio-trabajo.jpg', 'Escritorio con silla de diseño, lámpara y obra de arte', 'Desk with a design chair, lamp and artwork'],
      ['dormitorio.jpg', 'Dormitorio principal con ropa de cama de lino natural', 'Main bedroom with natural linen bedding'],
      ['dormitorio-camas.jpg', 'Dormitorio de huéspedes con dos camas y obras de arte', 'Guest bedroom with twin beds and artworks'],
      ['bano.jpg', 'Baño de mármol blanco con butaca color mostaza', 'White marble bathroom with a mustard armchair'],
    ],
  },
  {
    slug: 'beach-house-jose-ignacio',
    name: { es: 'Beach House José Ignacio', en: 'Beach House José Ignacio' },
    categories: ['residencial', 'internacional'],
    type: { es: 'Residencial', en: 'Residential' },
    place: { es: 'José Ignacio, Uruguay', en: 'José Ignacio, Uruguay' },
    year: null,
    area: null,
    credit: null, // [COMPLETAR] Elle publica las fotos como D.R.
    cover: 'fachada.jpg',
    card: 'escalera-terraza.jpg',
    press: ['elle'],
    excerpt: {
      es: 'Rediseñamos esta casa frente al mar desde la fachada hasta el paisajismo. Blanco, materiales naturales y celosías de madera de inspiración marroquí, en diálogo con una colección de arte moderno.',
      en: 'We redesigned this beachfront house from façade to landscape. White surfaces, natural materials and Moroccan-inspired timber lattices in dialogue with a modern art collection.',
    },
    body: {
      es: [
        'Me convocaron para completar una casa frente a la playa de José Ignacio. El proyecto original, llave en mano, dejaba mucho por definir antes de convertirse en un lugar a medida y con identidad.',
        'Desde mi estudio repensamos todo, desde la fachada hasta el paisajismo, y en ese proceso aparecieron nuevos espacios y usos. Pensé ambientes para vivir tanto en verano como en invierno, con foco en la privacidad de quienes la habitan.',
        'Tomé elementos de la arquitectura marroquí: el predominio del blanco, los materiales naturales, el espejo de agua central, las piedras y las celosías de las aberturas. En el interior, equilibré una colección de arte moderno con muebles y objetos encontrados en largas recorridas.',
      ],
      en: [
        'I was brought in to complete a beachfront house in José Ignacio. The original turnkey project left a lot undefined before it could become a tailored place with its own identity.',
        'My studio rethought everything, from the façade to the landscaping, and new spaces and uses emerged along the way. I designed rooms to be lived in both summer and winter, focusing on the privacy of the people who live there.',
        'I drew on Moroccan architecture: the predominance of white, natural materials, the central reflecting pool, stone and timber lattices on the openings. Inside, I balanced a modern art collection with furniture and objects found on long searches.',
      ],
    },
    gallery: [
      ['fachada.jpg', 'Fachada blanca con alero de quincha y palmeras', 'White façade with a thatched eave and palm trees'],
      ['escalera-terraza.jpg', 'Escalera blanca hacia la terraza bajo el cielo', 'White staircase leading up to the terrace'],
      ['playa.jpg', 'Vista al mar desde la terraza con camastro', 'Sea view from the terrace with a daybed'],
      ['galeria-entrada.jpg', 'Celosías de madera y sillas de mimbre en la entrada', 'Timber lattices and wicker chairs at the entrance'],
      ['comedor.jpg', 'Comedor con lámparas de mimbre y sillas tejidas en cardo', 'Dining room with wicker pendant lamps and woven chairs'],
      ['dormitorio.jpg', 'Dormitorio con materiales naturales y obra de arte', 'Bedroom with natural materials and an artwork'],
      ['toilette.jpg', 'Toilette con rayas azules y blancas y espejo de escotilla', 'Powder room with blue and white stripes and a porthole mirror'],
      ['pileta.jpg', 'Pileta con camastros blancos bajo alero de quincha', 'Pool with white loungers under a thatched eave'],
      ['deck.jpg', 'Deck de madera hacia la playa', 'Timber deck leading towards the beach'],
    ],
  },
];

// Notas de prensa. logo => archivo en src/assets/press.
export const PRESS = [
  { id: 'elledecor', media: 'Elle Decor España', logo: 'elle-decor.svg', h: 26, year: 2023, title: 'Un piso elegante y señorial decorado en estilo minimalista y cálido a la vez', url: 'https://www.elledecor.com/es/casas/a43208138/piso-barrio-salamanca-minimalista-elegante-senorial-blanco/' },
  { id: 'casavogue', media: 'Casa Vogue Brasil', logo: 'casavogue.png', h: 34, year: 2023, title: 'Décor do dia: área social com sala íntima em abordagem minimalista', url: 'https://casavogue.globo.com/interiores/decor-do-dia/noticia/2023/02/decor-do-dia-area-social-com-sala-intima-em-abordagem-minimalista.ghtml' },
  { id: 'infobae', media: 'Infobae', logo: 'infobae.svg', h: 22, year: 2021, title: 'Ideas para repensar tu casa, por Pompi Gutnisky y Matty Costa Paz', url: 'https://www.infobae.com/grandes-libros/2021/01/17/ideas-para-repensar-tu-casa-por-pompi-gutnisky-y-matty-costa-paz/' },
  { id: 'elle', media: 'Elle Argentina', logo: 'elle.svg', h: 26, year: 2020, title: 'En José Ignacio: una casa ultramoderna de cara al mar', url: 'https://elle.clarin.com/deco/jose-ignacio-casa-ultramoderna-cara-mar_0_pR0ndnGiPr.html' },
  { id: 'ad', media: 'AD Italia', logo: 'ad.svg', h: 34, year: null, title: 'Palacio de los Patos', url: 'https://www.ad-italia.it/gallery/arte-collezionista-palacio-de-los-patos-matty-costa-paz/' },
  { id: 'lanacion', media: 'La Nación, Revista Living', logo: 'lanacion.svg', h: 16, year: null, title: 'Diseño emocional: un departamento en Madrid pensado para acompañar la experiencia de instalarse', url: null }, // [COMPLETAR] link completo
  { id: 'estilopropio', media: 'Revista Estilo Propio', logo: 'estilopropio.avif', h: 20, year: 2017, title: 'Militante del diseño', url: 'https://revistaestilopropio.com/nota/militante-del-diseno/' },
  { id: 'arqa-2015', media: 'ARQA', logo: 'arqa.png', h: 36, year: 2015, title: 'Espacio «Piano Bar Para Ti», Casa FOA 2015', url: 'https://arqa.com/arquitectura/interiorismo/espacio-piano-bar-para-ti-casa-foa-2015.html' },
  { id: 'arqa-2014', media: 'ARQA', logo: 'arqa.png', h: 36, year: 2014, title: 'Espacio «Hall», Casa FOA 2014', url: 'https://arqa.com/arquitectura/interiorismo/espacio-hall-casa-foa-2014.html' },
];

// Franja de logos de la home (un logo por medio).
export const PRESS_LOGOS = [
  { name: 'Infobae', file: 'infobae.svg', h: 22, url: PRESS[2].url },
  { name: 'Elle Decor', file: 'elle-decor.svg', h: 26, url: PRESS[0].url },
  { name: 'Casa Vogue', file: 'casavogue.png', h: 34, url: PRESS[1].url },
  { name: 'Elle', file: 'elle.svg', h: 26, url: PRESS[3].url },
  { name: 'AD', file: 'ad.svg', h: 34, url: PRESS[4].url },
  { name: 'La Nación', file: 'lanacion.svg', h: 16, url: null },
  { name: 'Estilo Propio', file: 'estilopropio.avif', h: 20, url: PRESS[6].url },
  { name: 'ARQA', file: 'arqa.png', h: 36, url: 'https://arqa.com/autores/matty-costa-paz' },
  { name: 'ARQ Clarín', file: 'arq.png', h: 30, url: null },
  { name: 'El Mercurio', file: 'elmercurio.svg', h: 15, url: null },
];

// Archivo gráfico del sitio anterior (sin fechas ni links).
export const PRESS_ARCHIVE = [
  { media: 'Elle Decoration', detail: { es: '«El jardín secreto»', en: '“El jardín secreto”' } },
  { media: 'Revista D&D', detail: { es: '5 publicaciones', en: '5 features' } },
  { media: 'Revista Casa FOA', detail: { es: '3 publicaciones', en: '3 features' } },
  { media: 'Para Ti Deco', detail: { es: '4 publicaciones', en: '4 features' } },
  { media: 'Para Ti Deco Plus', detail: { es: '1 publicación', en: '1 feature' } },
  { media: 'ARQ Clarín', detail: { es: '3 publicaciones', en: '3 features' } },
  { media: 'Viva Clarín', detail: { es: '1 publicación', en: '1 feature' } },
  { media: 'El Mercurio, Chile', detail: { es: '1 publicación', en: '1 feature' } },
];
