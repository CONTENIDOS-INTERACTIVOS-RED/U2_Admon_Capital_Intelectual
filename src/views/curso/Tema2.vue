<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Desarrollo y capacitación del talento humano'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") El desarrollo y la capacitación del talento humano, constituyen procesos estratégicos que permiten a las organizaciones adaptarse a entornos cambiantes y potenciar el crecimiento sostenido. En un mundo laboral dinámico, la capacitación continua ha dejado de ser una opción y se ha convertido en una necesidad fundamental (Córdoba et al., 2025). Este enfoque sustenta el propósito formativo de la unidad al fortalecer competencias técnicas y blandas de los colaboradores.
    
        .bg-color-2.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La capacitación sigue un ciclo organizado: primero se diagnostican las necesidades, luego se diseñan los contenidos, después se implementa el programa y, por último, se evalúan los resultados.
    
    p.mb-5 La capacitación continua también favorece la creación de una cultura de aprendizaje permanente, que promueve la adaptabilidad, el pensamiento crítico y la resolución de problemas. Según Córdoba et al. (2025), esto es vital para que las personas “se mantengan actualizadas debido a que las habilidades que antes consideraban relevantes, pueden no serlo hoy”. Así, el desarrollo profesional se convierte en un factor clave de sostenibilidad y competitividad.

    
    .row.justify-content-center.align-items-center
      .col-lg-10
        .bg-color-10
          .px-4.px-md-5
            .row.justify-content-center.align-items-center
              .col-lg-8.p-4(data-aos="fade-left").mb-3.mb-lg-0.order-lg-2
                p.mb-0 Desde la perspectiva de la educación empresarial, la formación no solo aporta conocimientos, sino que también refuerza habilidades blandas como la inteligencia emocional, la comunicación efectiva y la colaboración.

              .col-lg-4(data-aos="zoom-in").order-lg-1
                img.img-fluid(src='@/assets/curso/tema2/3.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bg-color-7
          .px-4.px-md-5
            .row.justify-content-center.align-items-center
              .col-lg-8.p-4(data-aos="fade-left").mb-3.mb-lg-0
                p.mb-0 Esto se evidencia especialmente cuando los estudiantes diseñan e implementan programas vinculados a proyectos reales, promoviendo su capacidad para planificar, evaluar resultados y generar impacto.

              .col-lg-4(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema2/4.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Este tema, por tanto, busca proporcionar herramientas y metodologías que permitan a los estudiantes diseñar, ejecutar y evaluar iniciativas de capacitación alineadas con la estrategia organizacional, los criterios éticos y los objetivos de sostenibilidad. El objetivo es que desarrollen profesionalmente un perfil integral, capaz de liderar procesos de formación que fortalezcan tanto el desempeño individual como el colectivo.  
    

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Identificación de necesidades de capacitación
    
    .bg-full-width.bg-color-8
      .px-4.px-md-5.pb-md-3

        p La identificación de necesidades de capacitación, es un proceso sistemático que permite detectar brechas de conocimiento, habilidades y actitudes en los colaboradores, con el fin de alinear su desarrollo al desempeño organizacional. Este ejercicio inicia con un análisis funcional, que descompone las actividades del cargo para visualizar claramente lo que el empleado debe saber y hacer en función de las exigencias actuales del puesto.
        p Para obtener información relevante, se combinan técnicas como encuestas, entrevistas con el superior directo y análisis de desempeño. 
        p El proceso se desarrolla en tres niveles. Según Vásquez Cotrina (2022):

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/6.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Organizacional
                p.mb-0.text-center El análisis organizacional identifica prioridades globales. 
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/7.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Por cargo
                p.mb-0.text-center El análisis por cargo evalúa requerimientos técnicos. 
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/8.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Por persona
                p.mb-0.text-center El individual se centra en brechas específicas del colaborador. 
    
    p.mb-5 Este diseño pedagógico permite que el estudiante comprenda la importancia de adaptar la formación a distintos niveles, desarrollando habilidades de análisis crítico, empatía y toma de decisiones informadas.

    .bg-color-5.mb-5.brd-2
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-10.p-4(data-aos="fade-left").order-lg-2
                p <b>Ejemplo práctico</b>. En un proyecto académico, el estudiante diseña una encuesta para un departamento de ventas. Tras aplicar el instrumento, detecta carencias en habilidades de negociación y gestión del cliente. Posteriormente, propone acciones diferenciadas, como talleres de role-play y mentorías, integrando en el proceso la comunicación asertiva y la responsabilidad colaborativa.
                p.mb-0 En conclusión, la identificación de necesidades de capacitación es un paso esencial en la gestión del talento humano, puesto que transforma datos en acciones formativas estratégicas. Este enfoque integral fomenta no solo el desarrollo técnico, sino también el fortalecimiento de habilidades blandas esenciales para la formación de profesionales competentes, éticos y comprometidos con el logro de los objetivos organizacionales.


              .col-lg-2(data-aos="zoom-in").mb-3.mb-lg-0.order-lg-1
                img.img-fluid(src='@/assets/curso/tema2/9.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Diseño de programas de formación y evaluación del aprendizaje

    p.mb-5 El diseño de programas de formación debe basarse en un enfoque estructurado e intencional que responda a las necesidades identificadas y promueva el desarrollo integral del talento humano. El modelo ADDIE, Análisis, Diseño, Desarrollo, Implementación y Evaluación, se ha popularizado por su claridad metodológica y su adaptabilidad a diferentes contextos empresariales, facilitando la planificación de contenidos, recursos y cronogramas, según las demandas del entorno (Modelo ADDIE, 2023). Este modelo sirve a los estudiantes como guía para construir formaciones coherentes, centradas en competencias técnicas y blandas, como comunicación, liderazgo y trabajo en equipo.

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/10.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Diseño")
            p En la etapa de diseño, se definen los objetivos de aprendizaje, qué debe saber y saber hacer, el participante, y se seleccionan estrategias y materiales adecuados que incluyan metodologías activas (role-play, simulaciones, estudios de caso). 
            p La Guía para la elaboración de programas de capacitación publicada por la Dirección Nacional de Capital Humano de Argentina, destaca que integrar experiencias reales y participación activa “fortalece el aprendizaje significativo” (Ministerio de Salud de Argentina, 2024, p. 7–8). De este modo, los estudiantes desarrollan la capacidad de diseñar sesiones que involucren reflexión, práctica y retroalimentación.

    
          .div(titulo="Evaluación")
            p La fase de evaluación es inseparable del diseño. Se recomienda emplear el modelo de cuatro niveles de Kirkpatrick: reacción, aprendizaje, comportamiento y resultados. La evaluación del y para el aprendizaje, fomenta en el participante una actitud crítica y autorreflexiva, al comparar el antes y el después de la formación (Troilo, 2021). Por ejemplo, en un proyecto académico, un taller sobre gestión de proyectos, concluiría con una autoevaluación, prueba breve y una tarea aplicada, promoviendo pensamiento analítico, metacognición y autonomía.
            p Además, la Guía de Evaluación de Impacto de la Formación de la OIT/Cinterfor señala que el establecimiento de indicadores cualitativos y cuantitativos, como satisfacción, mejora de indicadores y cambio conductual, permite medir la eficacia real de la capacitación (OIT/Cinterfor, 2010). Esto invita al estudiante a adoptar una mirada profesional, práctica y ética al valorar el retorno de la inversión educativa.

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/11.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 El diseño y la evaluación de programas formativos constituyen un ejercicio estratégico que integra conocimiento técnico, reflexión pedagógica y habilidades blandas. Este enfoque provee al estudiante de herramientas sólidas para diseñar formaciones significativas, evaluar su impacto y mejorar, continuamente, elementos esenciales para la gestión responsable del capital humano.
    
    h2(data-aos="fade-left") Etapas del diseño de programas de formación (Modelo ADDIE)
    p.mb-5 El modelo ADDIE es una metodología ampliamente utilizada en el diseño instruccional, especialmente en entornos de formación organizacional. Este modelo contempla cinco etapas que permiten estructurar programas de capacitación coherentes, adaptados a las necesidades de los participantes y orientados a resultados. A continuación, se presenta un esquema visual y descriptivo de cada una de las fases del modelo:

    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/12.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="43.5%" y="56.5%" numero="+")
                h5 Diseño
                p Se planifican los objetivos específicos, contenidos, metodologías, cronograma y recursos didácticos.	
    
              .bg-color-white.box-shadow.p-3(x="37.8%" y="38%" numero="+")
                h5 Desarrollo
                p Se elaboran los materiales, guías, recursos interactivos y herramientas de evaluación.	
    
              .bg-color-white.box-shadow.p-3(x="40.5%" y="20.5%" numero="+")
                h5 Evaluación
                p Se valoran los resultados obtenidos mediante indicadores de eficacia, impacto y retroalimentación.
    
              .bg-color-white.box-shadow.p-3(x="66.7%" y="22.8%" numero="+")
                h5 Análisis
                p Se identifican las necesidades de capacitación, los objetivos de aprendizaje y el perfil de los principiantes.
    
              .bg-color-white.box-shadow.p-3(x="78.5%" y="39.7%" numero="+")
                h5 Implementación
                p Se ejecuta el programa formativo, aplicando las estrategias y facilitando el proceso de enseñanza-aprendizaje.	
    
    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Gestión por competencias y desarrollo de carrera profesional     
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/13.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-6.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/14.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La gestión por competencias es un enfoque estratégico que integra el desarrollo de habilidades, actitudes y conocimientos claves, vinculándolos con los objetivos organizacionales. Este modelo impulsa la productividad, innovaciones, responsabilidad ética y colaboración en el trabajo (Ramírez-Torres, 2022). A través de esta práctica, se articula el talento humano con el capital intelectual, reforzando la competitividad sostenible de las empresas.
        p(data-aos="fade-left") En paralelo, el desarrollo de carrera profesional, adopta una visión de acompañamiento continuo al empleado. Ya no se concibe como progresión lineal, sino como un proceso dinámico donde la persona evalúa sus intereses, fortalezas y oportunidades en distintos contextos organizacionales (Redalyc, 2023). Con ello, el profesional aprende a identificar caminos, ajustarse a cambios y gestionar su propio crecimiento, fortaleciendo su capacidad de adaptación y planeación autónoma.
    
    .bg-color-1.p-4.mb-3.brd(data-aos="fade-left")
      p.mb-0 La combinación de ambos enfoques, fomenta una cultura organizacional orientada al aprendizaje permanente, donde se promueve la movilidad interna, mentorías y retroalimentación constructiva. 
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/15.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Por ejemplo, un estudiante de Administración de Empresas puede proponer un plan de desarrollo donde un analista junior partícipe en proyectos de innovación, reciba mentoría de un líder sénior y asista a talleres de comunicación efectiva y resolución de conflictos. Esto permite integrar competencias técnicas, habilidades interpersonales y visión estratégica.
    
        .bg-color-5.p-5(data-aos="fade-left")
          p.mb-0 Además, la implementación de sistemas por competencias, como diccionarios, evaluaciones 360° y planes de sucesión, favorece la transparencia, el reconocimiento del desempeño y el empoderamiento de las personas (INAP, 2021). El estudiante desarrollará así habilidades blandas como inteligencia emocional, liderazgo colaborativo y toma de decisiones éticas.
        p La gestión por competencias y el desarrollo profesional, conforman un eje clave para alinear el talento con la visión institucional. Este enfoque ofrece a los estudiantes herramientas para diseñar trayectorias dinámicas, potenciar habilidades personales y contribuir activamente a la sostenibilidad y ethos corporativo.
    
    h2(data-aos="fade-left") Matriz FODA – Gestión por competencias y desarrollo de carrera profesional
    p.mb-5 Este elemento permite analizar los factores internos y externos relacionados con la gestión por competencias y el desarrollo de carrera profesional, facilitando la toma de decisiones estratégicas y la identificación de oportunidades para fortalecer el talento humano.

    .titulo-figura.mb-4
      h5 Tabla 2.
      span Matriz DOFA
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-2.text-center Fortalezas (F)
            th.bg-color-2.text-center Oportunidades (O)
        tbody
          tr
            td
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Permite alinear el talento con los objetivos estratégicos
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Promueve el desarrollo de habilidades blandas y técnicas
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Mejora la motivación y retención del personal
            td
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Avances tecnológicos para la gestión de talento
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Mayor interés de los profesionales en planificar su carrera
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Entornos organizacionales más abiertos al aprendizaj
      table
        thead
          tr
            th.bg-color-2.text-center Debilidades (D)
            th.bg-color-2.text-center Amenazas (A)
        tbody
          tr
            td
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Dificultades en la implementación de sistemas por competencias
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Falta de formación de líderes como mentores
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Limitado seguimiento de planes de carrera
            td
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Cambios acelerados en los perfiles profesionales
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Resistencia al cambio por parte de algunos colaboradores
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Brechas entre competencias requeridas y desarrolladas



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.ecotec.edu.ec/content/uploads/investigacion/libros/gestion-talento-humano.pdf" target="_blank" rel="noopener noreferrer") Universidad ECOTEC. (2024). La gestión del talento humano y el desarrollo organizacional [PDF].  

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://es.wikipedia.org/wiki/Modelo_ADDIE" target="_blank" rel="noopener noreferrer") Modelo ADDIE. (2023). Modelo ADDIE. En Wikipedia, la enciclopedia libre.  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=BN_7LMXCDgM  " target="_blank" rel="noopener noreferrer") Universidad Continental (2021, 15 de mayo). Desarrollo de las personas. Capacitación y desarrollo de las personas y las organizaciones. [Vídeo] YouTube.           



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
