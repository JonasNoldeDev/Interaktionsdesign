<template>
  <div class="page-wrapper">
    <main class="main" :class="isSlider" role="main">
      <v-button v-on:click="playClick" class="home-button" href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-house-fill"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
          />
          <path
            fill-rule="evenodd"
            d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
          />
        </svg>
      </v-button>
      <div id="soundButtons">
        <i
          @click="stopMusic"
          v-show="playMusic"
          class="fas fa-volume-up up"
        ></i>
        <i
          @click="startMusic"
          v-show="!playMusic"
          class="fas fa-volume-mute mute"
        ></i>
      </div>
      <slot></slot>
    </main>
    <div class="overlay" v-show="overlay === true" :class="color">
      <div class="grid-item"></div>
      <div class="grid-item">
        <div class="headers">
          <h1>{{ firstheader }}</h1>
          <h2>{{ secondheader }}</h2>
        </div>
      </div>
      <div class="grid-item">
        <img
          v-show="picFile === 'Codi-Normal'"
          class="codi"
          src="./../assets/img/characters/codi/999.png"
          alt="Codi"
        />
        <img
          v-show="picFile === 'Codi-Erklaerend'"
          class="codi"
          src="./../assets/img/characters/codi/Papagai_erklaerend_gross.png"
          alt="Codi"
        />
        <img
          v-show="picFile === 'Codi-Richtig'"
          class="codi"
          src="./../assets/img/characters/codi/Codi_richtig.png"
          alt="Codi"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VButton from "../components/VButton.vue";


export default {
  props: {
    color: {
      type: String,
      default: "orange",
    },
    overlay: {
      type: Boolean,
      default: false,
    },
    firstheader: {
      type: String,
    },
    secondheader: {
      type: String,
    },
    picFile: {
      type: String,
    },
    isSlider: {
      type: String,
    },
  },
  
  computed: {
    playMusic() {
      return this.$store.state.playMusic;
    },
  },
  components: {
    VButton,
  },
  methods: {
    startMusic() {
      this.$store.commit("startMusic");
    },
    stopMusic() {
      this.$store.commit("stopMusic");
    },
    playClick() {
      var clickSound = new Audio(require("../assets/music/mixkit-select-click-1109.wav"));
      clickSound.volume = 0.4;
      clickSound.play();
    }
  }
};
</script>

<style lang="scss" scoped>
.page-wrapper {
  height: 100%;
  padding: 1rem;
  background-image: url("~@/assets/img/Gras.png");
  background-size: 100% auto;
  background-position: 0 110%;
  background-repeat: no-repeat;
}
.main {
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
.home-button {
  position: absolute;
  z-index: 100;
  top: 1rem;
  left: 1rem;
  margin: 0;
}
.volume {
  float: right;
  color: #ff9900;
}
#soundButtons {
  z-index: 100;
  position: absolute;
  bottom: 8%;
  left: 3%;
  i {
    color: #ff9900;
    font-size: 3rem;
  }
}

.slider {
  position: absolute;
  width: 100%;
}

.overlay {
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

  .grid-item {
    display: table;

    .headers {
      margin-top: 14rem;
      z-index: 10;
      position: relative;

      h1 {
        font-size: 6rem;
        line-height: 4rem;
        animation-name: overlay-anim;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
        animation-delay: 1s;
      }

      h2 {
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

.orange {
  background: #ffaa00;
}
.red {
  background: #ff5500;
}
.green {
  background: #b3d334;
}
.blue {
  background: #18a0fb;
}

@keyframes overlay-anim {
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
