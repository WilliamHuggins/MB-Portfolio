/**
 * Bilingual dictionary — English / Español.
 *
 * Every user-visible string on the site lives here. Mark up an element with
 * `data-i18n="key"` to have its text swapped; use `data-i18n-attr="attribute"`
 * to target an attribute instead (e.g. placeholder, aria-label, content).
 */
const translations = {
  en: {
    'meta.langName': 'English',

    'nav.home': 'Home',
    'nav.work': 'Work',
    'nav.bio': 'Atelier',
    'nav.contact': 'Contact',
    'nav.styleguide': 'Style Guide',
    'nav.menu': 'Menu',
    'nav.skip': 'Skip to content',

    'a11y.theme': 'Switch colour theme',
    'a11y.langEn': 'Switch site language to English',
    'a11y.langEs': 'Cambiar el idioma del sitio a español',
    'a11y.top': 'Back to top',

    'loader.mark': 'Mariela Brown',
    'loader.status': 'Curating the collection',

    'hero.eyebrow': 'Designer · Art Director · Since 2014',
    'hero.line1': 'Mariela',
    'hero.line2': 'Brown',
    'hero.blurb':
      'A design practice built on restraint, craft and considered detail — identities, editorial systems and digital experiences for brands that intend to be remembered.',
    'hero.cta.work': 'View the Collection',
    'hero.cta.contact': 'Commission a Project',
    'hero.scroll': 'Scroll',
    'hero.availability': 'Accepting select commissions',

    'marquee.1': 'Brand Identity',
    'marquee.2': 'Art Direction',
    'marquee.3': 'Editorial Design',
    'marquee.4': 'Digital Experience',
    'marquee.5': 'Packaging',
    'marquee.6': 'Spatial Design',

    'featured.eyebrow': 'Selected Work',
    'featured.title': 'A collection built on quiet confidence.',
    'featured.aside':
      'Each engagement begins with the same question: what should this brand make a person feel before they read a single word?',
    'featured.cta': 'See all projects',

    'philosophy.eyebrow': 'The Practice',
    'philosophy.title': 'Luxury is not decoration. It is precision.',
    'philosophy.body1':
      'Mariela Brown works at the intersection of brand, editorial and interface — building visual systems that hold their composure across a business card, a storefront and a screen.',
    'philosophy.body2':
      'The work favours generous space, exacting typography and materials that reward attention. Nothing is added that does not earn its place.',
    'philosophy.cta': 'About Mariela',

    'capability.1.title': 'Brand Identity',
    'capability.1.body':
      'Positioning, naming, marks, typographic systems and the guidelines that keep them intact for years.',
    'capability.2.title': 'Art Direction',
    'capability.2.body':
      'Photography, styling and campaign direction — from mood and casting through to final grade.',
    'capability.3.title': 'Editorial & Print',
    'capability.3.body':
      'Books, lookbooks and magazines. Grid architecture, paper stock, finishing and press supervision.',
    'capability.4.title': 'Digital Experience',
    'capability.4.body':
      'Interface design and motion for sites and products that feel as considered as the printed piece.',

    'stats.years': 'Years in practice',
    'stats.projects': 'Projects delivered',
    'stats.countries': 'Countries served',
    'stats.awards': 'Awards & features',

    'cta.title': 'Let us build something worth keeping.',
    'cta.body': 'Now booking projects for the coming season.',
    'cta.button': 'Start a Conversation',

    'work.eyebrow': 'The Archive',
    'work.title': 'Selected Works',
    'work.aside':
      'Identity, editorial, packaging and digital work — filter the archive by discipline or reorder it by year.',
    'work.filter.all': 'All',
    'work.filter.branding': 'Branding',
    'work.filter.editorial': 'Editorial',
    'work.filter.digital': 'Digital',
    'work.filter.packaging': 'Packaging',
    'work.filter.spatial': 'Spatial',
    'work.sort.label': 'Order',
    'work.sort.yearDesc': 'Newest first',
    'work.sort.yearAsc': 'Oldest first',
    'work.sort.titleAsc': 'Title A–Z',
    'work.sort.titleDesc': 'Title Z–A',
    'work.empty': 'Nothing in this discipline yet.',
    'work.countSuffix': 'projects',
    'work.view': 'View',

    'project.back': 'Back to the archive',
    'project.client': 'Client',
    'project.role': 'Role',
    'project.year': 'Year',
    'project.discipline': 'Discipline',
    'project.tools': 'Tools',
    'project.overview': 'Overview',
    'project.gallery': 'Gallery',
    'project.next': 'Next project',
    'project.notfound': 'This project is not in the archive.',
    'project.notfoundCta': 'Return to the archive',

    'bio.eyebrow': 'The Atelier',
    'bio.title': 'Mariela Brown',
    'bio.role': 'Designer & Art Director',
    'bio.p1':
      'Mariela Brown is a designer and art director whose work spans identity, editorial and digital craft. Her practice is grounded in a simple conviction: that restraint reads as confidence, and confidence is what makes a brand feel expensive.',
    'bio.p2':
      'She works closely with a small number of clients each year — houses, galleries, hospitality groups and founders who want a visual language built to outlast a trend cycle. Every engagement is led personally, from first conversation to final press check.',
    'bio.p3':
      'Her work has been recognised for its typographic rigour and its instinct for material — the weight of a paper, the temperature of a colour, the pause before a headline resolves.',
    'bio.approach.title': 'Approach',
    'bio.approach.body':
      'Research, then reduction. Every project begins with immersion and ends with subtraction — removing everything that dilutes the idea until only the essential remains.',
    'bio.timeline.title': 'Selected Milestones',
    'bio.services.title': 'Disciplines',
    'bio.download': 'Download CV',

    'timeline.1.year': '2014',
    'timeline.1.title': 'Practice founded',
    'timeline.1.desc': 'Opened an independent studio focused on identity and editorial design.',
    'timeline.2.year': '2018',
    'timeline.2.title': 'First international commission',
    'timeline.2.desc': 'Began working with clients across Europe and Latin America.',
    'timeline.3.year': '2021',
    'timeline.3.title': 'Editorial recognition',
    'timeline.3.desc': 'Work featured in international design annuals and press.',
    'timeline.4.year': '2024',
    'timeline.4.title': 'Studio expansion',
    'timeline.4.desc': 'Added digital experience and motion direction to the offering.',

    'contact.eyebrow': 'Enquiries',
    'contact.title': 'Let us begin.',
    'contact.lede':
      'Tell me about the project — the ambition, the timeline, the audience. Enquiries are answered personally within two business days.',
    'contact.emailLabel': 'Email',
    'contact.socialLabel': 'Elsewhere',
    'contact.studioLabel': 'Studio',
    'contact.studioValue': 'Available worldwide · Remote & on-site',
    'contact.hoursLabel': 'Response time',
    'contact.hoursValue': 'Within two business days',
    'contact.form.name': 'Full name',
    'contact.form.namePh': 'Your name',
    'contact.form.email': 'Email address',
    'contact.form.emailPh': 'you@company.com',
    'contact.form.subject': 'Project type',
    'contact.form.subjectPh': 'Brand identity, editorial, digital…',
    'contact.form.message': 'The brief',
    'contact.form.messagePh': 'A few lines about what you have in mind.',
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

    'footer.tagline':
      'Design and art direction for brands with something worth saying.',
    'footer.nav': 'Navigate',
    'footer.social': 'Follow',
    'footer.contactCol': 'Enquiries',
    'footer.copyright': '© 2026 Mariela Brown. All rights reserved.',
    'footer.credit': 'Designed & built with care.',
    'footer.top': 'Back to top'
  },

  es: {
    'meta.langName': 'Español',

    'nav.home': 'Inicio',
    'nav.work': 'Obra',
    'nav.bio': 'Taller',
    'nav.contact': 'Contacto',
    'nav.styleguide': 'Guía de Estilo',
    'nav.menu': 'Menú',
    'nav.skip': 'Saltar al contenido',

    'a11y.theme': 'Cambiar el tema de color',
    'a11y.langEn': 'Switch site language to English',
    'a11y.langEs': 'Cambiar el idioma del sitio a español',
    'a11y.top': 'Volver arriba',

    'loader.mark': 'Mariela Brown',
    'loader.status': 'Curando la colección',

    'hero.eyebrow': 'Diseñadora · Directora de Arte · Desde 2014',
    'hero.line1': 'Mariela',
    'hero.line2': 'Brown',
    'hero.blurb':
      'Un estudio de diseño fundado en la contención, el oficio y el detalle medido: identidades, sistemas editoriales y experiencias digitales para marcas que aspiran a ser recordadas.',
    'hero.cta.work': 'Ver la Colección',
    'hero.cta.contact': 'Encargar un Proyecto',
    'hero.scroll': 'Desplazar',
    'hero.availability': 'Acepta encargos seleccionados',

    'marquee.1': 'Identidad de Marca',
    'marquee.2': 'Dirección de Arte',
    'marquee.3': 'Diseño Editorial',
    'marquee.4': 'Experiencia Digital',
    'marquee.5': 'Packaging',
    'marquee.6': 'Diseño Espacial',

    'featured.eyebrow': 'Obra Seleccionada',
    'featured.title': 'Una colección construida sobre una confianza serena.',
    'featured.aside':
      'Cada encargo comienza con la misma pregunta: ¿qué debería sentir alguien ante esta marca antes de leer una sola palabra?',
    'featured.cta': 'Ver todos los proyectos',

    'philosophy.eyebrow': 'El Estudio',
    'philosophy.title': 'El lujo no es ornamento. Es precisión.',
    'philosophy.body1':
      'Mariela Brown trabaja en la intersección entre marca, editorial e interfaz, construyendo sistemas visuales que mantienen la compostura en una tarjeta, en una fachada y en una pantalla.',
    'philosophy.body2':
      'La obra privilegia el espacio generoso, la tipografía exacta y los materiales que premian la atención. No se añade nada que no se haya ganado su lugar.',
    'philosophy.cta': 'Sobre Mariela',

    'capability.1.title': 'Identidad de Marca',
    'capability.1.body':
      'Posicionamiento, naming, marcas, sistemas tipográficos y las guías que los mantienen intactos durante años.',
    'capability.2.title': 'Dirección de Arte',
    'capability.2.body':
      'Fotografía, estilismo y dirección de campaña: del concepto y el casting hasta el etalonaje final.',
    'capability.3.title': 'Editorial e Impresión',
    'capability.3.body':
      'Libros, lookbooks y revistas. Arquitectura de retícula, elección de papel, acabados y supervisión de imprenta.',
    'capability.4.title': 'Experiencia Digital',
    'capability.4.body':
      'Diseño de interfaz y movimiento para sitios y productos tan cuidados como la pieza impresa.',

    'stats.years': 'Años de práctica',
    'stats.projects': 'Proyectos entregados',
    'stats.countries': 'Países atendidos',
    'stats.awards': 'Premios y publicaciones',

    'cta.title': 'Construyamos algo que merezca conservarse.',
    'cta.body': 'Agenda abierta para la próxima temporada.',
    'cta.button': 'Iniciar una Conversación',

    'work.eyebrow': 'El Archivo',
    'work.title': 'Obras Seleccionadas',
    'work.aside':
      'Identidad, editorial, packaging y trabajo digital. Filtra el archivo por disciplina u ordénalo por año.',
    'work.filter.all': 'Todo',
    'work.filter.branding': 'Marca',
    'work.filter.editorial': 'Editorial',
    'work.filter.digital': 'Digital',
    'work.filter.packaging': 'Packaging',
    'work.filter.spatial': 'Espacial',
    'work.sort.label': 'Orden',
    'work.sort.yearDesc': 'Más recientes',
    'work.sort.yearAsc': 'Más antiguos',
    'work.sort.titleAsc': 'Título A–Z',
    'work.sort.titleDesc': 'Título Z–A',
    'work.empty': 'Aún no hay obra en esta disciplina.',
    'work.countSuffix': 'proyectos',
    'work.view': 'Ver',

    'project.back': 'Volver al archivo',
    'project.client': 'Cliente',
    'project.role': 'Rol',
    'project.year': 'Año',
    'project.discipline': 'Disciplina',
    'project.tools': 'Herramientas',
    'project.overview': 'Descripción',
    'project.gallery': 'Galería',
    'project.next': 'Siguiente proyecto',
    'project.notfound': 'Este proyecto no está en el archivo.',
    'project.notfoundCta': 'Volver al archivo',

    'bio.eyebrow': 'El Taller',
    'bio.title': 'Mariela Brown',
    'bio.role': 'Diseñadora y Directora de Arte',
    'bio.p1':
      'Mariela Brown es diseñadora y directora de arte, con una obra que abarca identidad, editorial y oficio digital. Su práctica parte de una convicción sencilla: la contención se lee como confianza, y la confianza es lo que hace que una marca se sienta valiosa.',
    'bio.p2':
      'Trabaja de cerca con un número reducido de clientes cada año: casas, galerías, grupos de hostelería y fundadores que buscan un lenguaje visual capaz de sobrevivir a las modas. Cada encargo lo dirige personalmente, desde la primera conversación hasta la última prueba de imprenta.',
    'bio.p3':
      'Su trabajo ha sido reconocido por su rigor tipográfico y su instinto para el material: el gramaje de un papel, la temperatura de un color, la pausa antes de que un titular se resuelva.',
    'bio.approach.title': 'Método',
    'bio.approach.body':
      'Investigar y después reducir. Cada proyecto empieza con inmersión y termina con sustracción: quitar todo lo que diluye la idea hasta que solo queda lo esencial.',
    'bio.timeline.title': 'Hitos Seleccionados',
    'bio.services.title': 'Disciplinas',
    'bio.download': 'Descargar CV',

    'timeline.1.year': '2014',
    'timeline.1.title': 'Fundación del estudio',
    'timeline.1.desc': 'Abre un estudio independiente centrado en identidad y diseño editorial.',
    'timeline.2.year': '2018',
    'timeline.2.title': 'Primer encargo internacional',
    'timeline.2.desc': 'Comienza a trabajar con clientes de Europa y América Latina.',
    'timeline.3.year': '2021',
    'timeline.3.title': 'Reconocimiento editorial',
    'timeline.3.desc': 'Su obra aparece en anuarios y publicaciones de diseño internacionales.',
    'timeline.4.year': '2024',
    'timeline.4.title': 'Ampliación del estudio',
    'timeline.4.desc': 'Incorpora experiencia digital y dirección de movimiento a los servicios.',

    'contact.eyebrow': 'Consultas',
    'contact.title': 'Empecemos.',
    'contact.lede':
      'Cuéntame sobre el proyecto: la ambición, los plazos, el público. Las consultas se responden personalmente en un plazo de dos días hábiles.',
    'contact.emailLabel': 'Correo',
    'contact.socialLabel': 'En otros lugares',
    'contact.studioLabel': 'Estudio',
    'contact.studioValue': 'Disponible en todo el mundo · Remoto y presencial',
    'contact.hoursLabel': 'Tiempo de respuesta',
    'contact.hoursValue': 'En dos días hábiles',
    'contact.form.name': 'Nombre completo',
    'contact.form.namePh': 'Tu nombre',
    'contact.form.email': 'Correo electrónico',
    'contact.form.emailPh': 'tu@empresa.com',
    'contact.form.subject': 'Tipo de proyecto',
    'contact.form.subjectPh': 'Identidad, editorial, digital…',
    'contact.form.message': 'El encargo',
    'contact.form.messagePh': 'Unas líneas sobre lo que tienes en mente.',
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

    'footer.tagline':
      'Diseño y dirección de arte para marcas con algo que merece decirse.',
    'footer.nav': 'Navegar',
    'footer.social': 'Seguir',
    'footer.contactCol': 'Consultas',
    'footer.copyright': '© 2026 Mariela Brown. Todos los derechos reservados.',
    'footer.credit': 'Diseñado y construido con esmero.',
    'footer.top': 'Volver arriba'
  }
};

if (typeof window !== 'undefined') window.translations = translations;
export default translations;
