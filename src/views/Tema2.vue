<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 <i>Insight</i> del consumidor

    p Este es un término llevado de la Psicología al mundo de los negocios; es un término con dos raíces, <i>in</i> (adentro) <i>sight</i> (visión), por lo que se podría deducir visión interna, en este caso la de los consumidores o clientes.

    p En otras palabras, es el resultado de un análisis teniendo en cuenta toda la información disponible de los clientes. Este análisis, por lo general, llega a concluir en una verdad de los consumidores.

    .crd.crd--grad_04.p-4(data-aos="zoom-in").mb-5
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/temas/t2/t2_01.png", alt="alt")
        .col-lg-8
          p Es un término fácil de explicar, pero difícil de realizar. Se trata básicamente de descubrir en el consumidor una necesidad real no resuelta y es donde el negocio podría entrar a satisfacer esta realidad interna del cliente.

          p Las estrategias de <i>marketing</i> y comunicación digital surgen de manera eficaz a partir de los <i>insight</i>, pues se trata de una verdad interna de los consumidores. Llegar a esa verdad y conectarla con los productos o servicios es el objetivo principal para que las ventas sean efectivas.

          p.mb-0 La innovación también puede brotar de estos descubrimientos internos, una de las ideas más importantes en este aspecto no es solo vender, es ir más allá y conectar el público con propuestas de valor y generar relaciones comerciales efectivas y duraderas.

    p.mb-5 Es así, que usar este concepto en el área comercial, es un insumo para usar en varias áreas como la comunicación, la innovación, el <i>marketing</i> y desarrollo de marca <i>(branding)</i>.

    .row(data-aos="fade-in").mb-4
      .col-auto
        figure
          img(src="@/assets/curso/recursos/square_08.svg", alt="alt").img40
      .col-auto
        .cstm_title
          h3 Aplicación y aprovechamiento de la información del consumidor

    p(data-aos="fade-in").mb-5 Es importante anotar que este trabajo investigativo es desarrollado por profesionales en el tema, por lo general, psicólogos de empresas, <i>coach</i>, especialistas de la innovación o áreas especializadas.

    .bg_img_02
      .row.justify-content-center(data-aos="zoom-in").mb-4
        .col-lg-10
          .bloque-texto-g.custom_01.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/t2/t2_02.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Este término se relaciona estrechamente con la psicología del consumidor, por lo que tiene que ver más con lo humano que con los productos o servicios; con frecuencia, las empresas tienden a enfocarse en los productos y se dedican a vender, pero las grandes marcas enfatizan en lo humano y a partir de las necesidades o deseos verdaderos de los consumidores se centra toda su campaña, comunicación y <i>marketing</i>.<br><br>Volviendo al inicio, el <i>insight</i> es la “visión de adentro” de las personas, así que una pregunta interesante es saber qué tienen adentro los clientes o público; es sabido que todos tenemos adentro emociones, conflictos, temores, deseos, imperfecciones, creencias, pasiones, falencias, etc. 

      p.text-center.mb-4 Para el desarrollo del <i>insight</i> se podría proceder respondiendo las siguientes preguntas:

      .crd.crd--white(data-aos="zoom-in").mb-5
        ul.fa-ul.mb-0
          li
            i.fa-li.fas.fa-circle.blt_01
            | ¿Qué emociones se asocian con el producto que se vende?
          li
            i.fa-li.fas.fa-circle.blt_01
            | ¿Qué conceptos creativos, estéticos e innovadores podrían surgir desde el producto para satisfacer esas condiciones internas humanas?
          li
            i.fa-li.fas.fa-circle.blt_01
            | Si el producto a vender fuera una persona, ¿Qué características tendría? (definir atributos de la marca o producto).
          li
            i.fa-li.fas.fa-circle.blt_01
            | A partir de estos conceptos creativos, ¿Cómo integrar campañas de <i>marketing</i> y lenguaje de la marca o producto?
          li.mb-0
            i.fa-li.fas.fa-circle.blt_01
            | Si surgen varios <i>insight</i>, ¿Cuál (cuáles) es (son) el (los) más ganador (es) o los mejores para implementar en la marca y campañas de <i>marketing?</i>

      .row.justify-content-center(data-aos="zoom-in").mb-5
        .col-auto
          .crd.crd--purple.p-4
            p.mb-0 El siguiente video presenta el diagnóstico de necesidades del cliente:

      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      p El éxito del <i>insight</i> es que se logre la conexión del público con el producto o marca, es decir, si le llega una publicidad o anuncio al cliente, de inmediato se produce un momento donde el cliente, por alguna razón se identifique con la marca o producto. 

    

</template>

<script>
export default {
  name: 'Tema2',
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
