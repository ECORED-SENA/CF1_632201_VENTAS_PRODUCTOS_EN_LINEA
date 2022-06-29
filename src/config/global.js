export default {
  global: {
    componenteFormativo: 'Atención al cliente y comunicación comercial',
    descripcionCurso:
      'El presente componente formativo ofrece una introducción completa a las diferentes temáticas sobre el comercio electrónico, incluyendo la inclusión y accesibilidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'El cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Clases de clientes',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Perspectiva inclusiva',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Atención al cliente',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<i>Insight</i> del consumidor',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Introducción al <i>marketing</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Ecosistemas de <i>marketing</i> digital',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Conceptos en estudio de mercado',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Redes sociales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Netiqueta y comunicación en medios digitales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Conociendo las organizaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Imagen e identidad organizacional',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: '<i>Branding</i>',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Lenguaje corporativo',
            hash: 't_6_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.4',
            titulo: 'Guías para gestionar la imagen corporativa',
            hash: 't_6_4',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo:
          'El triángulo del servicio y la aplicación a mejorar las ventas en línea',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Momentos de verdad y cierre de la venta',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '8.1',
            titulo: 'Mapa de experiencia del cliente',
            hash: 't_8_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.2',
            titulo: 'Momento cero de la verdad (ZMOT)',
            hash: 't_8_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'American Express. (19 de 11 de 2021). <i>Marketplaces: cómo ayudan a tu empresa.</i>',
      link:
        'https://www.americanexpress.com/es-mx/negocios/trends-and-insights/articles/marketplaces-como-ayudan-a-tu-empresa-y-ejemplos/ ',
    },
    {
      referencia:
        'American Marketing Association. (2011). <i>American Marketing Association.</i> ',
      link: 'https://www.ama.org/ ',
    },
    {
      referencia:
        'Cámara de Comercio de Bogotá. (2020). <i>Cómo vender por WhatsApp Business.</i> ',
      link: 'http://hdl.handle.net/11520/25775 ',
    },
    {
      referencia:
        'Canlla, E. D. (2017). <i>Marketing y ventas por internet. Macro</i> ',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=5478 ',
    },
    {
      referencia:
        'Cárdenas, F. X. (2020). El impacto de las redes sociales en la administración de empresas. Recimundo, 173-182. ',
      link: 'http://recimundo.com/index.php/es/article/view/755 ',
    },
    {
      referencia:
        'CEEI Ciudad Real. (2005). <i>Guía para la elaboración de un estudio de mercado.</i>',
      link:
        'https://www.eenbasque.net/guia_transferencia_resultados/files/CEEI_Ciudad_Real-Guia_para_la_elaboraci%2B%A6n_de_un_estudio_de_mercado.pdf ',
    },
    {
      referencia:
        'Didier, A. (2019). <i>Marketing B2B qué es exactamente.</i> ',
      link:
        'https://www.inboundcycle.com/blog-de-inbound-marketing/marketing-b2b-que-es-exactamente ',
    },
    {
      referencia:
        'Discapacidad Colombia. (2019). <i>Ley Estatutaria 1618 de 2013.</i> ',
      link:
        'https://discapacidadcolombia.com/index.php/legislacion/145-ley-estatutaria-1618-de-2013 ',
    },
    {
      referencia:
        'Hubspot (2021). <i>Identifica qué tipos de clientes resuenan con tu negocio</i>',
      link: 'https://blog.hubspot.es/sales/tipos-de-clientes',
    },
    {
      referencia:
        'Jesús, S. (2022). <i>Qué es un insight en marketing: ejemplos prácticos. Economía 3.</i> ',
      link: 'https://economia3.com/que-es-insight/',
    },
    {
      referencia:
        'Katyuska. (2016). <i>Diferencias entre mercados B2C y mercados B2B</i>',
      link: 'https://wuombo.com/diferencias-mercados-b2c-mercados-b2b/ ',
    },
    {
      referencia: 'Lauría, G. (2019). <i>Cliente-consumidor.</i> ',
      link: 'https://debmedia.com/blog/cliente-consumidor/ ',
    },
    {
      referencia:
        'Lecinski, J. (2011). <i>ZMOT Ganando el momento cero de la verdad.</i> ',
      link:
        'https://think.storage.googleapis.com/intl/es-419_ALL/docs/2011-winning-zmot-ebook_research-studies.pdf ',
    },
    {
      referencia:
        'Lionbridge. (2020). <i>¿Cómo puede definir y gestionar el lenguaje corporativo de su empresa?</i> ',
      link:
        'https://www.lionbridge.com/es/blog/content-creation/how-do-you-define-and-manage-your-corporate-language/ ',
    },
    {
      referencia:
        'López, R. V. (2017). <i>Comunicación y atención al cliente en hostelería y turismo. IC Editorial.</i> ',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=8742 ',
    },
    {
      referencia:
        'Meta. (2021). <i>Las oportunidades empresariales del metaverso: tres insights. Meta Business.</i> ',
      link:
        'https://www.facebook.com/business/news/metaverse-business-opportunity-insights ',
    },
    {
      referencia:
        'Ministerio de Salud. (2017). <i>Lineamiento para la implementación de actividades de promoción de la salud visual, control de alteraciones visuales y discapacidad visual evitable (estrategia visión 2020). MinSalud.</i> ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ENT/lineamientos-salud-visual-2017.pdf ',
    },
    {
      referencia:
        'Peláez, L., R., y Lara, V., C. (2016). <i>Uso de las netiquetas y su correcta utilización en las redes sociales. Contribuciones a las Ciencias Sociales</i>',
      link: 'http://www.eumed.net/rev/cccss/2016/04/netiquetas.html ',
    },
    {
      referencia:
        'Pérez, I. R. (2014). <i>Uso e impacto de las redes sociales en las estrategias de marketing de las pymes. Revista de Investigación Académica sin Frontera, 7(19), 01-24.</i> ',
      link:
        'https://revistainvestigacionacademicasinfrontera.unison.mx/index.php/RDIASF/article/view/47/46 ',
    },
    {
      referencia:
        'Quiroga, M. (2020). <i>Tipos de clientes. Economipedia.</i> ',
      link: 'https://economipedia.com/definiciones/tipos-de-clientes.html ',
    },
    {
      referencia: 'W3C.org. (2021). <i>W3C.</i>',
      link: 'https://www.w3.org/WAI/fundamentals/accessibility-intro/ ',
    },
    {
      referencia:
        'Web Accessibility in Mind. (2017). <i>Accesibilidad web en mente.</i> ',
      link: 'https://webaim.org/techniques/screenreader/ ',
    },
  ],
  glosario: [
    {
      termino: 'Alcance',
      significado:
        'métrica empleada en el <em>marketing</em> digital que mide la cantidad de personas a la que ha llegado un contenido, anuncio, etc., al menos una vez. Gracias a esta métrica, se puede saber la audiencia que ha tenido en dicha estrategia, y utilizarla como base para obtener otro tipo de métricas. ',
    },
    {
      termino: 'CRM',
      significado:
        '<em>(Customer Relationship Management)</em> tipo de programa informático que permite organizar y gestionar todos los parámetros relacionados con los clientes y que reúne información de cada proceso de venta individual, desde la captación hasta el análisis de satisfacción.',
    },
    {
      termino: '<em>E-mail marketing</em>',
      significado:
        'campañas de mercadeo y publicidad a través de correo electrónico.',
    },
    {
      termino: '<em>Community Managers</em>',
      significado:
        'El <em>community manager</em> es la voz de la empresa en las redes sociales, pero debe ser capaz también de trasladar al cliente su propia personalidad individual. De lo contrario, su voz sería percibida por el consumidor como impostada y artificial.',
    },
    {
      termino: 'Etiología',
      significado:
        'parte de la medicina que estudia el origen o las causas de las enfermedades.',
    },
    {
      termino: 'Grupos demográficos',
      significado:
        'división de un mercado en grupos más pequeños, estos pueden ser divididos según la edad, el género, los ingresos familiares, la raza y la etnia, la calificación, el estado civil, la naturaleza del empleo, etc.',
    },
    {
      termino: '<em>Marketing</em> relacional',
      significado:
        'conjunto de estrategias de construcción y diseminación de marca, prospección, fidelización y creación de autoridad en el mercado. El objetivo del <em>marketing</em> relacional es conquistar y fidelizar a los clientes, además de convertirlos en defensores y promotores de la marca.',
    },
    {
      termino: 'Metadatos',
      significado:
        'son “datos acerca de los datos” y sirven para suministrar información sobre los datos producidos. Los metadatos consisten en información que caracteriza datos, describen el contenido, calidad, condiciones, historia, disponibilidad y otras características de los datos.',
    },
    {
      termino: 'Multimedia',
      significado:
        'que está destinado a la difusión por varios medios de comunicación combinados, como texto, fotografías, imágenes de video o sonido, generalmente con el propósito de educar o de entretener.',
    },
    {
      termino: 'Plataformas <em>marketplace</em>',
      significado:
        'la palabra <em>marketplace</em> viene de la unión de dos términos en inglés: <em>market</em>, que significa mercado y place, que quiere decir lugar. Por lo tanto, se pueden definir como un local para hacer compras, una especie de vitrina virtual en la que los clientes pueden tener acceso a productos de diversas marcas o empresas.',
    },
    {
      termino: '<em>Spam</em>',
      significado:
        'mensajes no solicitados que se envían a un gran número de destinatarios con fines publicitarios o comerciales. Se acuñó el término en correo electrónico, pero es general en los demás programas de mensajería.',
    },
    {
      termino: 'Vigilancia tecnológica',
      significado:
        'identificación, evaluación y uso de señales débiles para reconocer y advertir en una fase temprana, tecnologías emergentes, discontinuidades tecnológicas (innovaciones disruptivas o rupturistas), oportunidades y amenazas.',
    },
  ],
  complementario: [
    {
      tema: '<i>Insight</i> del consumidor',
      referencia:
        'Jesús S. (2022). <i>Qué es un insight en marketing: ejemplos prácticos. Economía 3.</i> ',
      tipo: 'Artículo',
      link: 'https://economia3.com/que-es-insight/ ',
    },
    {
      tema: 'Conceptos en estudio de mercado',
      referencia:
        'QuestionPro. (s. f.). <i>Tipos de investigación de mercado y sus principales características.</i> ',
      tipo: 'Artículo',
      link:
        'https://www.questionpro.com/blog/es/tipos-de-investigacion-de-mercado/ ',
    },
    {
      tema: 'Conceptos en estudio de mercado',
      referencia:
        'CEEI Ciudad Real - Creación y Desarrollo de Empresas. (s. f.). <i>Guía para la elaboración de un estudio de mercado.</i> ',
      tipo: 'PDF',
      descarga: 'downloads/CEEI_Ciudad_Real-Guia.pdf',
    },
    {
      tema: 'Momento cero de la verdad (ZMOT)',
      referencia:
        'Lecinski, J. (s. f.). <i>Ganando el momento cero de la verdad.</i> ',
      tipo: 'PDF',
      descarga: 'downloads/2011-winning-zmot-ebook_research-studies.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Andrés Suescun Lesmes',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Luis Fernando Botero Mendoza',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Gestión - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Oscar Ivan Uribe Ortiz',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Magdi Khalifha',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },

      {
        nombre: 'Yuly Marcela Gómez Tarazona',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
