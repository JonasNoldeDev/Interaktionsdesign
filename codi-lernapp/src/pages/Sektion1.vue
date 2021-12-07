<template>
  <main-layout>
      <header>
        <v-button href="/lernsektionen"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left" class="svg-inline--fa fa-angle-left fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg></v-button>
      </header>
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
          <div class="left-point"></div>
        </div>
      </Slide>
      <Slide>
        <div v-show="currentSlide === 3" class="slide-info">
          <img :src="require(`../assets/img/Gif.png`)">
          <p>slider 3</p>
          <div class="left-point"></div>
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
  import VButton from '../components/VButton.vue'


  export default {
    components: {
      MainLayout,
      Carousal,
      Slide,
      VButton
    },
    setup() {
      const carousalSlides = ['img', 'Gif', 'video']

      return{ carousalSlides };
    }
  }
</script>

<style lang="scss" scoped>
  header {
    display: flex;
    align-items: center;
    margin: 1rem 0 2rem;

    svg {
      display: block;
      width: 1em;
      height: 1em;
    }
  }
  .carousal{
    position: relative;
    max-height: 100%;
    height: 88%;
    .slide-info{
      position: absolute;
      top: 5%;
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