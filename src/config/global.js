export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Adquisición, desarrollo y retención del talento',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Adquisición del talento humano',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Fundamentos del proceso de reclutamiento y selección',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Diseño de perfiles y análisis de cargos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Estrategias de atracción de talento y uso de tecnologías en la selección',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Desarrollo y capacitación del talento humano',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Identificación de necesidades de capacitación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Diseño de programas de formación y evaluación del aprendizaje',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Gestión por competencias y desarrollo de carrera profesional',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Retención del talento y bienestar organizacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Políticas de compensación, incentivos y beneficios',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Cultura organizacional y clima laboral',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Estrategias para la fidelización, motivación y bienestar integral del talento humano',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
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
    ],
  },
  referencias: [
    {
      referencia:
        'Liaudat, S. (2021). <em>Stevia: conocimiento, propiedad intelectual y acumulación de capital</em>. Prometeo Libros.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/189040',
    },
    {
      referencia:
        'Hidalgo Gallardo, A. & Hidalgo Gallardo, R. L. (2019). <em>Comercio, medio ambiente y capital intelectual verde, una acción trifásica para México: Caso Hidalgo</em>. Plaza y Valdés.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/129833',
    },
    {
      referencia:
        'Prieto Moreno, B. & Borrás Atiénzar, F. (2020). <em>Modelos para el análisis, medición y evaluación del capital intelectual en las universidades</em>. Editorial Universitaria.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/127967',
    },
    {
      referencia:
        'Pérez Rodríguez, M. D. (Coord.). (2019). <em>Prevención del blanqueo de capitales y de la financiación del terrorismo</em>. Editorial ICB.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/227240',
    },
    {
      referencia:
        'Serrano Junco, C. L. & Borda Fernández, O. A. (2020). <em>Gestión del conocimiento y administración sostenible en las empresas del sector de Curtiembre</em>. Corporación Universitaria Minuto de Dios.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/149768',
    },
    {
      referencia:
        'Belly, P. (2019). <em>Así se gestiona el conocimiento: experiencias, testimonios y casos prácticos de implementación en empresas iberoamericanas</em>. Pluma Digital Ediciones.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/121002',
    },
    {
      referencia:
        'García Lirios, C., Bermúdez Ruíz, G. & Correón Guillén, J. (2023). <em>Gobernanza corporativa: identidad, reputación e imagen en torno a la formación del capital intelectual</em>. Revista Colombiana de Ciencias Administrativas.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/234903',
    },
    {
      referencia:
        'Ortiz Isaza, L. & Perdomo González, L. (2020). <em>Factores destacados en la gestión del talento humano para conseguir los objetivos estratégicos de la empresa S&G Administración PH SAS</em>. Fundación Universitaria San Mateo.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/187928',
    },
    {
      referencia:
        'Cubillos Calderón, C. H., Cáceres Mayorga, J. X. & Montealegre González, J. V. (2022). <em>Prácticas de talento humano en pequeñas organizaciones</em>. Universidad del Tolima.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/228400',
    },
    {
      referencia:
        'Ariza Aguilera, D. A. (2019). <em>El talento humano como factor clave en el éxito de los proyectos</em>. Editorial Universidad EAN.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/250972',
    },
    {
      referencia:
        'García Rubiano, M., Montenegro Timón, J. D. & Babativa Novoa, A. (2024). <em>Horizontes laborales: exploración de estrategias innovadoras en la gestión de talento humano</em>. Universidad Católica de Colombia.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/279552',
    },
    {
      referencia:
        'Castillo C., K. A., Córdova T., N. J. & Jaramillo Q., P. A. (2024). <em>Impacto de la responsabilidad laboral en la gestión del talento humano para incrementar la productividad</em>. Instituto Superior Tecnológico Sudamericano.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/279457',
    },
    {
      referencia:
        'Manzano Díaz, A. G. (2024). <em>Formación de competencias en la educación superior y el perfil profesional en el área de talento humano</em>. Revista Colombiana de Ciencias Administrativas.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/280129',
    },
    {
      referencia:
        'Rodríguez Jover, A. (2022). <em>Aplicaciones informáticas de administración de Recursos Humanos</em>. IC Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/226725',
    },
    {
      referencia:
        'Peña Lapeira, C. J. & Rey Romero, M. R. (2021). <em>Las competencias blandas en el emprendimiento</em>. Corporación Universitaria Minuto de Dios.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/231775',
    },
    {
      referencia:
        'De Arco Paternina, L. K., Santana Galindo, P. V. & Gómez, Y. V. (2022). <em>Habilidades blandas para el profesional del siglo XXI</em>. Corporación Universitaria Minuto de Dios.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/232097',
    },
    {
      referencia:
        'Gonzalez Molina, M. G. & Calixto Sandoval, N. P. (2024). <em>Desarrolla tus habilidades y potencia tu vida</em>. Editorial Politécnico Grancolombiano.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/279920',
    },
    {
      referencia:
        'Pérez, E. (2024). <em>Transformación digital en la gestión de recursos humanos</em>. Global Negotium.',
      link: 'http://portal.amelica.org/ameli/journal/793/7934890004/',
    },
    {
      referencia:
        'Universidad Cooperativa de Colombia. (2019). <em>Manual de perfiles de cargos por competencias en la empresa</em>.',
      link:
        'https://repository.ucc.edu.co/bitstream/20.500.12494/6600/3/2019_Manual_Perfiles_Cargos.pdf',
    },
    {
      referencia:
        'Universidad Nacional Autónoma de México. (2020). <em>El objetivo del análisis y la descripción de puestos de trabajo</em>.',
      link: 'https://biblio.juridicas.unam.mx/bjv/libros/14/6792/7.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Administración Pública. (2021). <em>Modelo de gestión de competencias</em>.',
      link:
        'https://inap.gob.do/wp-content/uploads/2021/05/ModeloGestionCompetenciaFinal.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de cargo',
      significado:
        'Proceso que identifica y describe las responsabilidades, tareas y requisitos de un puesto.',
    },
    {
      termino: 'Bienestar laboral',
      significado:
        'Estado de satisfacción física, emocional y social del trabajador dentro del entorno laboral.',
    },
    {
      termino: 'Clima organizacional',
      significado:
        'Percepción colectiva sobre el ambiente de trabajo y las relaciones laborales.',
    },
    {
      termino: 'Competencia',
      significado:
        'Conjunto de conocimientos, habilidades y actitudes necesarias para un desempeño eficaz.',
    },
    {
      termino: 'Comunicación interna',
      significado:
        'Flujo de información que se produce dentro de una organización entre sus miembros.',
    },
    {
      termino: 'Cultura organizacional',
      significado:
        'Conjunto de valores, creencias y normas que comparten los miembros de una organización.',
    },
    {
      termino: 'Desarrollo profesional',
      significado:
        'Proceso continuo que mejora las capacidades y conocimientos del trabajador.',
    },
    {
      termino: 'Evaluación del desempeño',
      significado:
        'Medición sistemática del rendimiento de un colaborador en relación con sus objetivos.',
    },
    {
      termino: 'Fidelización',
      significado:
        'Conjunto de acciones para mantener comprometido y satisfecho al talento humano.',
    },
    {
      termino: 'Formación continua',
      significado:
        'Acción educativa permanente que permite actualizar y mejorar competencias laborales.',
    },
    {
      termino: 'Gestión del talento',
      significado:
        'Conjunto de prácticas para atraer, desarrollar, retener y motivar al personal.',
    },
    {
      termino: 'Liderazgo',
      significado:
        'Capacidad de influir y guiar a un grupo hacia el logro de metas.',
    },
    {
      termino: 'Motivación',
      significado:
        'Impulso interno o externo que orienta y mantiene el comportamiento hacia un objetivo.',
    },
    {
      termino: 'Perfil de cargo',
      significado:
        'Documento que describe las funciones, responsabilidades y competencias requeridas para un puesto.',
    },
    {
      termino: 'Reclutamiento',
      significado:
        'Proceso mediante el cual se atraen candidatos para ocupar un puesto en la organización.',
    },
    {
      termino: 'Retención del talento',
      significado:
        'Estrategias que buscan conservar a los colaboradores valiosos dentro de la organización.',
    },
    {
      termino: 'Salario emocional',
      significado:
        'Beneficios no económicos que influyen en la satisfacción del trabajador.',
    },
    {
      termino: 'Selección de personal',
      significado:
        'Proceso de evaluación y elección del candidato más adecuado para un cargo.',
    },
    {
      termino: 'Trabajo en equipo',
      significado:
        'Colaboración entre personas con un objetivo común y funciones complementarias.',
    },
    {
      termino: 'Wellness organizacional',
      significado:
        'Estrategias de <em>wellness</em> enfocadas en mejorar el bienestar físico y emocional del personal.',
    },
  ],
}
