<template>
  <main-layout>
    <Carousal class="carousal" v-slot="{currentSlide}">
      <Slide v-for="(slide, index) in carousalSlides" :key="index">
        <div v-show="currentSlide === index + 1" class="slide-info">
          <img alt="Slide" :src="require(`../assets/img/${slide}.png`)">
        </div>
      </Slide>
    </Carousal>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'

  import Carousal from '../components/Carousal.vue'
  import Slide from '../components/Slide.vue'


  export default {
    components: {
      MainLayout,
      Carousal,
      Slide
    },
    setup() {
      const carousalSlides = ['img', 'Gif', 'video']

      return{ carousalSlides };
    }
  }
</script>

<style lang="scss" scoped>
  .carousal{
    position: relative;
    max-height: 100%;
    height: 100%;
    .slide-info{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      max-height: 100%;
      height: 100%;

      img{
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 70%;
      }
    }
  }
</style>
