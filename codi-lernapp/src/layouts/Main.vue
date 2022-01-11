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
  </div>
</template>

<script>
// import AppHeader from "../components/AppHeader.vue";
import VButton from '../components/VButton.vue'



export default {
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
  z-index: 1000;
  position: absolute;
  bottom: 8%;
  left: 3%;
  i{
    color: #FF9900;
    font-size: 3rem;
  }
}


</style>