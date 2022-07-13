<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 7
      h1 El triángulo del servicio y la aplicación a mejorar las ventas en línea

    p(data-aos="fade-in").mb-5 El triángulo del servicio es un concepto que surgió a finales de la década de 1980 y publicado en 1992 por Karl Albrech para maximizar la experiencia con el cliente. El modelo busca ejecutar un servicio donde el eje principal es la estructura motivacional del cliente, como se presenta en la siguiente imagen.

    .row.justify-content-center(data-aos="zoom-in").mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 7.
          span Triángulo del servicio
        figure
          img(src="@/assets/curso/temas/t7/t7_01.svg", alt="alt").class
          figcaption Nota. Tomada de Albrech (1992).

    p.text-center.mb-5
      El siguiente video presenta una explicación de cada uno de los elementos del triángulo del servicio:

    .bg_img_02  
      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/OEjRfrQS9kA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          

      p(data-aos="fade-in").mb-5 Se piensa, con frecuencia, que los compradores en línea tienen aspectos muy distantes de los clientes tradicionales, sin embargo, prácticamente las teorías de mercadeo y ventas aplican para transacciones en línea con algunas adaptaciones.

      .crd.crd--purple(data-aos="zoom-in").p-4
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-5.mb-lg-0
            p Los clientes en internet toman la decisión de compra basados en la confianza, calidad del servicio a través de medios digitales #[span.hg--white (#[i chat], teléfono, facilidad de pago, seguridad),] y facilidad de navegabilidad.

            p Es importante que la empresa de ventas online tenga definido un protocolo o de contacto y atención que a través de una pantalla se pueda ofrecer.

            p.mb-0 Si bien, el uso de #[i chatbot] es un componente importante, actualmente el sobreuso de estos recursos ha provocado una reacción masiva negativa por parte de los usuarios, aunque es una buena ayuda, no es recomendable, al menos por ahora, abandonar la opción que el cliente pueda comunicarse con un ser humano.

          .col-lg-4.col-8
            figure
              img(src="@/assets/curso/temas/t7/t7_02.png", alt="alt")

    



</template>

<script>
export default {
  name: 'Tema7',
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
