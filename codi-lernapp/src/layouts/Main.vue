<template>
  <div class="page-wrapper">
    <!-- <app-header></app-header> -->
    <main class="main" role="main">
        <v-button class="home-button" href="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
          </svg>
        </v-button>
        <div id="soundButtons">
          <i @click="stopMusic" v-show="playMusic" class="fas fa-volume-up up orange"></i>
          <i @click="startMusic" v-show="!playMusic" class="fas fa-volume-mute mute"></i>
        </div>
      <slot></slot>
    </main>
    <div class="overlay" v-show="overlay === true" :class="color" >
      <div class="grid-item"></div>
      <div class="grid-item">
        <div class="headers">
          <h1>{{ firstheader }}</h1>
          <h2>{{ secondheader }}</h2>
        </div>
      </div>
      <div class="grid-item">
        <img v-show="picFile === 'Codi-Normal'" class="codi" src='./../assets/img/characters/codi/999.png' alt="Codi">
        <img v-show="picFile === 'Codi-Erklaerend'" class="codi" src='./../assets/img/characters/codi/Papagai_erklaerend_gross.png' alt="Codi">
        <img v-show="picFile === 'Codi-Richtig'" class="codi" src='./../assets/img/characters/codi/Codi_richtig.png' alt="Codi">
      </div>
    </div>
  </div>
</template>

<script>
// import AppHeader from "../components/AppHeader.vue";
import VButton from '../components/VButton.vue'



export default {
  props: {
    color: {
      type: String,
      default: "orange"
    },
    overlay: {
      type: Boolean,
      default: false
    },
    firstheader: {
      type: String
    },
    secondheader: {
      type: String
    },
    picFile: {
      type: String
    }
  },
  mounted:() => {
    console.log(this)
  },
  computed: {
    playMusic () {
      return this.$store.state.playMusic
    }
  },
  components: {
    // AppHeader,
    VButton
  },
  methods: {
    startMusic() {
      this.$store.commit('startMusic');
    },
    stopMusic() {
      this.$store.commit('stopMusic');
    }
  },
};
</script>

<style lang="scss" scoped>
.page-wrapper {
  height: 100%;
}
.main {
  padding: 1rem;
  height: 100%;
}
a {
  align-items: center;
  margin: 1rem 0 2rem;
  font-size: 1.3rem;

  svg {
    display: block;
    width: 1.5em;
    height: 1.5em;
  }
}
.volume{
  float: right;
  color: #FF9900;
}
#soundButtons{
  z-index: 100;
  position: absolute;
  bottom: 8%;
  left: 3%;
  i{
    color: #FF9900;
    font-size: 3rem;
  }
}

.overlay{
  grid-template-columns: auto auto auto;
  display: grid;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 120%;
  z-index: 1000;
  color: #fff;
  animation-name: overlay-anim;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  animation-delay: 1.2s;

  .grid-item{
    display: table;

    .headers{
      margin-top: 14rem;
      z-index: 10;
      position: relative;

      h1{
        font-size: 6rem;
        line-height: 4rem;
        animation-name: overlay-anim;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
        animation-delay: 1s;
      }

      h2{
        font-size: 3.5rem;
        animation-name: overlay-anim;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
        animation-delay: 0.95s;
      }
    }
    
    .codi {
      position: absolute;
      width: 30rem;
      height: auto;
      right: 20rem;
      bottom: 0;
      animation-name: overlay-anim;
      animation-duration: 1s;
      animation-fill-mode: forwards;
      animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
      animation-delay: 0.9s;
    }
  }
}

.orange{
  background: #FFAA00;
}
.red{
  background: #FF5500;
}
.green{
  background: #B3D334;
}
.blue{
  background: #18A0FB;
}

@keyframes overlay-anim{
  0% {
      transform: translate(0, 0);
  }
  50% {
      transform: translate(0, 0);
  }
  100% {
      transform: translate(100vw, 0);
      display: none;
  }
}


</style>