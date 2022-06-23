<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 3
      h1 Introducción al <i>marketing</i>

    p El <i>marketing</i> se define como el conjunto de métodos y estudios que busca la comercialización de productos y servicios, es un área que en las últimas décadas ha tomado gran fuerza a través de medios digitales. El siguiente video presenta una explicación del concepto:

    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/lpS6sY69J1E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      

    p.text-center.mb-4 Luego de entender el mercado, se hará la presentación general del concepto de #[i marketing].

    .bg_img_02

      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      separador

      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-in")
        h2 3.1 Ecosistemas de <i>marketing</i> digital

      p.mb-4 Un ecosistema, es el conjunto de elementos que interactúan entre sí teniendo un área o unos límites definidos, en el caso del negocio, la punta de flecha son las ventas, pero para que estas se den efectivamente, debe definirse un plan de mercadeo. En un ecosistema de #[i marketing] intervienen:

      .row.justify-content-center(data-aos="zoom-in").mb-4
        .col-lg-10
          .slyderB_bg_01.px-5.py-3.mb-4
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative 
                  .number(data-number="01") 
                    h4.ps-4 <i>Branding</i>  
                    p.ps-4.mb-0 Se refiere a la marca y su proyección como sello comercial. Es importante que la definición de la marca y todo lo que proyecta como colores, lenguaje, gráficos, respaldo, estética, etc., tenga una identidad, una empatía y un lenguaje coherente con lo que se desea proyectar y vender.                    
                .col-6.col-lg-4
                  figure
                    img(src='@/assets/curso/temas/t3/t3_01.svg')

              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative 
                  .number(data-number="02") 
                    h4.ps-4 Producto  
                    p.ps-4.mb-0 Es lo que la empresa desea que se consuma o compre; este debe venir acompañado de otros elementos como el #[i branding], precio y atributos que serán aprovechados por el creativo de #[i marketing] para ofrecer el elemento de consumo a través de emociones principalmente.                    
                .col-6.col-lg-4
                  figure
                    img(src='@/assets/curso/temas/t3/t3_02.svg')

              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative 
                  .number(data-number="03") 
                    h4.ps-4 Plataformas de comercio  
                    p.ps-4.mb-0 Es el lugar donde se exhibe el producto. Aquí se acceden a los catálogos y se realizan las transacciones, este es muy importante, porque allí convergen la marca, los productos, el lenguaje, la estética, la estrategia y la sustentabilidad del negocio. El fin último de toda estrategia de #[i marketing] es que los usuarios ingresen a la plataforma de comercio electrónico, ya sea propia a través de una tienda online o compartida con plataformas #[i marketplace] de terceros.                 
                .col-6.col-lg-4
                  figure
                    img(src='@/assets/curso/temas/t3/t3_03.svg')

              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative 
                  .number(data-number="04") 
                    h4.ps-4 Contenidos 
                    p.ps-4.mb-0 A partir de las estrategias y enfoque comercial, se deben generar contenidos de valor que produzcan conexión con el público y enganche a los clientes interesados.             
                .col-6.col-lg-4
                  figure
                    img(src='@/assets/curso/temas/t3/t3_04.svg')

              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative 
                  .number(data-number="05") 
                    h4.ps-4 Enversión publicitaria (SEM) 
                    p.ps-4.mb-0 Tener presupuesto para impulsar el negocio y las estrategias de manera más rápida y efectiva en las plataformas más populares como Google ADS y Meta a través de sus herramientas Facebook, Instagram, WhatsApp, Metaportal, entre otras.
             
                .col-6.col-lg-4
                  figure
                    img(src='@/assets/curso/temas/t3/t3_05.svg')

              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative 
                  .number(data-number="06") 
                    h4.ps-4 Posicionamiento orgánico (SEO)
                    p.ps-4.mb-0 Es importante mantener las mejores prácticas digitales, entre ellas, gestionar adecuadamente los metadatos; pues con una buena descripción de cada elemento digital, los robots de buscadores indexarán mejor las plataformas y contenidos a sus bases de datos inteligentes, de esta manera con el tiempo y de manera orgánica, el posicionamiento en buscadores será más efectivo y mejorará el alcance de clientes que encontrarán el negocio solo con digitar palabras clave.
             
                .col-6.col-lg-4
                  figure
                    img(src='@/assets/curso/temas/t3/t3_06.svg')

              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative 
                  .number(data-number="07") 
                    h4.ps-4 Redes sociales
                    p.ps-4.mb-0 Aumentar la presencia y campañas de #[i marketing] en entornos sociales incrementa el alcance de público segmentado y crea comunidad alrededor de intereses particulares; esto permite posicionar la marca y establecer una comunicación que llegue a muchas personas, así mismo, se aumentan los canales de venta. También es importante saber manejar las crisis y críticas que puedan surgir.
             
                .col-6.col-lg-4
                  figure
                    img(src='@/assets/curso/temas/t3/t3_07.svg')

              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative 
                  .number(data-number="08") 
                    h4.ps-4 Analítica
                    p.ps-4.mb-0 Lo que no se mide no se controla y el negocio no crece. Si bien podría ser el aspecto más dispendioso y que para proyectos pequeños o que inician no se le prestan atención (quizá por ser dispendioso y ocasionalmente tedioso por tratarse de cifras, números y mediciones) es el elemento que indica si las cosas van bien o no y qué tanto. Es la base para tomar decisiones y enviar reportes a otras áreas o directivos del negocio.
             
                .col-6.col-lg-4
                  figure
                    img(src='@/assets/curso/temas/t3/t3_08.svg')

              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative 
                  .number(data-number="09") 
                    h4.ps-4 Tendencias
                    p.ps-4.mb-0 La vigilancia tecnológica y estar informado de nuevas tendencias de compras y la dirección que van tomando algunos elementos del mercado, se vuelven indispensables a la hora de pensar en los negocios a largo plazo. 
             
                .col-6.col-lg-4
                  figure
                    img(src='@/assets/curso/temas/t3/t3_09.svg')

          p Para finalizar este concepto básico de #[span.hg--purple01 #[i marketing]], es importante señalar que, por lo general, hay una ruta que el cliente recorre y que el #[i marketing] es el responsable de guiar, esta es la ruta del comprador.

    .cajon.cjn--purpura.p-4(data-aos="zoom-in").mb-5
      p.mb-0 El alcance se muestra como una pirámide inversa, en el sentido que típicamente se inicia con campañas abiertas y masivas, que si bien segmentan un público por características específicas, se trata simplemente de jugar con las posibilidades de optimizar las inversiones procurando mejorar las posibilidades.

    .row.justify-content-center(data-aos="zoom-in").mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Ruta y alcance de las fases del #[i marketing]

        figure.mb-4
          img(src="@/assets/curso/temas/t3/t3_10.svg", alt="alt")

        p A medida que avanza la tecnología, las nuevas tendencias y posibilidades surgen, muchas de ellas no imaginadas en años anteriores pero que actualmente son una realidad.

        p.mb-4 Si bien al momento de la creación de este contenido, el mundo del metaverso viene dando sus primeros pasos, las apuestas de las grandes corporaciones prometen que será una tendencia de consumo donde habrá miles de millones de dólares en transacciones.

        .bloque-texto-c.clr--mint.p-4(data-aos="zoom-in").mb-4
          i.fas.fa-quote-right
          h5.mb-2 Con el aumento del comercio digital, el metaverso permitirá a compradores y vendedores conectarse de nuevas formas. La experiencia de compra en la tienda será más inmersiva dando a los clientes la opción de comprar productos físicos y digitales con una mayor interactividad.
          span - Meta, 2021.

        p.mb-4 El metaverso potenciará las experiencias del mundo físico, con la realidad aumentada el metaverso y el mundo físico, por ejemplo, podrás ver información detallada con el teléfono móvil de un negocio o lugar solo con llegar al punto físico, o poder probarse unas gafas, peinado, maquillaje y ropa con la imagen y medidas de tu cuerpo en el metaverso.

        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/t3/t3_11.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El metaverso es una creación colectiva y responsable. El metaverso no será la creación individual de ninguna empresa. Será un esfuerzo global en el que participarán empresas, creadores, legisladores, emprendedores y más. <br> (Meta, 2021).

    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-in")
      h2 3.2 Conceptos en estudio de mercado

    p Si bien se encuentran varias definiciones, se puede establecer que el estudio de mercado son las acciones sistemáticas y técnicas que desarrolla buscando obtener información real y profunda sobre el #[i target] o público objetivo, así como la viabilidad y rentabilidad y busca aumentar la comercialización efectiva y eficiente de los productos.

    .row.justify-content-center(data-aos="zoom-in").mb-5
      .col-lg-10
        .crd.crd--mint.p-3
          p.text-center.mb-0 En el siguiente video se podrán observar los detalles.

    figure(data-aos="zoom-in").mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/pR33mqevijU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)        

    .row.mb-4(data-aos="fade-in").mb-4
      .col-auto
        figure
          img(src="@/assets/curso/recursos/square_08.svg", alt="alt").img40
      .col-auto
        .cstm_title
          h3 Público objetivo

    p(data-aos="fade-in") También denominado #[i target group], se busca determinar con precisión quiénes serán los compradores y en qué grupo poblacional se encuentran, es decir, si los productos son consumidos por hombre o por mujeres, ejecutivos, amas de casa, personas con vehículos, qué clase de actividades deportivas realizan, así como el nivel socioeconómico, si es alto, medio o bajo, así como la determinación geográfica, entre otras variables.

    p(data-aos="fade-in").mb-5 El perfil de este público objetivo se determina por:

    .bg_img_04(data-aos="zoom-in").mb-5
      .row.justify-content-center.align-items-center.py-5
        .col-lg-4.col-8.mb-5.mb-lg-0
          figure
            img(src="@/assets/curso/temas/t3/t3_12.png", alt="alt")
        .col-lg-8
          ul.fa-ul.mb-2
            li
              i.fa-li.fas.fa-circle.blt_01
              | #[span.txt--purple Número]
          p.mb-3 Qué tan masivo es el público objetivo, esto depende si las pretensiones del mercado serán local, regional, nacional o internacional.

          ul.fa-ul.mb-2
            li
              i.fa-li.fas.fa-circle.blt_01
              | #[span.txt--purple Grado de satisfacción]
          p.mb-4 A partir de un muestreo, determinar si el producto a vender tiene o no aceptación y/o uso al público objetivo.

          ul.fa-ul.mb-2
            li
              i.fa-li.fas.fa-circle.blt_01
              | #[span.txt--purple Percepción del precio]
          p.mb-4 En el estudio, se deben determinar si las personas estarían dispuestas a pagar el costo por el producto:
          .row.justify-content-center
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/recursos/square_10.svg", alt="alt").img30
            .col-lg
              p.mb-1 - Cuántos estarían dispuestos a pagar un poco más del precio sugerido.
              p.mb-1 - Cuántos estarían dispuestos a cambiar al suministrador actual del producto.
              p.mb-1 - Conocer todas las variables y combinaciones que consideren al respecto.

    .row.justify-content-center(data-aos="zoom-in").mb-5
      .col-lg-10
        .crd.crd--mint.p-3
          p.text-center.mb-0 En el siguiente video se identifican los tipos de mercadeo y la población objeto:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/8talMCmrZ5Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)       

    .row.mb-4(data-aos="fade-in").mb-4
      .col-auto
        figure
          img(src="@/assets/curso/recursos/square_08.svg", alt="alt").img40
      .col-auto
        .cstm_title
          h3 Segmentación de mercado

    p La segmentación del mercado trata de concretar las características específicas que posee el #[i target group] (CEEI Ciudad Real, 2005).

    p Para esta segmentación se emplean las siguientes variables (esto no significa que sean las únicas, pero sí las más comunes y principales):

    SlyderF.mb-4(columnas="col-lg-4")(data-aos="fade-in")
      .crd.crd--purple.crd--rad.fullHeight.p-4         
        .content                 
          img(src='@/assets/curso/temas/t3/t3_13.svg' alt='').img90.m-auto.mb-4 
          h5.text-center Sexo  
      .crd.crd--yellow.crd--rad.fullHeight.p-4   
        .content       
          img(src='@/assets/curso/temas/t3/t3_14.svg' alt='').img90.m-auto.mb-4 
          h5.text-center Rango de edad  
      .crd.crd--mint.crd--rad.fullHeight.p-4  
        .content        
          img(src='@/assets/curso/temas/t3/t3_15.svg' alt='').img90.m-auto.mb-4 
          h5.mb-0.text-center Situación sentimental
          p.text-center (Casados, pareja, solteros) 
      .crd.crd--purple.crd--rad.fullHeight.p-4        
        .content  
          img(src='@/assets/curso/temas/t3/t3_16.svg' alt='').img90.m-auto.mb-4 
          h5.text-center Nivel económico  
      .crd.crd--yellow.crd--rad.fullHeight.p-4  
        .content        
          img(src='@/assets/curso/temas/t3/t3_17.svg' alt='').img90.m-auto.mb-4 
          h5.text-center Nivel académico 
      .crd.crd--mint.crd--rad.fullHeight.p-4  
        .content        
          img(src='@/assets/curso/temas/t3/t3_18.svg' alt='').img90.m-auto.mb-4 
          h5.mb-0.text-center Hábitat
          p.text-center (Rural, urbano) 
      .crd.crd--purple.crd--rad.fullHeight.p-4  
        .content        
          img(src='@/assets/curso/temas/t3/t3_19.svg' alt='').img90.m-auto.mb-4 
          h5.text-center Ocupación
      .crd.crd--yellow.crd--rad.fullHeight.p-4    
        .content      
          img(src='@/assets/curso/temas/t3/t3_20.svg' alt='').img90.m-auto.mb-4 
          h5.mb-0.text-center Aficiones
          p.text-center (deportivas, artísticas, académicas) 
      .crd.crd--mint.crd--rad.fullHeight.p-4         
        .content 
          img(src='@/assets/curso/temas/t3/t3_21.svg' alt='').img90.m-auto.mb-4 
          h5.text-center Hábitos de compra

    p.mb-4 A medida que pasa el tiempo, las herramientas tecnológicas tendrán la capacidad de aumentar la especificidad de la segmentación, tales como hábitos de viaje, marcas que usa, productos que más compra, ideologías políticas, religiosas y sociales.

    .row.justify-content-center(data-aos="zoom-in").mb-4
      .col-auto
        .crd.crd--purple.p-4
          p.mb-0 Para reforzar los conceptos básicos, se invita a observar el siguiente video:
    
    .bg_img_05
      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/wFqLQDbb03g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)          

      .row.mb-4(data-aos="fade-in").mb-4
        .col-auto
          figure
            img(src="@/assets/curso/recursos/square_08.svg", alt="alt").img40
        .col-auto
          .cstm_title
            h3 Desarrollar un estudio de mercado

      p(data-aos="fade-in") Si bien existen diversas metodologías de estudio de mercado, es importante que al momento de desarrollar este estudio, se seleccione la que se considere más adecuada según el producto y contexto del negocio. 
      p(data-aos="fade-in").mb-4 Para realizar un análisis detallado de los tipos de investigación se le invita a leer el documento #[span.hg--purple01 Tipos de investigación de mercado y sus principales características], el cual se encuentra en el material complementario.

      .row.justify-content-center(data-aos="zoom-in").mb-5
        .col-lg-6
          .crd.crd--mint.p-3
            p.text-center.mb-0 Un estudio de mercado consta de los siguientes pasos:

    .titulo-sexto.color-acento-contenido
      h5 Figura 2.
      span Esquema de elaboración del estudio de mercado

    figure(data-aos="zoom-in")
      img(src="@/assets/curso/temas/t3/t3_22.png", alt="alt")
      figcaption Nota. Adaptada de CEEI Ciudad Real (2005).   






</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
