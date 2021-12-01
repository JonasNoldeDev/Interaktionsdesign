<template>
  <main-layout>
    <Carousal class="carousal" v-slot="{currentSlide}">
      <Slide>
        <div v-show="currentSlide === 1" class="slide-info">
          <img :src="require(`../assets/img/img.png`)">
          <p>slider 1</p>
        </div>
      </Slide>
      <Slide>
        <div v-show="currentSlide === 2" class="slide-info">
          <img :src="require(`../assets/img/video.png`)">
          <p>slider 2</p>
        </div>
      </Slide>
      <Slide>
        <div v-show="currentSlide === 3" class="slide-info">
          <img :src="require(`../assets/img/Gif.png`)">
          <p>slider 3</p>
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
    height: 90%;
    .slide-info{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      max-height: 100%;
      height: 100%;
      background-color: #fff;

      img{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 70%;
        margin-top: 50px;
      }

      p{
        text-align: center;
      }
    }
  }
</style>