<template>
  <main-layout>
    <Carousal class="carousal" v-slot="{currentSlide}">
      <Slide>
        <div v-show="currentSlide === 1" class="slide-info speech-bubble">
          <p>Hi mein Name ist Codi und heute gehen wir die erste Lektion "Internet-Browser" durch</p>
          <div class="left-point"></div>
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
    <img class="codi" src="./../assets/img/characters/codi/999.png" alt="Codi">
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
      top: 25%;
      left: 25%;
      width: 50%;
      max-height: 100%;
      height: 50%;
      background-color: #fff;
      border-radius: 2rem;

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
    .speech-bubble{
      display: table;
      padding: 0 3rem;
      p{
        display: table-cell;
        vertical-align: middle;
      }
    }
  }
  .codi {
    display: block;
    position: absolute;
    width: 20rem;
    height: auto;
    left: 3rem;
    bottom: 0;
  }
  .left-point{
    width: 0;
    height: 0;
    border-left: 2vh solid transparent;
    border-right: 2vh solid transparent;
    border-top: 10vh solid #fff;
    position: absolute;
    top: 88%;
    left: 20%;
    transform: rotate(60deg);
  }
</style>