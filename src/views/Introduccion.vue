<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info.text-white
      h1 Introducción

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.cjn--mint.p-4(data-aos="zoom-in")
          p.mb-0 Bienvenido al componente formativo #[strong Atención al cliente y comunicación comercial], en el cual se trabajarán contenidos indispensables para el desarrollo de actividades de comercio electrónico. El siguiente video presenta de forma general la temática a estudiar. 

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

             

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
