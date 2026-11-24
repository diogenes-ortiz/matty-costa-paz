// Datos del sitio. Regla: nada inventado. Lo que falta va como [COMPLETAR].
// Los textos están en primera persona: habla Matty.

export const SITE = {
  name: 'Matty Costa Paz',
  email: 'mcostapaz@hotmail.com', // confirmado por el cliente 24/11/2026
  instagram: 'https://www.instagram.com/mattycostapaz/',
  linkedin: 'https://www.linkedin.com/in/matty-costa-paz-94992024/',
  cities: ['Buenos Aires', 'José Ignacio', 'París', 'Madrid'],
};

export const ROUTES = {
  es: { home: '', projects: 'proyectos/', studio: 'bio/', press: 'prensa/', contact: 'contacto/' },
  en: { home: 'en/', projects: 'en/projects/', studio: 'en/bio/', press: 'en/press/', contact: 'en/contact/' },
};
export const NAV = ['projects', 'studio', 'press', 'contact'];

export const T = {
  es: {
    lang: 'es',
  seo: {
    home: ['Matty Costa Paz | Interiorista en Buenos Aires', 'Matty Costa Paz, interiorista en Buenos Aires especializada en arquitectura de interiores. Más de 30 años de casas a medida en Argentina, Uruguay y España.'],
    projects: ['Proyectos de diseño de interiores | Matty Costa Paz', 'Obras de interiorismo y arquitectura de interiores de Matty Costa Paz en Buenos Aires, Costa Esmeralda, José Ignacio y Madrid. Fotos y ficha de cada proyecto.'],
    studio: ['Bio | Matty Costa Paz, interiorista en Buenos Aires', 'Conocé a Matty Costa Paz: interiorista especializada en arquitectura de interiores, más de 30 años de trayectoria y miembro de Design Leadership Network.'],
    press: ['Prensa | Matty Costa Paz en AD, Casa Vogue y Elle Decor', 'Notas y publicaciones sobre los proyectos de interiorismo de Matty Costa Paz en AD Italia, Casa Vogue, Elle Decor, Elle, Infobae, La Nación y más.'],
    contact: ['Contacto | Matty Costa Paz, interiorista en Buenos Aires', 'Contactá a Matty Costa Paz para tu proyecto de diseño de interiores o arquitectura de interiores en Buenos Aires y en el exterior. Email, Instagram y LinkedIn.'],
  },
    locale: 'es_AR',
    title: 'Matty Costa Paz | Diseño de interiores',
    description:
      'Soy Matty Costa Paz, interiorista especializada en arquitectura de interiores. Más de treinta años creando espacios a medida, desde Buenos Aires para proyectos en todo el mundo.',
    nav: { projects: 'Proyectos', studio: 'Bio', press: 'Prensa', contact: 'Contacto' },
    menu: 'Menú',
    close: 'Cerrar',
    role: 'Diseño de interiores',
    statement: 'Creo espacios para la emoción que genera la belleza.',
    intro:
      'Interiorismo y arquitectura de interiores a medida de cada cliente. Hace más de treinta años diseño lugares para compartir momentos y vivir una vida bien vivida.',
    latest: 'Últimos proyectos',
    vertical: 'Recientes',
    verticalStudio: 'Bio',
    more: 'Más proyectos',
    verticalMore: 'Obras',
    allProjects: 'Ver todos los proyectos',
    view: 'Ver proyecto',
    featured: 'Proyecto destacado',
    studioLabel: 'Bio',
    studioText:
      'Mi lenguaje arquitectónico es sofisticado, atemporal y refinado, concebido a medida de cada cliente: comprendiendo sus sueños, aspiraciones y deseos.',
    memberships: [
      'Miembro de Design Leadership Network',
      'Socia honoraria de DINA, Diseñadores Nacionales Asociados',
      'Casi una década en la comisión directiva de DArA',
    ],
    studioLink: 'Leer la bio',
    pressTitle: 'En la prensa',
    pressLink: 'Ver notas',
    contactLabel: 'Contacto',
    contactTitle: 'Contame sobre tu próximo proyecto.',
    rights: 'Todos los derechos reservados.',
    switchTo: 'English',
    skip: 'Saltar al contenido',
    // Proyectos
    projectsTitle: 'Proyectos',
    projectsIntro: 'Obras realizadas en Buenos Aires, la costa atlántica, Uruguay y Madrid.',
    fLocation: 'Ubicación', fYear: 'Año de finalización', fScope: 'Alcance', fArea: 'Superficie', fPhoto: 'Fotografía', fPress: 'Publicado en',
    next: 'Proyecto siguiente',
    back: 'Todos los proyectos',
    // Estudio
    studioTitle: 'Bio',
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
  seo: {
    home: ['Matty Costa Paz | Interior Designer in Buenos Aires', 'Matty Costa Paz, interior designer based in Buenos Aires, specialising in interior architecture. 30+ years of tailored homes in Argentina, Uruguay and Spain.'],
    projects: ['Interior Design Projects | Matty Costa Paz', 'Interior design and interior architecture projects by Matty Costa Paz in Buenos Aires, Costa Esmeralda, José Ignacio and Madrid. Photos and project details.'],
    studio: ['Bio | Matty Costa Paz, Interior Designer in Buenos Aires', 'Meet Matty Costa Paz: interior designer specialising in interior architecture, with over 30 years of work and a member of the Design Leadership Network.'],
    press: ['Press | Matty Costa Paz in AD, Casa Vogue and Elle Decor', 'Articles and features on interior design projects by Matty Costa Paz in AD Italia, Casa Vogue, Elle Decor, Elle, Infobae, La Nación and more.'],
    contact: ['Contact | Matty Costa Paz, Interior Designer in Buenos Aires', 'Contact Matty Costa Paz about your interior design or interior architecture project in Buenos Aires and abroad. Email, Instagram and LinkedIn.'],
  },
    locale: 'en_US',
    title: 'Matty Costa Paz | Interior Design',
    description:
      "I'm Matty Costa Paz, an interior designer specialising in interior architecture. Over thirty years creating tailored spaces, based in Buenos Aires with projects around the world.",
    nav: { projects: 'Projects', studio: 'Bio', press: 'Press', contact: 'Contact' },
    menu: 'Menu',
    close: 'Close',
    role: 'Interior design',
    statement: 'I create spaces for the emotion that beauty brings.',
    intro:
      'Interior design and interior architecture tailored to each client. For over thirty years I have designed places to share moments and live a life well lived.',
    latest: 'Latest work',
    vertical: 'Recent',
    verticalStudio: 'Bio',
    more: 'More projects',
    verticalMore: 'Work',
    allProjects: 'View all projects',
    view: 'View project',
    featured: 'Featured project',
    studioLabel: 'Bio',
    studioText:
      'My architectural language is sophisticated, timeless and refined, conceived for each client: understanding their dreams, aspirations and desires.',
    memberships: [
      'Member of the Design Leadership Network',
      'Honorary member of DINA, Diseñadores Nacionales Asociados',
      'Nearly a decade on the DArA executive board',
    ],
    studioLink: 'Read the bio',
    pressTitle: 'In the press',
    pressLink: 'Read the press',
    contactLabel: 'Contact',
    contactTitle: 'Tell me about your next project.',
    rights: 'All rights reserved.',
    switchTo: 'Español',
    skip: 'Skip to content',
    projectsTitle: 'Projects',
    projectsIntro: 'Completed work in Buenos Aires, the Atlantic coast, Uruguay and Madrid.',
    fLocation: 'Location', fYear: 'Completed', fScope: 'Scope', fArea: 'Area', fPhoto: 'Photography', fPress: 'Published in',
    next: 'Next project',
    back: 'All projects',
    studioTitle: 'Bio',
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

// Alcance del trabajo, tal como figura en el portfolio de Matty.
const SCOPE = {
  di: { es: 'Diseño interior', en: 'Interior design' },
  int: { es: 'Interiorismo', en: 'Interior design' },
  aip: { es: 'Arquitectura, interiorismo y diseño del paisaje', en: 'Architecture, interior and landscape design' },
  dc: { es: 'Dirección creativa en arquitectura e interiorismo', en: 'Creative direction in architecture and interiors' },
};
const BA = { es: 'Ciudad de Buenos Aires', en: 'Buenos Aires City' };
const PBA = { es: 'Provincia de Buenos Aires', en: 'Buenos Aires Province' };
const at = (a, b) => ({ es: `${a}, ${b.es}`, en: `${a}, ${b.en}` });

// Obras del portfolio "Obras realizadas", en el orden en que Matty las presenta.
// Fotos: portfolio de Matty; Madrid y parte de José Ignacio, de las notas de prensa.
// Sin texto propio en el portfolio => sin excerpt/body (no se inventa).
export const PROJECTS = [
  {
    slug: 'costa-esmeralda-2024',
    seoPlace: { es: 'Costa Esmeralda', en: 'Costa Esmeralda' },
    name: { es: 'Costa Esmeralda I', en: 'Costa Esmeralda I' }, // [CONFIRMAR] nombre con Matty
    place: at('Costa Esmeralda', PBA), year: 2024, scope: SCOPE.di,
    cover: 'costa-esmeralda-living-doble-altura-dos-sofas.jpg', card: 'costa-esmeralda-living-doble-altura-dos-sofas.jpg',
    gallery: [
      ['costa-esmeralda-living-doble-altura-dos-sofas.jpg', 'Living de doble altura con dos sofás blancos, alfombra de yute y plantas', 'Double-height living room with two white sofas, a jute rug and plants'],
      ['costa-esmeralda-dormitorio-dos-camas-colchas-estampadas.jpg', 'Dormitorio con dos camas y colchas estampadas', 'Bedroom with twin beds and patterned bedspreads'],
      ['costa-esmeralda-pileta-pinos-reposeras-blancas.jpg', 'Pileta entre pinos con reposeras blancas', 'Pool among pine trees with white loungers'],
      ['costa-esmeralda-comedor-exterior-pergola-listones-madera.jpg', 'Comedor exterior bajo pérgola de listones de madera', 'Outdoor dining area under a timber slat pergola'],
    ],
  },
  {
    slug: 'piso-barrio-salamanca',
    seoPlace: { es: 'Madrid', en: 'Madrid' },
    name: { es: 'Barrio de Salamanca', en: 'Barrio de Salamanca' },
    place: { es: 'Madrid, España', en: 'Madrid, Spain' }, year: 2023, scope: SCOPE.di,
    area: { es: 'Casi 300 m²', en: 'Almost 300 m²' },
    credit: 'Belén Imaz',
    cover: 'piso-barrio-salamanca-living-blanco-sofa-cuero-marron.jpg', card: 'piso-barrio-salamanca-rincon-salon-butaca-blanca-mesa.jpg',
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
      ['piso-barrio-salamanca-living-blanco-sofa-cuero-marron.jpg', 'Living blanco con sofá de cuero marrón, butacas tapizadas y alfombra a rayas', 'White living room with a tan leather sofa, upholstered armchairs and a striped rug'],
      ['piso-barrio-salamanca-rincon-salon-butaca-blanca-mesa.jpg', 'Rincón del salón con butaca blanca, mesa de mármol y ventanal', 'Living room corner with a white armchair, marble table and tall window'],
      ['piso-barrio-salamanca-mesa-centro-marmol-carrara-objetos.jpg', 'Mesa de centro de mármol de Carrara con objetos y flores rojas', 'Carrara marble coffee table with objects and red flowers'],
      ['piso-barrio-salamanca-salon-comedor-integrados-balcones-molduras.jpg', 'Salón y comedor integrados con balcones y molduras', 'Open living and dining room with balconies and mouldings'],
      ['piso-barrio-salamanca-comedor-mesa-oscura-sillas-blancas.jpg', 'Comedor con mesa oscura, sillas blancas y lámparas colgantes', 'Dining room with a dark table, white chairs and pendant lamps'],
      ['piso-barrio-salamanca-sala-intima-cerramiento-aluminio-bronce.jpg', 'Sala íntima tras un cerramiento de aluminio bronce y vidrio', 'Intimate sitting room behind a bronze aluminium and glass partition'],
      ['piso-barrio-salamanca-cerramiento-vidrio-perfiles-aluminio-bronce.jpg', 'Cerramiento de vidrio y perfiles de aluminio bronce', 'Glass partition with bronze aluminium frames'],
      ['piso-barrio-salamanca-pasillo-entrada-blanco-vista-salon.jpg', 'Pasillo de entrada blanco con vista al salón', 'White entrance hall looking into the living room'],
      ['piso-barrio-salamanca-cocina-blanca-mesa-redonda-sillas.jpg', 'Cocina blanca con mesa redonda y sillas tapizadas', 'White kitchen with a round table and upholstered chairs'],
      ['piso-barrio-salamanca-escritorio-silla-diseno-lampara-obra.jpg', 'Escritorio con silla de diseño, lámpara y obra de arte', 'Desk with a design chair, lamp and artwork'],
      ['piso-barrio-salamanca-dormitorio-principal-ropa-cama-lino.jpg', 'Dormitorio principal con ropa de cama de lino natural', 'Main bedroom with natural linen bedding'],
      ['piso-barrio-salamanca-dormitorio-huespedes-dos-camas-obras.jpg', 'Dormitorio de huéspedes con dos camas y obras de arte', 'Guest bedroom with twin beds and artworks'],
      ['piso-barrio-salamanca-bano-marmol-blanco-butaca-color.jpg', 'Baño de mármol blanco con butaca color mostaza', 'White marble bathroom with a mustard armchair'],
    ],
  },
  {
    slug: 'adrogue-chico',
    seoPlace: { es: 'Adrogué', en: 'Adrogué' },
    name: { es: 'Adrogué Chico', en: 'Adrogué Chico' },
    place: at('Adrogué Chico', PBA), year: 2022, scope: SCOPE.aip,
    cover: 'adrogue-chico-living-muebles-medida-madera-clara.jpg', card: 'adrogue-chico-pileta-casa-lineas-rectas-reposeras.jpg',
    gallery: [
      ['adrogue-chico-living-muebles-medida-madera-clara.jpg', 'Living con muebles a medida en madera clara y sofás beige', 'Living room with light wood built-ins and beige sofas'],
      ['adrogue-chico-pileta-casa-lineas-rectas-reposeras.jpg', 'Pileta y casa de líneas rectas con reposeras', 'Pool and a clean-lined house with loungers'],
      ['adrogue-chico-patio-muro-piedra-banco-arboles.jpg', 'Patio con muro de piedra, banco y árboles', 'Courtyard with a stone wall, bench and trees'],
      ['adrogue-chico-bano-banera-exenta-ducha-vidriada.jpg', 'Baño con bañera exenta y ducha vidriada', 'Bathroom with a freestanding tub and glass shower'],
      ['adrogue-chico-escritorio-estantes-madera-flores.jpg', 'Escritorio con estantes de madera y flores', 'Study with wooden shelves and flowers'],
    ],
  },
  {
    slug: 'costa-esmeralda-2025',
    seoPlace: { es: 'Costa Esmeralda', en: 'Costa Esmeralda' },
    name: { es: 'Costa Esmeralda II', en: 'Costa Esmeralda II' }, // [CONFIRMAR] nombre con Matty
    place: at('Costa Esmeralda', PBA), year: 2025, scope: SCOPE.di,
    cover: 'costa-esmeralda-comedor-doble-altura-lamparas-negras.jpg', card: 'costa-esmeralda-pileta-rodeada-arboles.jpg',
    gallery: [
      ['costa-esmeralda-comedor-doble-altura-lamparas-negras.jpg', 'Comedor de doble altura con lámparas negras tejidas y ventanales al bosque', 'Double-height dining room with black woven pendants and windows onto the woods'],
      ['costa-esmeralda-living-escalera-muro-piedra.jpg', 'Living con escalera y muro de piedra', 'Living room with a staircase and stone wall'],
      ['costa-esmeralda-sala-juegos-mesa-pool-pared.jpg', 'Sala de juegos con mesa de pool y pared de cuadros', 'Games room with a pool table and a gallery wall'],
      ['costa-esmeralda-dormitorio-respaldo-azul-lampara-blanca.jpg', 'Dormitorio con respaldo azul y lámpara blanca', 'Bedroom with a navy headboard and white lamp'],
      ['costa-esmeralda-pileta-rodeada-arboles.jpg', 'Pileta rodeada de árboles', 'Pool surrounded by trees'],
      ['costa-esmeralda-comedor-exterior-pergola-negra.jpg', 'Comedor exterior bajo pérgola negra', 'Outdoor dining under a black pergola'],
      ['costa-esmeralda-sillon-azul-ventanal-vista-bosque.jpg', 'Sillón azul junto al ventanal con vista al bosque', 'Navy armchair by a window onto the woods'],
      ['costa-esmeralda-mesa-comedor-vista-exterior.jpg', 'Mesa del comedor con vista al exterior', 'Dining table looking outdoors'],
      ['costa-esmeralda-detalle-velero-madera-mesada.jpg', 'Detalle de un velero de madera sobre la mesada', 'Detail of a wooden model sailboat on a counter'],
    ],
  },
  {
    slug: 'botanico',
    seoPlace: { es: 'Buenos Aires', en: 'Buenos Aires' },
    name: { es: 'Botánico', en: 'Botánico' },
    place: at('Botánico', BA), year: 2021, scope: SCOPE.int,
    cover: 'botanico-living-blanco-circulo-rojo-palmeras.jpg', card: 'botanico-living-blanco-circulo-rojo-palmeras.jpg',
    gallery: [
      ['botanico-living-blanco-circulo-rojo-palmeras.jpg', 'Living blanco con círculo rojo, palmeras y alfombras a rayas', 'White living room with a red circle, palms and striped rugs'],
      ['botanico-balcon-toldo-rayas-sillas-rojas.jpg', 'Balcón con toldo a rayas y sillas rojas', 'Balcony with a striped awning and red chairs'],
      ['botanico-pasillo-verde-azulado-lampara-tejida.jpg', 'Pasillo verde azulado con lámpara tejida y alfombra a rayas', 'Teal hallway with a woven lamp and striped runner'],
      ['botanico-dormitorio-almohadones-blancos-negros-obra.jpg', 'Dormitorio con almohadones blancos y negros y obra circular', 'Bedroom with black and white cushions and a circular artwork'],
    ],
  },
  {
    slug: 'beach-house-jose-ignacio',
    seoPlace: { es: 'José Ignacio', en: 'José Ignacio' },
    name: { es: 'Club de Mar, José Ignacio', en: 'Club de Mar, José Ignacio' },
    place: { es: 'José Ignacio, Uruguay', en: 'José Ignacio, Uruguay' }, year: 2020, scope: SCOPE.aip,
    cover: 'beach-house-jose-ignacio-casa-blanca-mar-alero-quincha.jpg', card: 'beach-house-jose-ignacio-escalera-blanca-terraza-cielo.jpg',
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
      ['beach-house-jose-ignacio-casa-blanca-mar-alero-quincha.jpg', 'Casa blanca frente al mar con alero de quincha y palmeras', 'White beach house with a thatched eave and palm trees'],
      ['beach-house-jose-ignacio-escalera-blanca-terraza-cielo.jpg', 'Escalera blanca hacia la terraza bajo el cielo', 'White staircase leading up to the terrace'],
      ['beach-house-jose-ignacio-living-blanco-doble-altura-cabriadas.jpg', 'Living blanco de doble altura con cabriadas a la vista', 'Double-height white living room with exposed trusses'],
      ['beach-house-jose-ignacio-comedor-lamparas-mimbre-sillas-tejidas.jpg', 'Comedor con lámparas de mimbre y sillas tejidas', 'Dining room with wicker pendants and woven chairs'],
      ['beach-house-jose-ignacio-celosias-madera-sillas-mimbre-entrada.jpg', 'Celosías de madera y sillas de mimbre en la entrada', 'Timber lattices and wicker chairs at the entrance'],
      ['beach-house-jose-ignacio-cocina-blanca-mesa-redonda.jpg', 'Cocina blanca con mesa redonda', 'White kitchen with a round table'],
      ['beach-house-jose-ignacio-dormitorio-respaldo-fibra-natural.jpg', 'Dormitorio con respaldo de fibra natural', 'Bedroom with a natural fibre headboard'],
      ['beach-house-jose-ignacio-bano-blanco-banera-exenta.jpg', 'Baño blanco con bañera exenta', 'White bathroom with a freestanding tub'],
      ['beach-house-jose-ignacio-toilette-rayas-azules-blancas-espejo.jpg', 'Toilette con rayas azules y blancas y espejo de escotilla', 'Powder room with blue and white stripes and a porthole mirror'],
      ['beach-house-jose-ignacio-pileta-vista-desde-galeria-quincha.jpg', 'Pileta vista desde la galería con quincha', 'Pool seen from the thatched gallery'],
      ['beach-house-jose-ignacio-vista-mar-desde-terraza.jpg', 'Vista al mar desde la terraza', 'Sea view from the terrace'],
      ['beach-house-jose-ignacio-deck-madera-playa.jpg', 'Deck de madera hacia la playa', 'Timber deck leading towards the beach'],
    ],
  },
  {
    slug: 'retiro',
    seoPlace: { es: 'Buenos Aires', en: 'Buenos Aires' },
    name: { es: 'Retiro', en: 'Retiro' },
    place: at('Retiro', BA), year: 2024, scope: SCOPE.int,
    cover: 'retiro-living-blanco-bow-window-hogar.jpg', card: 'retiro-living-blanco-bow-window-hogar.jpg',
    gallery: [
      ['retiro-living-blanco-bow-window-hogar.jpg', 'Living blanco con bow window, hogar y mesas de vidrio', 'White living room with a bay window, fireplace and glass tables'],
      ['retiro-biblioteca-negra-hogar-banco-cuero.jpg', 'Biblioteca negra con hogar y banco de cuero', 'Black library with a fireplace and leather bench'],
      ['retiro-comedor-sillas-negras-obra-tonos.jpg', 'Comedor con sillas negras y obra en tonos turquesa', 'Dining corner with black chairs and a turquoise artwork'],
      ['retiro-cocina-alacenas-negras-azulejos-blancos.jpg', 'Cocina con alacenas negras y azulejos blancos', 'Kitchen with black cabinets and white tiles'],
      ['retiro-bano-azulejos-verdes-piso-calcareo.jpg', 'Baño con azulejos verdes y piso calcáreo', 'Bathroom with green tiles and patterned floor'],
      ['retiro-bano-tonos-arena-espejo-redondo.jpg', 'Baño en tonos arena con espejo redondo', 'Sand-toned bathroom with a round mirror'],
    ],
  },
  {
    slug: 'caballito',
    seoPlace: { es: 'Buenos Aires', en: 'Buenos Aires' },
    name: { es: 'Caballito', en: 'Caballito' },
    place: at('Caballito', BA), year: 2022, scope: SCOPE.int,
    cover: 'caballito-living-sofa-gris-mesas-cemento.jpg', card: 'caballito-living-sofa-gris-mesas-cemento.jpg',
    gallery: [
      ['caballito-living-sofa-gris-mesas-cemento.jpg', 'Living con sofá gris, mesas de cemento y puff amarillo', 'Living room with a grey sofa, concrete tables and a yellow pouf'],
      ['caballito-comedor-mesa-piedra-lampara-dorada.jpg', 'Comedor con mesa de piedra y lámpara dorada', 'Dining room with a stone table and brass chandelier'],
      ['caballito-desayunador-mesa-redonda-sillas-bistro.jpg', 'Desayunador con mesa redonda y sillas bistró', 'Breakfast nook with a round table and bistro chairs'],
      ['caballito-banco-tapizado-mural-nubes.jpg', 'Banco tapizado frente a un mural de nubes', 'Upholstered bench in front of a cloud mural'],
    ],
  },
  {
    slug: 'lomas-de-san-isidro',
    seoPlace: { es: 'San Isidro', en: 'San Isidro' },
    name: { es: 'Lomas de San Isidro', en: 'Lomas de San Isidro' },
    place: at('Lomas de San Isidro', PBA), year: 2020, scope: SCOPE.int,
    cover: 'lomas-de-san-isidro-living-comedor-tonos-tierra-ventanal.jpg', card: 'lomas-de-san-isidro-galeria-arco-jardin-vertical-sillas.jpg',
    gallery: [
      ['lomas-de-san-isidro-living-comedor-tonos-tierra-ventanal.jpg', 'Living y comedor en tonos tierra con ventanal al jardín', 'Earth-toned living and dining room with a window onto the garden'],
      ['lomas-de-san-isidro-galeria-arco-jardin-vertical-sillas.jpg', 'Galería con arco, jardín vertical y sillas de mimbre', 'Arched gallery with a vertical garden and wicker chairs'],
      ['lomas-de-san-isidro-sala-musica-alfombra-roja-piano.jpg', 'Sala de música con alfombra roja y piano', 'Music room with a red rug and piano'],
      ['lomas-de-san-isidro-sillones-cuero-hogar.jpg', 'Sillones de cuero junto al hogar', 'Leather armchairs by the fireplace'],
    ],
  },
  {
    slug: 'palacio-de-los-patos',
    seoPlace: { es: 'Buenos Aires', en: 'Buenos Aires' },
    name: { es: 'Palacio de los Patos', en: 'Palacio de los Patos' },
    place: at('Palermo', BA), year: 2016, scope: SCOPE.dc,
    press: ['ad'],
    cover: 'palacio-de-los-patos-living-blanco-ventanas-arco-grandes.jpg', card: 'palacio-de-los-patos-puerta-arco-piso-marmol-damero.jpg',
    gallery: [
      ['palacio-de-los-patos-living-blanco-ventanas-arco-grandes.jpg', 'Living blanco con ventanas en arco y grandes obras de arte', 'White living room with arched windows and large artworks'],
      ['palacio-de-los-patos-puerta-arco-piso-marmol-damero.jpg', 'Puerta en arco con piso de mármol en damero', 'Arched doorway with a chequered marble floor'],
      ['palacio-de-los-patos-hogar-clasico-obra-arte-silla.jpg', 'Hogar clásico con obra de arte y silla blanca', 'Classic fireplace with an artwork and white chair'],
      ['palacio-de-los-patos-cocina-marmol-alacenas-negras.jpg', 'Cocina con mármol y alacenas negras', 'Kitchen with marble and black cabinets'],
      ['palacio-de-los-patos-bano-negro-luces-verticales.jpg', 'Baño negro con luces verticales', 'Black bathroom with vertical lights'],
    ],
  },
  {
    slug: 'le-parc',
    seoPlace: { es: 'Buenos Aires', en: 'Buenos Aires' },
    name: { es: 'Le Parc', en: 'Le Parc' },
    place: at('Edificio Le Parc, Barrio Parque', BA), year: 2015, scope: SCOPE.int,
    cover: 'le-parc-living-vista-ciudad-biblioteca-oscura.jpg', card: 'le-parc-sillones-mesa-baja-ventanal.jpg',
    gallery: [
      ['le-parc-living-vista-ciudad-biblioteca-oscura.jpg', 'Living con vista a la ciudad y biblioteca oscura', 'Living room with city views and a dark bookcase'],
      ['le-parc-sillones-mesa-baja-ventanal.jpg', 'Sillones y mesa baja frente al ventanal', 'Armchairs and a low table by the window'],
      ['le-parc-dormitorio-ropa-cama-blanca-estampada.jpg', 'Dormitorio con ropa de cama blanca y estampada', 'Bedroom with white and patterned bedding'],
      ['le-parc-vestidor-blanco-alfombra-redonda.jpg', 'Vestidor blanco con alfombra redonda', 'White dressing room with a round rug'],
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
