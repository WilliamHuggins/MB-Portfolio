/**
 * Bilingual dictionary — English / Español.
 *
 * Every user-visible string on the site lives here. Mark up an element with
 * `data-i18n="key"` to have its text swapped; use `data-i18n-attr="attribute"`
 * to target an attribute instead (e.g. placeholder, aria-label, content).
 *
 * Project copy is not here — it lives with each project in
 * `assets/js/gallery-data.js`, bilingual in the data itself.
 */
const translations = {
  en: {
    'meta.langName': 'English',

    'nav.home': 'Home',
    'nav.work': 'Work',
    'nav.bio': 'Studio',
    'nav.contact': 'Contact',
    'nav.styleguide': 'Style Guide',
    'nav.menu': 'Menu',
    'nav.skip': 'Skip to content',

    'a11y.theme': 'Switch colour theme',
    'a11y.langEn': 'Switch site language to English',
    'a11y.langEs': 'Cambiar el idioma del sitio a español',
    'a11y.top': 'Back to top',

    'loader.mark': 'Mariela Brown',

    'hero.eyebrow': 'Architecture · Interiors · Urban Design',
    'hero.line1': 'Mariela',
    'hero.line2': 'Brown',
    'hero.blurb':
      'Buildings, interiors and public space — drawn by hand, built as models, and resolved in three dimensions. A practice that tests an idea in paper before it trusts it on screen.',
    'hero.cta.work': 'View the Work',
    'hero.cta.contact': 'Start a Project',
    'hero.scroll': 'Scroll',

    'marquee.1': 'Residential',
    'marquee.2': 'Interiors',
    'marquee.3': 'Adaptive Reuse',
    'marquee.4': 'Public Space',
    'marquee.5': 'Passive Design',
    'marquee.6': 'Physical Models',

    'featured.eyebrow': 'Selected Work',
    'featured.title': 'Every project begins on paper.',
    'featured.aside':
      'Sketches, watercolours and study models come first. The renderings arrive later, to confirm what the hand already worked out.',
    'featured.cta': 'See all projects',

    'philosophy.eyebrow': 'The Practice',
    'philosophy.title': 'Design the light and the section first.',
    'philosophy.body1':
      'The work moves between scales — a reception desk, a dwelling, a city block — but the method holds. Understand the site and the sun, find the section that makes the space work, and let plan and elevation follow from it.',
    'philosophy.body2':
      'Drawing by hand keeps the thinking slow enough to be honest. Physical models catch what a screen forgives. Only then does the project move into Revit and rendering, where it has to prove itself in daylight.',
    'philosophy.cta': 'About the studio',

    'capability.1.title': 'Residential',
    'capability.1.body':
      'New dwellings, accessory units and whole-house remodels — from massing and orientation through to plans, sections and elevations.',
    'capability.2.title': 'Interiors',
    'capability.2.body':
      'Interior architecture and millwork: space programming, circulation, finishes, custom joinery and the details that carry a room.',
    'capability.3.title': 'Urban & Landscape',
    'capability.3.body':
      'Public space and site strategy — existing-conditions analysis, programme, serial views and site models at neighbourhood scale.',
    'capability.4.title': 'Passive & Environmental',
    'capability.4.body':
      'Solar orientation, overhang depth and solstice shading studies, so a building is comfortable before any system is switched on.',

    'stats.projects': 'Projects',
    'stats.disciplines': 'Disciplines',
    'stats.years': 'Years represented',
    'stats.assets': 'Drawings & models',

    'cta.title': 'Have a site, a brief, or just an idea?',
    'cta.body': 'Open to new projects and collaborations.',
    'cta.button': 'Start a Conversation',

    'work.eyebrow': 'The Archive',
    'work.title': 'Selected Works',
    'work.aside':
      'Residential, interiors, commercial and urban design. Filter by discipline or reorder by year.',
    'work.filter.all': 'All',
    'work.filter.residential': 'Residential',
    'work.filter.commercial': 'Commercial',
    'work.filter.interiors': 'Interiors',
    'work.filter.urban': 'Urban',
    'work.sort.label': 'Order',
    'work.sort.yearDesc': 'Newest first',
    'work.sort.yearAsc': 'Oldest first',
    'work.sort.titleAsc': 'Title A–Z',
    'work.sort.titleDesc': 'Title Z–A',
    'work.empty': 'Nothing in this discipline yet.',
    'work.countSuffix': 'projects',
    'work.view': 'View',

    'project.back': 'Back to the archive',
    'project.client': 'Project',
    'project.role': 'Role',
    'project.year': 'Year',
    'project.discipline': 'Discipline',
    'project.tools': 'Media',
    'project.gallery': 'Drawings & Models',
    'project.next': 'Next project',
    'project.notfound': 'This project is not in the archive.',
    'project.notfoundCta': 'Return to the archive',

    'bio.eyebrow': 'The Studio',
    'bio.title': 'Mariela Brown',
    'bio.role': 'Architectural & Interior Designer',
    'bio.p1':
      'Mariela Brown designs buildings, interiors and public space. Her work runs from a single reception desk to a city block, and it is held together by a way of working rather than by a style.',
    'bio.p2':
      'Each project starts in analogue — freehand sketches, watercolour perspectives, and study models cut and folded in paper and photographed from every side. Working at that scale makes a bad idea obvious early, and a good one worth developing.',
    'bio.p3':
      'From there the project moves into Revit and rendering, where orientation, overhang depth and daylight are tested against the real sun angles of the site. The drawings that result are meant to be built from, not just looked at.',
    'bio.approach.title': 'Approach',
    'bio.approach.body':
      'Site and sun first, then the section, then everything else. Draw it by hand until it is understood, model it until it stands up, and only then let the software confirm it.',
    'bio.services.title': 'Disciplines',
    'bio.placeholderNote':
      'Placeholder biography — replace with your own words.',

    'contact.eyebrow': 'Enquiries',
    'contact.title': 'Let us begin.',
    'contact.lede':
      'Tell me about the project — the site, the brief, the timeline. Enquiries are answered personally.',
    'contact.emailLabel': 'Email',
    'contact.socialLabel': 'Elsewhere',
    'contact.studioLabel': 'Studio',
    'contact.studioValue': 'Remote & on-site',
    'contact.hoursLabel': 'Response time',
    'contact.hoursValue': 'Within two business days',
    'contact.form.name': 'Full name',
    'contact.form.namePh': 'Your name',
    'contact.form.email': 'Email address',
    'contact.form.emailPh': 'you@company.com',
    'contact.form.subject': 'Project type',
    'contact.form.subjectPh': 'Residential, interiors, urban…',
    'contact.form.message': 'The brief',
    'contact.form.messagePh': 'A few lines about the site and what you have in mind.',
    'contact.form.submit': 'Send Enquiry',
    'contact.form.sending': 'Opening your mail client…',
    'contact.form.note':
      'This form opens a pre-filled message in your own mail application — nothing is stored on this site.',
    'contact.form.invalid': 'Please complete every field before sending.',

    'styleguide.eyebrow': 'System',
    'styleguide.title': 'Style Guide',
    'styleguide.lede': 'The tokens, type scale and components behind the portfolio.',
    'styleguide.colour': 'Palette',
    'styleguide.type': 'Typography',
    'styleguide.components': 'Components',

    'footer.tagline': 'Architecture, interiors and public space.',
    'footer.nav': 'Navigate',
    'footer.social': 'Follow',
    'footer.contactCol': 'Enquiries',
    'footer.copyright': '© 2026 Mariela Brown. All rights reserved.',
    'footer.top': 'Back to top'
  },

  es: {
    'meta.langName': 'Español',

    'nav.home': 'Inicio',
    'nav.work': 'Obra',
    'nav.bio': 'Estudio',
    'nav.contact': 'Contacto',
    'nav.styleguide': 'Guía de Estilo',
    'nav.menu': 'Menú',
    'nav.skip': 'Saltar al contenido',

    'a11y.theme': 'Cambiar el tema de color',
    'a11y.langEn': 'Switch site language to English',
    'a11y.langEs': 'Cambiar el idioma del sitio a español',
    'a11y.top': 'Volver arriba',

    'loader.mark': 'Mariela Brown',

    'hero.eyebrow': 'Arquitectura · Interiores · Diseño Urbano',
    'hero.line1': 'Mariela',
    'hero.line2': 'Brown',
    'hero.blurb':
      'Edificios, interiores y espacio público: dibujados a mano, construidos como maquetas y resueltos en tres dimensiones. Una práctica que ensaya una idea en papel antes de confiarla a la pantalla.',
    'hero.cta.work': 'Ver la Obra',
    'hero.cta.contact': 'Iniciar un Proyecto',
    'hero.scroll': 'Desplazar',

    'marquee.1': 'Residencial',
    'marquee.2': 'Interiores',
    'marquee.3': 'Reutilización Adaptativa',
    'marquee.4': 'Espacio Público',
    'marquee.5': 'Diseño Pasivo',
    'marquee.6': 'Maquetas',

    'featured.eyebrow': 'Obra Seleccionada',
    'featured.title': 'Todo proyecto empieza en papel.',
    'featured.aside':
      'Primero llegan los bocetos, las acuarelas y las maquetas de estudio. Los renders vienen después, para confirmar lo que la mano ya había resuelto.',
    'featured.cta': 'Ver todos los proyectos',

    'philosophy.eyebrow': 'El Estudio',
    'philosophy.title': 'Primero se diseñan la luz y la sección.',
    'philosophy.body1':
      'El trabajo cambia de escala —un mostrador de recepción, una vivienda, una manzana— pero el método se mantiene. Entender el lugar y el sol, encontrar la sección que hace funcionar el espacio y dejar que la planta y el alzado se deriven de ella.',
    'philosophy.body2':
      'Dibujar a mano mantiene el pensamiento lo bastante lento como para ser honesto. Las maquetas revelan lo que una pantalla perdona. Solo entonces el proyecto pasa a Revit y al render, donde debe demostrarse a la luz del día.',
    'philosophy.cta': 'Sobre el estudio',

    'capability.1.title': 'Residencial',
    'capability.1.body':
      'Viviendas nuevas, unidades auxiliares y reformas integrales: de la volumetría y la orientación a plantas, secciones y alzados.',
    'capability.2.title': 'Interiores',
    'capability.2.body':
      'Arquitectura de interiores y carpintería: programación del espacio, circulación, acabados, mobiliario a medida y los detalles que sostienen una sala.',
    'capability.3.title': 'Urbano y Paisaje',
    'capability.3.body':
      'Espacio público y estrategia de sitio: análisis del estado actual, programa, vistas seriadas y maquetas a escala de barrio.',
    'capability.4.title': 'Pasivo y Ambiental',
    'capability.4.body':
      'Orientación solar, profundidad de aleros y estudios de sombra en los solsticios, para que un edificio sea confortable antes de encender ninguna instalación.',

    'stats.projects': 'Proyectos',
    'stats.disciplines': 'Disciplinas',
    'stats.years': 'Años representados',
    'stats.assets': 'Dibujos y maquetas',

    'cta.title': '¿Tienes un sitio, un encargo o solo una idea?',
    'cta.body': 'Abierta a nuevos proyectos y colaboraciones.',
    'cta.button': 'Iniciar una Conversación',

    'work.eyebrow': 'El Archivo',
    'work.title': 'Obras Seleccionadas',
    'work.aside':
      'Residencial, interiores, comercial y diseño urbano. Filtra por disciplina u ordena por año.',
    'work.filter.all': 'Todo',
    'work.filter.residential': 'Residencial',
    'work.filter.commercial': 'Comercial',
    'work.filter.interiors': 'Interiores',
    'work.filter.urban': 'Urbano',
    'work.sort.label': 'Orden',
    'work.sort.yearDesc': 'Más recientes',
    'work.sort.yearAsc': 'Más antiguos',
    'work.sort.titleAsc': 'Título A–Z',
    'work.sort.titleDesc': 'Título Z–A',
    'work.empty': 'Aún no hay obra en esta disciplina.',
    'work.countSuffix': 'proyectos',
    'work.view': 'Ver',

    'project.back': 'Volver al archivo',
    'project.client': 'Proyecto',
    'project.role': 'Rol',
    'project.year': 'Año',
    'project.discipline': 'Disciplina',
    'project.tools': 'Medios',
    'project.gallery': 'Dibujos y Maquetas',
    'project.next': 'Siguiente proyecto',
    'project.notfound': 'Este proyecto no está en el archivo.',
    'project.notfoundCta': 'Volver al archivo',

    'bio.eyebrow': 'El Estudio',
    'bio.title': 'Mariela Brown',
    'bio.role': 'Diseñadora de Arquitectura e Interiores',
    'bio.p1':
      'Mariela Brown diseña edificios, interiores y espacio público. Su trabajo va de un simple mostrador de recepción a una manzana entera, y lo que lo unifica es una manera de trabajar más que un estilo.',
    'bio.p2':
      'Cada proyecto empieza en analógico: bocetos a mano alzada, perspectivas a la acuarela y maquetas de estudio cortadas y plegadas en papel, fotografiadas desde todos sus lados. Trabajar a esa escala hace evidente pronto una mala idea, y merecedora de desarrollo una buena.',
    'bio.p3':
      'A partir de ahí el proyecto pasa a Revit y al render, donde la orientación, la profundidad del alero y la luz natural se comprueban frente a los ángulos solares reales del lugar. Los planos resultantes están pensados para construirse, no solo para mirarse.',
    'bio.approach.title': 'Método',
    'bio.approach.body':
      'Primero el sitio y el sol, después la sección y luego todo lo demás. Dibujarlo a mano hasta entenderlo, maquetarlo hasta que se sostenga, y solo entonces dejar que el software lo confirme.',
    'bio.services.title': 'Disciplinas',
    'bio.placeholderNote':
      'Biografía provisional — sustitúyela por tus propias palabras.',

    'contact.eyebrow': 'Consultas',
    'contact.title': 'Empecemos.',
    'contact.lede':
      'Cuéntame sobre el proyecto: el lugar, el encargo, los plazos. Las consultas se responden personalmente.',
    'contact.emailLabel': 'Correo',
    'contact.socialLabel': 'En otros lugares',
    'contact.studioLabel': 'Estudio',
    'contact.studioValue': 'Remoto y presencial',
    'contact.hoursLabel': 'Tiempo de respuesta',
    'contact.hoursValue': 'En dos días hábiles',
    'contact.form.name': 'Nombre completo',
    'contact.form.namePh': 'Tu nombre',
    'contact.form.email': 'Correo electrónico',
    'contact.form.emailPh': 'tu@empresa.com',
    'contact.form.subject': 'Tipo de proyecto',
    'contact.form.subjectPh': 'Residencial, interiores, urbano…',
    'contact.form.message': 'El encargo',
    'contact.form.messagePh': 'Unas líneas sobre el lugar y lo que tienes en mente.',
    'contact.form.submit': 'Enviar Consulta',
    'contact.form.sending': 'Abriendo tu gestor de correo…',
    'contact.form.note':
      'Este formulario abre un mensaje ya redactado en tu propia aplicación de correo; no se guarda nada en este sitio.',
    'contact.form.invalid': 'Completa todos los campos antes de enviar.',

    'styleguide.eyebrow': 'Sistema',
    'styleguide.title': 'Guía de Estilo',
    'styleguide.lede': 'Los tokens, la escala tipográfica y los componentes detrás del portafolio.',
    'styleguide.colour': 'Paleta',
    'styleguide.type': 'Tipografía',
    'styleguide.components': 'Componentes',

    'footer.tagline': 'Arquitectura, interiores y espacio público.',
    'footer.nav': 'Navegar',
    'footer.social': 'Seguir',
    'footer.contactCol': 'Consultas',
    'footer.copyright': '© 2026 Mariela Brown. Todos los derechos reservados.',
    'footer.top': 'Volver arriba'
  }
};

if (typeof window !== 'undefined') window.translations = translations;
export default translations;
