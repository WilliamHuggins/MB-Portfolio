/**
 * PROJECT ARCHIVE
 * ---------------------------------------------------------------------------
 * Generated from the `portfolio/` folder by:
 *
 *     npm run sync:portfolio
 *
 * Edit the copy here or in each project's `portfolio/<project>/project.json` —
 * the sync merges rather than overwrites, so hand-written text survives.
 * See `portfolio/README.md` for the folder convention.
 *
 * Schema
 *   slug        stable url id            -> /project/?p=<slug>
 *   title       { en, es }
 *   client      { en, es }
 *   role        { en, es }
 *   summary     { en, es }  one line, used on cards and meta description
 *   body        { en: [paragraphs], es: [paragraphs] }
 *   year        string
 *   discipline  one of: residential | commercial | interiors | urban
 *   tools       string[]
 *   featured    boolean - surfaces on the home page
 *   cover       image path or null
 *   images      image paths for the project gallery
 *   monogram    2 letters drawn in the placeholder artwork
 */

const projects = [
  {
    slug: 'childrens-waiting-room',
    title: {
      en: 'Children\'s Waiting Room',
      es: 'Sala de Espera Infantil'
    },
    client: {
      en: 'Academic studio project',
      es: 'Proyecto académico de taller'
    },
    role: {
      en: 'Interior Architecture',
      es: 'Arquitectura de Interiores'
    },
    summary: {
      en: 'A marine-themed waiting room where the whole room is shaped like a breaking wave.',
      es: 'Una sala de espera de tema marino donde el propio espacio toma la forma de una ola rompiendo.'
    },
    body: {
      en: [
        'A waiting room for children takes the ocean as its organising idea, and then commits to it completely. The enclosing shell is a single curved form modelled on a breaking wave, with openings cut as wave crests rather than rectangles, so the room reads as one gesture from the pavement to the reception desk.',
        'Inside, a band of blue and sand runs across floor and wall as a continuous current, drawing a child from the entrance past the sensory table and the marine life tank toward the seating. A curved reception desk, developed through its own sequence of sketches and study models, sits at the head of that current.',
        'The project was worked out in parallel across media: space programming and floor plans, an isometric, section and serial views, watercolour perspectives to test light and colour, and a series of white paper models photographed from entrance, reception, side and above.'
      ],
      es: [
        'Una sala de espera infantil toma el océano como idea organizadora y se compromete con ella por completo. La envolvente es una única forma curva modelada a partir de una ola rompiendo, con aberturas recortadas como crestas en lugar de rectángulos, de modo que la sala se lee como un solo gesto desde la acera hasta el mostrador de recepción.',
        'En el interior, una franja azul y arena recorre suelo y muro como una corriente continua, guiando al niño desde la entrada, pasando por la mesa sensorial y el acuario, hasta la zona de espera. Un mostrador curvo, desarrollado con su propia secuencia de bocetos y maquetas de estudio, se sitúa al inicio de esa corriente.',
        'El proyecto se resolvió en paralelo en distintos medios: programación del espacio y plantas, una isometría, sección y vistas seriadas, perspectivas a la acuarela para ensayar luz y color, y una serie de maquetas de papel blanco fotografiadas desde la entrada, la recepción, el lateral y el aire.'
      ]
    },
    year: '2023',
    discipline: 'interiors',
    tools: ['Physical model', 'Watercolour', 'Hand drafting'],
    featured: true,
    cover: '/portfolio/Children_s%20Waiting%20Room/Model%20Reception%20View.jpg',
    images: [
      '/portfolio/Children_s%20Waiting%20Room/20231115_135614.jpg',
      '/portfolio/Children_s%20Waiting%20Room/Exterior%20Elevation.jpg',
      '/portfolio/Children_s%20Waiting%20Room/Floor%20Plan%20Layout.jpg',
      '/portfolio/Children_s%20Waiting%20Room/Isometric%20Sketch.jpg',
      '/portfolio/Children_s%20Waiting%20Room/Marie%20Brown_Assignment%2310-11-15-2023%2025.jpg',
      '/portfolio/Children_s%20Waiting%20Room/Marine%20Life%20Tank.jpg',
      '/portfolio/Children_s%20Waiting%20Room/Model%20Aerial%20View.jpg',
      '/portfolio/Children_s%20Waiting%20Room/Model%20Draft.jpg',
      '/portfolio/Children_s%20Waiting%20Room/Model%20Entrance%20View.jpg',
      '/portfolio/Children_s%20Waiting%20Room/Model%20Entrance.jpg',
      '/portfolio/Children_s%20Waiting%20Room/Model%20Exterior%20View.jpg',
      '/portfolio/Children_s%20Waiting%20Room/Model%20Side%20View.jpg',
      '/portfolio/Children_s%20Waiting%20Room/Pattern%202.jpg',
      '/portfolio/Children_s%20Waiting%20Room/Preferred%20Pattern%232.jpg',
      '/portfolio/Children_s%20Waiting%20Room/Section.jpg',
      '/portfolio/Children_s%20Waiting%20Room/Sensory%20Table.jpg',
      '/portfolio/Children_s%20Waiting%20Room/Sensory%20Tank.png',
      '/portfolio/Children_s%20Waiting%20Room/Serial%20Views%201.jpg',
      '/portfolio/Children_s%20Waiting%20Room/Serial%20Views%202.jpg',
      '/portfolio/Children_s%20Waiting%20Room/Shape.jpg',
      '/portfolio/Children_s%20Waiting%20Room/Space%20Programming%2009-26-23.jpg',
      '/portfolio/Children_s%20Waiting%20Room/Watercolor%20Perspective%202.jpg',
      '/portfolio/Children_s%20Waiting%20Room/Watercolor_Perspective%201.jpg',
      '/portfolio/Children_s%20Waiting%20Room/Reception%20Desk/Floor%20Plan%20Layout.jpg',
      '/portfolio/Children_s%20Waiting%20Room/Reception%20Desk/Model%20process1.jpg',
      '/portfolio/Children_s%20Waiting%20Room/Reception%20Desk/Reception%20Desk%20Model%20Process2.jpg',
      '/portfolio/Children_s%20Waiting%20Room/Reception%20Desk/Reception%20Desk%20Model.jpg',
      '/portfolio/Children_s%20Waiting%20Room/Reception%20Desk/Reception%20Model.jpg',
      '/portfolio/Children_s%20Waiting%20Room/Reception%20Desk/Sketch1.jpg',
      '/portfolio/Children_s%20Waiting%20Room/Reception%20Desk/Sketch2.jpg'
    ],
    monogram: 'CW'
  },
  {
    slug: 'mid-century-modern-remodel',
    title: {
      en: 'Mid-Century Modern House Remodel',
      es: 'Reforma de Casa Mid-Century Modern'
    },
    client: {
      en: 'Private residence',
      es: 'Residencia privada'
    },
    role: {
      en: 'Architectural Design',
      es: 'Diseño Arquitectónico'
    },
    summary: {
      en: 'A whole-house remodel that keeps the low horizontal roofline and opens the ground floor.',
      es: 'Una reforma integral que conserva la línea de cubierta horizontal y abre la planta baja.'
    },
    body: {
      en: [
        'A remodel of a mid-century house that treats the original horizontal roofline as the thing worth protecting. The extended eave is kept and pushed further, so the added upper storey reads as a shaded band rather than a second house stacked on the first.',
        'The ground floor is opened to a full-width glazed elevation onto the terrace, with a covered balcony above it. Warm accent columns break the white stucco at regular intervals, and a dark upper cladding lets the added volume recede.',
        'Studied as exterior renderings from two approaches, with interior options developed for the kitchen and the main suite.'
      ],
      es: [
        'La reforma de una casa mid-century que trata la línea horizontal original de la cubierta como lo que merece protegerse. El alero se conserva y se prolonga, de modo que la planta superior añadida se lee como una franja en sombra y no como una segunda casa apilada sobre la primera.',
        'La planta baja se abre con un alzado acristalado de toda la anchura hacia la terraza, con un balcón cubierto encima. Unos pilares de tono cálido interrumpen el estuco blanco a intervalos regulares, y un revestimiento oscuro en la planta alta hace retroceder el volumen añadido.',
        'Estudiado mediante renders exteriores desde dos aproximaciones, con opciones interiores desarrolladas para la cocina y el dormitorio principal.'
      ]
    },
    year: '2024',
    discipline: 'residential',
    tools: ['Revit', 'Enscape'],
    featured: false,
    cover: '/portfolio/Mid-Century%20Modern%20House%20Remodel/3D%20Exterior%20View%20Rendering_Enscape%20Software.png',
    images: [
      '/portfolio/Mid-Century%20Modern%20House%20Remodel/3D%20-%20Exterior%20Rendering.jpg',
      '/portfolio/Mid-Century%20Modern%20House%20Remodel/3D%20View%20-%20Exterior%202%20Rendering.jpg',
      '/portfolio/Mid-Century%20Modern%20House%20Remodel/3D%20View%20-%20Kitchen%20Option%201.jpg',
      '/portfolio/Mid-Century%20Modern%20House%20Remodel/3D%20View%20-%20Main%20Suite%20-%20Opt%201.jpg',
      '/portfolio/Mid-Century%20Modern%20House%20Remodel/3D%20View%20-%20Main%20Suite%20Opt%201%20Rendering.jpg'
    ],
    monogram: 'MC'
  },
  {
    slug: 'mixed-use-coffee-shop',
    title: {
      en: 'Mixed-Use Building — Coffee Shop',
      es: 'Edificio de Uso Mixto — Cafetería'
    },
    client: {
      en: 'Studio project',
      es: 'Proyecto de taller'
    },
    role: {
      en: 'Interior Design',
      es: 'Diseño de Interiores'
    },
    summary: {
      en: 'A ground-floor café fitted into a mixed-use building, planned around one long counter.',
      es: 'Una cafetería en planta baja dentro de un edificio de uso mixto, organizada en torno a una única barra.'
    },
    body: {
      en: [
        'The ground floor of a mixed-use building, fitted out as a café for a specialty coffee brand. A single long counter in poured concrete runs most of the depth of the tenancy, separating the service side from the room and giving the queue somewhere to go without crossing the seated area.',
        'Seating is deliberately mixed: a communal table at the centre, small round two-tops along the glazing, and a bar shelf at the counter, so the same footprint works for a morning rush and an afternoon of laptops. Timber millwork warms a palette otherwise held to concrete, plaster and glass.',
        'Presented as a colour-coded floor plan, a conceptual plan, three interior elevations and a set of interior and exterior renderings.'
      ],
      es: [
        'La planta baja de un edificio de uso mixto, acondicionada como cafetería para una marca de café de especialidad. Una única barra larga de hormigón visto recorre casi todo el fondo del local, separa la zona de servicio de la sala y da a la cola un lugar donde esperar sin invadir el área de mesas.',
        'Los asientos se mezclan a propósito: una mesa comunitaria en el centro, pequeñas mesas redondas junto al acristalamiento y una repisa alta en la barra, de modo que el mismo local sirve para la hora punta de la mañana y para una tarde de portátiles. La carpintería de madera templa una paleta por lo demás limitada a hormigón, yeso y vidrio.',
        'Presentado como planta codificada por colores, planta conceptual, tres alzados interiores y un conjunto de renders interiores y exteriores.'
      ]
    },
    year: '2024',
    discipline: 'commercial',
    tools: ['3D rendering', 'Hand drafting'],
    featured: true,
    cover: '/portfolio/Mixed-use%20Building-Coffee%20Shop/3D%20View%201%20-%20Blue%20Bottle%20Coffee.jpg',
    images: [
      '/portfolio/Mixed-use%20Building-Coffee%20Shop/3D%20View%202%20-%20Blue%20Bottle%20Coffee.jpg',
      '/portfolio/Mixed-use%20Building-Coffee%20Shop/3D%20View%203%20Rendering.png',
      '/portfolio/Mixed-use%20Building-Coffee%20Shop/3D%20View%20Exterior%20Rendering.png',
      '/portfolio/Mixed-use%20Building-Coffee%20Shop/Blue%20Bottle%20Coffee%20NB.jpeg',
      '/portfolio/Mixed-use%20Building-Coffee%20Shop/Coffee%20Shop%20Floor%20Plan_Conceptual%20Design.png',
      '/portfolio/Mixed-use%20Building-Coffee%20Shop/Espresso%20Martini.jpg',
      '/portfolio/Mixed-use%20Building-Coffee%20Shop/Expresso.png',
      '/portfolio/Mixed-use%20Building-Coffee%20Shop/Floor%20Plan%20Color%20Coded.png',
      '/portfolio/Mixed-use%20Building-Coffee%20Shop/Graphic%20Mug.jpg',
      '/portfolio/Mixed-use%20Building-Coffee%20Shop/Interior%20Elevation%201.png',
      '/portfolio/Mixed-use%20Building-Coffee%20Shop/Interior%20Elevation%202.png',
      '/portfolio/Mixed-use%20Building-Coffee%20Shop/Interior%20Elevation%203.png'
    ],
    monogram: 'CS'
  },
  {
    slug: 'passive-solar-adu',
    title: {
      en: 'Passive Solar ADU',
      es: 'ADU Solar Pasiva'
    },
    client: {
      en: 'Studio project',
      es: 'Proyecto de taller'
    },
    role: {
      en: 'Architectural Design',
      es: 'Diseño Arquitectónico'
    },
    summary: {
      en: 'A compact dwelling designed from the sun angles up, tested at both solstices.',
      es: 'Una vivienda compacta diseñada a partir del ángulo solar y verificada en ambos solsticios.'
    },
    body: {
      en: [
        'An accessory dwelling unit where the roof does the environmental work. A deep overhang on the south face is set to the exact depth that shades the glazing at the summer solstice and lets the low winter sun reach the back wall — the two conditions were drawn as paired elevation studies rather than assumed.',
        'The plan puts the glazed corner where the living space is, with the entry doors and a punched window sized down as the elevation turns away from the sun. Horizontal siding steps from a pale lower band to a warmer upper band, keeping the small volume from reading as a shed.',
        'Developed from massing sketches and a physical study model photographed from every face and from above, then resolved as a floor plan, solstice elevation studies, a section box, and interior views of the kitchen and living room.'
      ],
      es: [
        'Una vivienda auxiliar en la que la cubierta hace el trabajo ambiental. El gran alero de la fachada sur está ajustado a la profundidad exacta que protege el acristalamiento en el solsticio de verano y deja que el sol bajo de invierno alcance el muro del fondo: ambas condiciones se dibujaron como estudios de alzado emparejados en lugar de darse por supuestas.',
        'La planta sitúa la esquina acristalada en la zona de estar, y reduce las puertas de acceso y una ventana perforada a medida que el alzado se aparta del sol. El revestimiento horizontal pasa de una franja inferior clara a otra superior más cálida, evitando que el pequeño volumen se lea como un cobertizo.',
        'Desarrollado a partir de bocetos de volumetría y una maqueta de estudio fotografiada desde todas sus caras y desde el aire, y resuelto después como planta, estudios de alzado en los solsticios, una caja de sección y vistas interiores de la cocina y el salón.'
      ]
    },
    year: '2024',
    discipline: 'residential',
    tools: ['Revit', 'Enscape', 'Physical model'],
    featured: true,
    cover: '/portfolio/Passive%20Solar%20ADU/Renderings/3D%20Exterior%20-%20South.png',
    images: [
      '/portfolio/Passive%20Solar%20ADU/Brown%20-%20Project1A%20-%20Model%20Phase%201%20-%20Photo%20NE%20-%2009-15-24.jpg',
      '/portfolio/Passive%20Solar%20ADU/Brown%20-%20Project1A%20-%20Model%20Phase%201%20-%20Photo%20NW%20-%2009-15-24.jpg',
      '/portfolio/Passive%20Solar%20ADU/Brown%20-%20Project1A%20-%20Model%20Phase%201%20-%20Photo%20Roof%20-%2009-15-24.jpg',
      '/portfolio/Passive%20Solar%20ADU/Brown%20-%20Project1A%20-%20Model%20Phase%201%20-%20Photo%20South%20-%2009-15-24.jpg',
      '/portfolio/Passive%20Solar%20ADU/Brown%20-%20Project1A%20-%20Model%20Phase%201%20-%20Photo%20SW%20-%2009-15-24.jpg',
      '/portfolio/Passive%20Solar%20ADU/Brown%20-%20Project1A%20-%20Model%20Phase%201%20-%20Photo%20West%20-%2009-15-24.jpg',
      '/portfolio/Passive%20Solar%20ADU/Brown%20-%20Project1A%20-%20Model%20Phase%201%20-%20Sketches%20-%2009-15-24.jpg',
      '/portfolio/Passive%20Solar%20ADU/Floor%20Plan_Passive%20Solar%20ADU.png',
      '/portfolio/Passive%20Solar%20ADU/Renderings/3D%20Exterior%20-%20North%20West.png',
      '/portfolio/Passive%20Solar%20ADU/Renderings/3D%20Exterior%20View.jpg',
      '/portfolio/Passive%20Solar%20ADU/Renderings/3D%20Exterior%20View.png',
      '/portfolio/Passive%20Solar%20ADU/Renderings/3D%20Section%20Box.png',
      '/portfolio/Passive%20Solar%20ADU/Renderings/3D%20View%20Kitchen.png',
      '/portfolio/Passive%20Solar%20ADU/Renderings/3D%20View%20Living%20Room.png',
      '/portfolio/Passive%20Solar%20ADU/Renderings/Summer%20Solstice_South%20Elevation.png',
      '/portfolio/Passive%20Solar%20ADU/Renderings/Summer%20Solstice_West%20Elevation.png',
      '/portfolio/Passive%20Solar%20ADU/Renderings/Winter%20Solstice_South%20Elevation.png',
      '/portfolio/Passive%20Solar%20ADU/Renderings/Winter%20Solstice_West%20Elevation.png'
    ],
    monogram: 'PS'
  },
  {
    slug: 'rethink-south-park',
    title: {
      en: 'Rethink South Park',
      es: 'Repensar South Park'
    },
    client: {
      en: 'South Park, San Francisco',
      es: 'South Park, San Francisco'
    },
    role: {
      en: 'Urban & Landscape Design',
      es: 'Diseño Urbano y Paisajístico'
    },
    summary: {
      en: 'A proposal for San Francisco\'s oval park: café, water, play and an aquaponic system.',
      es: 'Una propuesta para el parque ovalado de San Francisco: café, agua, juego y un sistema acuapónico.'
    },
    body: {
      en: [
        'South Park is the narrow oval held between Second, Third, Bryant and Brannan — a green room in the middle of a dense block that most people cross rather than stay in. The proposal keeps the oval and reprogrammes what happens along its length.',
        'Four elements are threaded down the axis at 1" = 100\': a café at the centre, water features either side of it, local art as punctuation, and playground and outdoor activity zones at the ends, so the park has a reason to be occupied at different hours by different people. An aquaponic system is folded in as a working, visible piece of infrastructure rather than a display.',
        'The site was studied first as it stands — aerial and Google Earth views, existing photographs from the south, west and north-west — then tested through a physical site model and a run of hand-drawn serial views taken at eye level along the walk.'
      ],
      es: [
        'South Park es el estrecho óvalo contenido entre las calles Second, Third, Bryant y Brannan: una sala verde en medio de una manzana densa que la mayoría de la gente atraviesa en lugar de habitar. La propuesta conserva el óvalo y reprograma lo que ocurre a lo largo de él.',
        'Cuatro elementos se enhebran en su eje a escala 1" = 100\': un café en el centro, láminas de agua a ambos lados, arte local como puntuación, y zonas de juego y actividad al aire libre en los extremos, de modo que el parque tenga motivos para ocuparse a distintas horas por distintas personas. Un sistema acuapónico se incorpora como infraestructura visible y en funcionamiento, no como exhibición.',
        'El emplazamiento se estudió primero tal como está —vistas aéreas y de Google Earth, fotografías existentes desde el sur, el oeste y el noroeste— y después se ensayó mediante una maqueta de sitio y una serie de vistas seriadas dibujadas a mano a la altura de la vista a lo largo del recorrido.'
      ]
    },
    year: '2023',
    discipline: 'urban',
    tools: ['Physical model', 'Hand drawing', 'Site analysis'],
    featured: true,
    cover: '/portfolio/South%20Park/Restaurant%20view.png',
    images: [
      '/portfolio/South%20Park/3D%20Google%20Earth.png',
      '/portfolio/South%20Park/Aerial%20View.jpg',
      '/portfolio/South%20Park/Aquaponic%20Systems.png',
      '/portfolio/South%20Park/Cover.png',
      '/portfolio/South%20Park/Existing%20View%20South%20Park.png',
      '/portfolio/South%20Park/Golden%20G.jpg',
      '/portfolio/South%20Park/North%20West.jpg',
      '/portfolio/South%20Park/Option%201.jpg',
      '/portfolio/South%20Park/Playground.jpg',
      '/portfolio/South%20Park/Proposed%20site.png',
      '/portfolio/South%20Park/Serial%20view%203.png',
      '/portfolio/South%20Park/Site%20Plan%20Base_1.jpg',
      '/portfolio/South%20Park/Site.jpg',
      '/portfolio/South%20Park/South%20View.jpg',
      '/portfolio/South%20Park/South%20West%20View.jpg',
      '/portfolio/South%20Park/South-Park%20Existing.jpg',
      '/portfolio/South%20Park/West%20View.jpg'
    ],
    monogram: 'SP'
  },
  {
    slug: 'surf-house-adu',
    title: {
      en: 'Surf House ADU',
      es: 'ADU Surf House'
    },
    client: {
      en: 'Studio project',
      es: 'Proyecto de taller'
    },
    role: {
      en: 'Architectural Design',
      es: 'Diseño Arquitectónico'
    },
    summary: {
      en: 'A clifftop accessory dwelling turned entirely toward the break below.',
      es: 'Una vivienda auxiliar sobre el acantilado, volcada por completo hacia la rompiente.'
    },
    body: {
      en: [
        'A small accessory dwelling unit set on the edge of a coastal bluff, planned around a single question: how much of the day can be spent outdoors. The answer is a deck that is nearly the footprint of the house again, stepping down to grade and holding a plunge pool, an outdoor shower and a rack for boards.',
        'A mono-pitch roof lifts toward the water, so the tall glazed wall faces the break and the low side takes the weather. Timber cladding runs unbroken around the volume; the interior is a single room with a compact service wall behind.',
        'Documented as a coastal set: floor plans, an elevation, a long section, and exterior perspectives at midday and after dark.'
      ],
      es: [
        'Una pequeña vivienda auxiliar situada al borde de un acantilado costero, planteada a partir de una sola pregunta: cuánto del día puede pasarse al aire libre. La respuesta es una terraza casi tan grande como la propia casa, que desciende hasta el terreno y aloja una piscina, una ducha exterior y un soporte para tablas.',
        'Una cubierta a un agua se eleva hacia el mar, de modo que el gran paño acristalado mira a la rompiente y el lado bajo recibe el temporal. El revestimiento de madera recorre el volumen sin interrupción; el interior es una única estancia con un muro técnico compacto al fondo.',
        'Documentado como un conjunto costero: plantas, un alzado, una sección longitudinal y perspectivas exteriores a mediodía y tras el anochecer.'
      ]
    },
    year: '2024',
    discipline: 'residential',
    tools: ['3D rendering', 'Hand drafting'],
    featured: true,
    cover: '/portfolio/Surf%20House%20ADU/Exterior%20Perspective%20-%20Night%20Time.jpg',
    images: [
      '/portfolio/Surf%20House%20ADU/B%26W%20Floor%20Plan.jpg',
      '/portfolio/Surf%20House%20ADU/Cover%20page.png',
      '/portfolio/Surf%20House%20ADU/Elevation%2002.jpg',
      '/portfolio/Surf%20House%20ADU/Exterior%20Perspective%20-%20Daytime.jpg',
      '/portfolio/Surf%20House%20ADU/Floor%20plan%2002.jpg',
      '/portfolio/Surf%20House%20ADU/Section.jpg'
    ],
    monogram: 'SH'
  }
];

if (typeof window !== 'undefined') window.projects = projects;
export default projects;
