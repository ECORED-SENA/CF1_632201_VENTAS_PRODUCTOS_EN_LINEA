<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 8
      h1 Momentos de verdad y cierre de la venta
    
    p(data-aos="fade-in").mb-5 Este es un contexto de servicio al cliente, una empresa organizada debería mirar el servicio al cliente como un producto y todo el cuidado que debe tenerse con él. Para empezar, es importante definir qué momentos y pasos son claves para que un cliente realice su compra.

    .row.justify-content-center(data-aos="zoom-in").mb-5
      .col-lg-10
        .crd.crd--purple.p-4
          p.mb-0 Para entender el cierre de la venta se recomienda ver el siguiente video donde se explica el momento de cierre de manera clara:
   
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador

    #t_8_1.titulo-segundo.color-acento-contenido(data-aos="fade-in")
      h2 8.1 Mapa de experiencia del cliente 
    
    p(data-aos="fade-in").mb-5 Los mapas de experiencia del cliente, conocidos técnicamente como #[span.hg--purple01 #[i customer journey map]], consisten básicamente en graficar los momentos de contacto del cliente con el proceso de compra y la experiencia o estado emocional en cada punto de interacción.

    .row.justify-content-center.mb-5
      .col-lg-10
        .crd.crd--grad_02B.p-4(data-aos="zoom-in").mb-4
          figure.mb-5
            img(src="@/assets/curso/temas/t8/t8_01.svg", alt="alt")

          p(data-aos="fade-in") Es importante aplicar esta técnica desde el lado del cliente y no del negocio, porque la perspectiva del cliente permite identificar qué momentos y qué cosas causan una decepción o una sorpresa agradable. Las personas toman sus decisiones basadas en las emociones y estas sensaciones causan un punto crucial de decisión, cuando pasan estos momentos se les denomina momentos de la verdad <i>(moment of truth)</i>.
      
        p(data-aos="fade-in").mb-4 Cada negocio debe identificar estos momentos para concentrarse en generar una buena emoción, porque es el concepto que cada persona se genera del negocio y lo lleva a tomar una decisión, ya sea la compra o generar recomendaciones.

       
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="zoom-in").mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/t8/t8_02.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La mejor manera de identificar estos momentos de la verdad, es preguntar y observar e interpretar los comportamientos de los clientes, porque a través de sus decisiones, maneras de expresarse, patrones, etc., dan a entender a qué momentos de la verdad son a los que se les debe prestar atención, no solo para saber dónde el cliente está más feliz o insatisfecho, sino para desarrollar planes y acciones para una mejora continua de estas experiencias.<br><br>Existen muchos modelos y plantillas que ayudarán a graficar esta experiencia e identificar estos momentos de verdad.

        p(data-aos="fade-in") Esta técnica, identifica en cada paso si el cliente experimenta una satisfacción o un descontento. Según la naturaleza del negocio se presentan estos contactos y los momentos de verdad pueden variar, en el caso de negocios físicos, un momento de verdad se podría dar mientras un cliente espera y un factor malestar o no es que haya suficientes sillas y sea un espacio agradable. En caso de ventas en línea existen otros elementos que los clientes experimentan. A continuación, se presenta un ejemplo de un mapa de experiencia del cliente.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1.
      span Características B2C & B2B 

    .tabla-a.custom_01(data-aos="zoom-in").mb-5
      table
        thead
          tr.text-white
            th(style="font-size:1.125em") FASES
            th(style="font-size:1.125em") Motivaci&oacute;n
            th(style="font-size:1.125em") B&uacute;squeda
            th(style="font-size:1.125em") Precio
            th(style="font-size:1.125em") Decisi&oacute;n
            th(style="font-size:1.125em") Genera compra
            th(style="font-size:1.125em") Entrega
            th(style="font-size:1.125em") Uso
            th(style="font-size:1.125em") Recompra
        tbody
          tr.cell--gray
            td #[strong Lo que hace el cliente]
            td Navega en redes sociales y ve anuncios, adem&aacute;s practica un deporte&mldr;
            td Usa buscador o tienda de su preferencia.
            td Compara precio y caracter&iacute;sticas.
            td Selecciona producto(s).
            td Lleva al carrito de compras productos.
            td Esperar de manera expectante.
            td Utiliza sus implementos en su deporte favorito.
            td Seguir recibiendo anuncios de otros accesorios.
          tr.cell--blue
            td #[strong Deseos]
            td Publicidad que atraiga su atenci&oacute;n.
            td Explorar implementos deportivos.
            td Encontrar los precios m&aacute;s econ&oacute;micos.
            td Tomar la mejor decisi&oacute;n.
            td Realizar pago.
            td Recibir el pedido a tiempo y bien.
            td Disfrutar de sus implementos comprados.
            td Encontrar accesorios deportivos.
          tr.cell--gray
            td #[strong Expectativa]
            td No ver elementos irrelevantes.
            td Muchas horas de b&uacute;squeda.
            td Habr&aacute; muchas opciones.
            td Habr&aacute; muchas opciones.
            td Contar con varios medios de pago.
            td Es posible que se demore un poco menos.
            td Poder sentirse m&aacute;s c&oacute;modo y tener mejor presencia.
            td Promociones y oportunidades de precio.
          tr.cell--blue
            td #[strong Realidad]
            td Aparecen anuncios indiscrimi-<br>nadamente.
            td Ha encontrado r&aacute;pido los implementos.
            td Los implementos deseados son caros.
            td Muchas marcas y opciones.
            td Solo se puede pagar con PayPal.
            td Lo recibe el d&iacute;a calculado.
            td Se siente c&oacute;modo y se ve bien.
            td Nada de promociones enfocadas a su deporte.
          tr.cell--gray
            td(rowspan='3') #[strong Emoci&oacute;n]
            td(colspan='8' rowspan='3')
              figure.p-4
                img(src="@/assets/curso/temas/t8/t8_03.png", alt="alt").
          tr
          tr
          tr.cell--blue
            td #[strong Plan de mejora]
            td Mejorar segmentaci&oacute;n.
            td Optimizar filtros.
            td Dise&ntilde;ar promos o paquetes.
            td Optimizar filtros.
            td Incluir pasarelas de pago y otras maneras.
            td  
            td  
            td Mejorar las configuraciones de anuncios en redes y buscadores.

    p.text-center.mb-5 Los aspectos para crear un mapa de experiencias del cliente, son:

    .bg_img_03(data-aos="fade-in")
      SlyderF.mb-5(columnas="col-lg-6")
        .crd.crd--paleYellow.fullHeight.p-4         
          img(src='@/assets/curso/temas/t8/t8_04.png' alt='').img195.m-auto.mb-4   
          p.mb-0 #[strong Reunir información del cliente:] desarrollar una investigación del cliente para conocer sus formas de compra, motivaciones e identificar los puntos de contacto, ayudan a reconocer los puntos débiles.

        .crd.crd--paleYellow.fullHeight.p-4         
          img(src='@/assets/curso/temas/t8/t8_05.png' alt='').img195.m-auto.mb-4   
          p.mb-0 #[strong Definir los objetivos del mapa: ] es importante que aplique la técnica no solo para tener la información, más importante que esto, la información y el conocimiento es para tomar decisiones. 

        .crd.crd--paleYellow.fullHeight.p-4         
          img(src='@/assets/curso/temas/t8/t8_06.png' alt='').img195.m-auto.mb-4   
          p.mb-0 #[strong Identificar puntos débiles: ] identificar los momentos donde las experiencias no son las deseadas y trabajar en ello. Hay momentos que es bueno tratar de llevar el cliente por otros caminos o caminos alternativos.  

        .crd.crd--paleYellow.fullHeight.p-4         
          img(src='@/assets/curso/temas/t8/t8_07.png' alt='').img195.m-auto.mb-4   
          p.mb-0 #[strong Reunir información del cliente:] desarrollar una investigación del cliente para conocer sus formas de compra, motivaciones e identificar los puntos de contacto, ayudan a reconocer los puntos débiles.  

        .crd.crd--paleYellow.fullHeight.p-4         
          img(src='@/assets/curso/temas/t8/t8_08.png' alt='').img195.m-auto.mb-4   
          p.mb-0 #[strong Compartir con el equipo de trabajo:] ocultar las debilidades para mostrarse fuerte es uno de los mayores errores corporativos. El mapa se debe compartir, validarlo con el equipo y emplear acciones de mejoramiento.

        .crd.crd--paleYellow.fullHeight.p-4         
          img(src='@/assets/curso/temas/t8/t8_09.png' alt='').img195.m-auto.mb-4   
          p.mb-0 #[strong Identificar fases del recorrido:] identificar con plenitud el recorrido que hace el cliente para ejecutar la compra en la tienda virtual.

      separador

    #t_8_2.titulo-segundo.color-acento-contenido(data-aos="fade-in")
      h2 8.2 Momento cero de la verdad (ZMOT)

    .bloque-texto-f.clr--mint.pt-4.px-5(data-aos="zoom-in").mb-5
      .bloque-texto-f__comillas
        i.fas.fa-quote-left
        i.fas.fa-quote-right
      p.text-regular.bloque-texto-f__texto Hoy en día, cuando los consumidores escuchan sobre un producto, su primera reacción es ‘Voy a buscarlo en Internet’, y emprenden una aventura de descubrimiento: sobre un producto, un servicio, un problema o una oportunidad. En estos tiempos, usted no persigue a su competencia. No persigue la tecnología, persigue a su consumidor.
      .bloque-texto-f__autor.mb-3
        h5.mb-0 - Lecinski, 2011
      .bloque-texto-f__avatar
        .bloque-texto-f__avatar__img
          img(src='@/assets/curso/temas/t8/t8_10.png', alt='')

    p.mb-5 Este concepto se distancia un poco de los momentos de verdad, si bien en el mapa se identifican muchos momentos de verdad, la teoría del momento cero de la verdad (ZMOT, por sus siglas en inglés), resume este mapa en cuatro instantes:

    .row.justify-content-center(data-aos="fade-in").mb-5
      .col-lg-3
        .crd.crd--yellow.p-4
           ul.fa-ul.mb-0
            li
              i.fa-li.fas.fa-circle.blt_02
              | Estímulo
      .col-lg-3
        .crd.crd--yellow.p-4
           ul.fa-ul.mb-0
            li
              i.fa-li.fas.fa-circle.blt_02
              | Momento cero de la verdad.
      .col-lg-3
        .crd.crd--yellow.p-4
           ul.fa-ul.mb-0
            li
              i.fa-li.fas.fa-circle.blt_02
              | Momento uno de la verdad.
      .col-lg-3
        .crd.crd--yellow.p-4
           ul.fa-ul.mb-0
            li
              i.fa-li.fas.fa-circle.blt_02
              | Momento dos de la verdad.

    p.mb-5 La siguiente imagen presenta cada uno de esos instantes:

    .row.justify-content-center(data-aos="zoom-in").mb-5
      .col-lg-10
        figure
          img(src="@/assets/curso/temas/t8/t8_11.svg", alt="alt")
          figcaption Nota.Tomada de Lecinski (2011).

    p Actualmente, aunque la mayoría de consumidores no compren en línea, sí averiguan antes a través de internet sobre el bien o servicio a comprar.

    p.mb-5 Por lo general, hay un estímulo que proviene de los deseos mismos del cliente, de sus aficiones, su profesión y observa los anuncios que son destinados para él. En la actualidad, se cuenta con recursos que antes del internet no había, y es la información amplia de estos productos. 

    .bg_gray(data-aos="zoom-in")
      .row.justify-content-center.align-items-center.py-3       
        .col-lg-4.col-8.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/temas/t8/t8_12.png", alt="alt")
        .col-lg-8
          p El ZMOT es una acción de precompra y se trata de la averiguación de un producto o servicio, principalmente en buscadores como Google, YouTube, entre otros. Es fundamental tener una gestión adecuada de los canales digitales de la plataforma de comercio, lo más recomendable es tener su propio sitio <i>web</i> para que los usuarios que buscan ampliar información encuentren con facilidad en el sitio electrónico del negocio.

          p Es importante tener buen contenido, ordenado, aplicar bien el SEO, el SEM, actualizar permanentemente, generar publicaciones, segmentar por zonas, etc.

          p Las puntuaciones y los comentarios de clientes, son elementos que se deben tramitar bien para que poco a poco la tienda web tenga más relevancia para Google.


    

    

    



</template>

<script>
export default {
  name: 'Tema8',
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
