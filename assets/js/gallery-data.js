/**
 * PROJECT ARCHIVE
 * ---------------------------------------------------------------------------
 * Single source of truth for every project shown on the site.
 *
 * This file can be regenerated from a `portfolio/` folder of real assets:
 *
 *     npm run sync:portfolio
 *
 * See `scripts/sync-portfolio.mjs` and `portfolio/README.md` for the folder
 * convention. Any project whose `cover` is null renders an elegant monogram
 * placeholder, so the site looks finished before the artwork lands.
 *
 * Schema
 *   slug        stable url id            → /project/?p=<slug>
 *   title       { en, es }
 *   client      { en, es }
 *   role        { en, es }
 *   summary     { en, es }  one-line, used on cards and meta description
 *   body        { en: [paragraphs], es: [paragraphs] }
 *   year        string
 *   discipline  one of: branding | editorial | digital | packaging | spatial
 *   tools       string[]
 *   featured    boolean — surfaces on the home page
 *   cover       image path or null
 *   images      image paths for the project gallery
 *   monogram    2 letters drawn in the placeholder artwork
 */

const projects = [
  {
    slug: 'maison-lumiere',
    title: { en: 'Maison Lumière', es: 'Maison Lumière' },
    client: { en: 'Maison Lumière, Paris', es: 'Maison Lumière, París' },
    role: { en: 'Identity & Art Direction', es: 'Identidad y Dirección de Arte' },
    summary: {
      en: 'A complete identity for a heritage lighting house, rebuilt around light itself.',
      es: 'Identidad completa para una casa de iluminación centenaria, reconstruida en torno a la luz.'
    },
    body: {
      en: [
        'Maison Lumière had spent sixty years making light and almost no time deciding what it should look like. The rebuild started from the only material the house has ever worked in: a single beam, cast at an angle, resolving into a monogram.',
        'The typographic system pairs a high-contrast display serif with a quiet geometric sans, set on a grid generous enough to let each fixture breathe. Warm brass foil on uncoated stock carries the identity into the physical world — invitations, care cards, the certificate that accompanies every piece.',
        'The system launched across the flagship showroom, the trade catalogue and a rebuilt commerce experience, and now governs everything from packaging tape to the plaque beside the door.'
      ],
      es: [
        'Maison Lumière llevaba sesenta años fabricando luz y casi ningún tiempo decidiendo cómo debía verse. La reconstrucción partió del único material con el que la casa ha trabajado siempre: un haz único, proyectado en ángulo, que se resuelve en un monograma.',
        'El sistema tipográfico combina una serif de display de alto contraste con una sans geométrica y discreta, sobre una retícula lo bastante generosa para que cada pieza respire. El latón cálido estampado sobre papel sin estucar lleva la identidad al mundo físico: invitaciones, tarjetas de cuidado y el certificado que acompaña cada obra.',
        'El sistema se lanzó en el showroom insignia, el catálogo profesional y una experiencia de comercio reconstruida, y hoy rige desde la cinta del embalaje hasta la placa junto a la puerta.'
      ]
    },
    year: '2025',
    discipline: 'branding',
    tools: ['Illustrator', 'InDesign', 'Figma'],
    featured: true,
    cover: null,
    images: [],
    monogram: 'ML'
  },
  {
    slug: 'the-quiet-hours',
    title: { en: 'The Quiet Hours', es: 'Las Horas Silenciosas' },
    client: { en: 'Independent publisher', es: 'Editorial independiente' },
    role: { en: 'Editorial Design', es: 'Diseño Editorial' },
    summary: {
      en: 'A 240-page photographic monograph on stillness, set in a single typeface.',
      es: 'Una monografía fotográfica de 240 páginas sobre la quietud, compuesta en una sola tipografía.'
    },
    body: {
      en: [
        'A monograph of night photography needed a book that could hold silence. The answer was restriction: one typeface, three sizes, a single column that shifts position across the spread as the sequence moves from dusk toward morning.',
        'Images run to the trim on the darkest plates and retreat into deep margins as the light returns, so the reader feels the passage of hours in the paper itself rather than in any caption.',
        'Printed in duotone on a heavy uncoated stock with an exposed Swiss binding, the volume opens flat — every spread readable without a hand holding it down.'
      ],
      es: [
        'Una monografía de fotografía nocturna necesitaba un libro capaz de sostener el silencio. La respuesta fue la restricción: una tipografía, tres cuerpos y una sola columna que cambia de posición a lo largo del pliego a medida que la secuencia avanza del anochecer hacia la mañana.',
        'Las imágenes llegan al corte en las láminas más oscuras y se repliegan hacia márgenes amplios cuando vuelve la luz, de modo que el lector percibe el paso de las horas en el propio papel y no en un pie de foto.',
        'Impreso a dos tintas sobre papel grueso sin estucar y con costura suiza vista, el volumen abre completamente plano: cada doble página se lee sin necesidad de sujetarla.'
      ]
    },
    year: '2024',
    discipline: 'editorial',
    tools: ['InDesign', 'Photoshop', 'Capture One'],
    featured: true,
    cover: null,
    images: [],
    monogram: 'QH'
  },
  {
    slug: 'aurelia-skin',
    title: { en: 'Aurelia Skin', es: 'Aurelia Skin' },
    client: { en: 'Aurelia, Barcelona', es: 'Aurelia, Barcelona' },
    role: { en: 'Packaging & Brand', es: 'Packaging y Marca' },
    summary: {
      en: 'Refillable glass, blind-embossed cartons and a palette drawn from raw ingredients.',
      es: 'Vidrio rellenable, estuches gofrados en seco y una paleta extraída de los ingredientes en crudo.'
    },
    body: {
      en: [
        'Aurelia asked for packaging that would survive being unboxed once and kept forever. Every vessel is refillable glass with a weighted base; every carton is blind-embossed rather than printed, so the brand is felt before it is read.',
        'The palette is taken directly from the raw botanicals — bergamot, clay, tallow — sampled under daylight and held to four colours across the entire range so the shelf reads as one object.',
        'A structural system of three bottle heights and two cap profiles covers the full catalogue, cutting tooling cost while making the line instantly recognisable from across a room.'
      ],
      es: [
        'Aurelia pidió un packaging capaz de sobrevivir a un único desembalaje y quedarse para siempre. Cada envase es de vidrio rellenable con base contrapesada; cada estuche va gofrado en seco en lugar de impreso, de modo que la marca se siente antes de leerse.',
        'La paleta procede directamente de los botánicos en crudo —bergamota, arcilla, sebo—, muestreados a luz natural y reducidos a cuatro colores en toda la gama para que el lineal se lea como un solo objeto.',
        'Un sistema estructural de tres alturas de frasco y dos perfiles de tapa cubre el catálogo completo: reduce el coste de moldes y hace la línea reconocible al instante desde el otro extremo de una sala.'
      ]
    },
    year: '2025',
    discipline: 'packaging',
    tools: ['Illustrator', 'Dimension', 'Blender'],
    featured: true,
    cover: null,
    images: [],
    monogram: 'AS'
  },
  {
    slug: 'atelier-noir',
    title: { en: 'Atelier Noir', es: 'Atelier Noir' },
    client: { en: 'Atelier Noir, Milan', es: 'Atelier Noir, Milán' },
    role: { en: 'Digital Experience', es: 'Experiencia Digital' },
    summary: {
      en: 'A commerce experience for a couture atelier, built to feel like a private viewing.',
      es: 'Una experiencia de comercio para un atelier de alta costura, con el aire de un pase privado.'
    },
    body: {
      en: [
        'Couture does not sell in a grid. The site was built as a sequence of full-bleed rooms the visitor moves through, each garment introduced alone, with its fabric, its maker and the hours it took.',
        'Motion carries the weight of the concept: nothing fades, everything wipes and settles, at the pace of a curtain being drawn. Interaction is deliberately unhurried and entirely keyboard-navigable.',
        'The result reduced enquiry drop-off by more than a third while raising the average value of a booked appointment.'
      ],
      es: [
        'La alta costura no se vende en una retícula. El sitio se construyó como una secuencia de salas a sangre completa por las que el visitante avanza, presentando cada prenda en solitario, con su tejido, su artesano y las horas invertidas.',
        'El movimiento sostiene el concepto: nada se desvanece, todo se desliza y se asienta al ritmo de una cortina que se descorre. La interacción es deliberadamente pausada y por completo navegable con teclado.',
        'El resultado redujo en más de un tercio el abandono en las consultas y elevó el valor medio de cada cita agendada.'
      ]
    },
    year: '2026',
    discipline: 'digital',
    tools: ['Figma', 'After Effects', 'WebGL'],
    featured: true,
    cover: null,
    images: [],
    monogram: 'AN'
  },
  {
    slug: 'casa-del-mar',
    title: { en: 'Casa del Mar', es: 'Casa del Mar' },
    client: { en: 'Casa del Mar, Cádiz', es: 'Casa del Mar, Cádiz' },
    role: { en: 'Identity & Wayfinding', es: 'Identidad y Señalética' },
    summary: {
      en: 'Identity, signage and printed matter for a nine-room coastal house.',
      es: 'Identidad, señalética e impresos para una casa costera de nueve habitaciones.'
    },
    body: {
      en: [
        'A nine-room house on the Atlantic coast, restored from a merchant villa. The identity had to sit inside lime-washed walls without competing with them, so the entire system is cut, cast or engraved — never applied as ink.',
        'Room numbers are sand-cast brass; the menu is letterpressed weekly on a single sheet; the wordmark exists only in one weight, at three sizes, forever.',
        'Wayfinding follows the building rather than a manual: signage appears exactly where a guest first hesitates, and nowhere else.'
      ],
      es: [
        'Una casa de nueve habitaciones en la costa atlántica, restaurada a partir de una villa de comerciantes. La identidad debía convivir con los muros encalados sin competir con ellos, así que todo el sistema está cortado, fundido o grabado: nunca aplicado como tinta.',
        'Los números de habitación son de latón fundido en arena; la carta se imprime en tipografía cada semana sobre una única hoja; el logotipo existe en un solo peso, en tres tamaños, para siempre.',
        'La señalética sigue al edificio y no a un manual: aparece exactamente donde el huésped duda por primera vez, y en ningún otro sitio.'
      ]
    },
    year: '2023',
    discipline: 'spatial',
    tools: ['Illustrator', 'AutoCAD', 'Cinema 4D'],
    featured: false,
    cover: null,
    images: [],
    monogram: 'CM'
  },
  {
    slug: 'obra-journal',
    title: { en: 'Obra Journal', es: 'Revista Obra' },
    client: { en: 'Obra, Mexico City', es: 'Obra, Ciudad de México' },
    role: { en: 'Art Direction', es: 'Dirección de Arte' },
    summary: {
      en: 'A bilingual arts quarterly with a grid that changes with every issue.',
      es: 'Una revista trimestral de arte bilingüe con una retícula que cambia en cada número.'
    },
    body: {
      en: [
        'Obra publishes in Spanish and English on facing pages, which meant designing for two languages of different lengths without letting either look like a translation.',
        'The solution is an asymmetric grid that gives Spanish the wider measure it needs and turns the difference into the magazine\'s signature — a visible seam down the centre of every spread.',
        'Each issue reassigns one variable: the accent colour, the display face, or the position of the folio. The architecture stays; the surface never repeats.'
      ],
      es: [
        'Obra se publica en español e inglés en páginas enfrentadas, lo que obligaba a diseñar para dos idiomas de extensión distinta sin que ninguno pareciera una traducción.',
        'La solución es una retícula asimétrica que concede al español la medida más ancha que necesita y convierte esa diferencia en la firma de la revista: una costura visible en el centro de cada doble página.',
        'Cada número reasigna una variable: el color de acento, la tipografía de display o la posición del folio. La arquitectura permanece; la superficie nunca se repite.'
      ]
    },
    year: '2024',
    discipline: 'editorial',
    tools: ['InDesign', 'Figma'],
    featured: false,
    cover: null,
    images: [],
    monogram: 'OJ'
  },
  {
    slug: 'verdant-house',
    title: { en: 'Verdant House', es: 'Verdant House' },
    client: { en: 'Verdant, London', es: 'Verdant, Londres' },
    role: { en: 'Brand & Digital', es: 'Marca y Digital' },
    summary: {
      en: 'A botanical apothecary rebuilt as one continuous system, from label to checkout.',
      es: 'Una botica botánica reconstruida como un sistema continuo, de la etiqueta al pago.'
    },
    body: {
      en: [
        'Verdant sold beautifully in its own shop and poorly everywhere else — the brand simply did not survive the jump to a screen. The rebuild treats label and interface as one artefact.',
        'A single drawn botanical set, one typeface at two optical sizes, and a colour system keyed to plant families carry the brand across bottle, shelf edge, invoice and product page without a single asset being redrawn.',
        'The checkout was rebuilt in the same pass, cutting the path from product to confirmation to three screens.'
      ],
      es: [
        'Verdant vendía maravillosamente en su propia tienda y mal en todas partes: la marca sencillamente no sobrevivía al salto a una pantalla. La reconstrucción trata la etiqueta y la interfaz como un mismo objeto.',
        'Un único conjunto de ilustraciones botánicas, una tipografía en dos tamaños ópticos y un sistema de color asociado a familias de plantas llevan la marca del frasco al lineal, de la factura a la ficha de producto, sin redibujar un solo recurso.',
        'El proceso de compra se rehízo en la misma fase y redujo a tres pantallas el camino del producto a la confirmación.'
      ]
    },
    year: '2025',
    discipline: 'digital',
    tools: ['Figma', 'Illustrator', 'Framer'],
    featured: false,
    cover: null,
    images: [],
    monogram: 'VH'
  },
  {
    slug: 'sala-nocturna',
    title: { en: 'Sala Nocturna', es: 'Sala Nocturna' },
    client: { en: 'Galería Sur, Buenos Aires', es: 'Galería Sur, Buenos Aires' },
    role: { en: 'Exhibition Design', es: 'Diseño de Exposición' },
    summary: {
      en: 'An exhibition lit to one lux, where the catalogue is the only light source.',
      es: 'Una exposición iluminada a un lux, donde el catálogo es la única fuente de luz.'
    },
    body: {
      en: [
        'Twenty-two sculptures shown in near darkness. Visitors are handed a catalogue printed on a reflective stock and a single low lamp — the room is lit only by what each person carries.',
        'Wall text was abolished. Everything a visitor needs sits in the catalogue, set large enough to read at arm\'s length in poor light, with a folded plan that doubles as the map.',
        'The show ran for eleven weeks and travelled to two further cities with the design intact.'
      ],
      es: [
        'Veintidós esculturas expuestas casi a oscuras. A cada visitante se le entrega un catálogo impreso sobre papel reflectante y una pequeña lámpara: la sala se ilumina únicamente con lo que cada persona lleva consigo.',
        'Se eliminaron los textos de sala. Todo lo que el visitante necesita está en el catálogo, compuesto en un cuerpo lo bastante grande para leerse con el brazo extendido y poca luz, con un plano plegado que hace las veces de mapa.',
        'La muestra se mantuvo once semanas y viajó a dos ciudades más con el diseño intacto.'
      ]
    },
    year: '2022',
    discipline: 'spatial',
    tools: ['Cinema 4D', 'InDesign', 'AutoCAD'],
    featured: false,
    cover: null,
    images: [],
    monogram: 'SN'
  }
];

if (typeof window !== 'undefined') window.projects = projects;
export default projects;
