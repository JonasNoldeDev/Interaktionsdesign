<template>
  <main-layout    
    :overlay="true"
    :color="'blue'"
    :firstheader="'Lektion 1'"
    :secondheader="'Browser Wissen'"
    :picFile="'Codi-Richtig'"
  >
    <Carousal
      :maxSlides="4"
      :nextPage="'/lernsektionen/crossword'"
      class="carousal"
      v-slot="{ currentSlide }"
    >
      <Slide v-show="currentSlide === 1">
        <div class="slide-info speech-bubble">
          <p>
            Hi mein Name ist Codi und heute gehen wir die erste Lektion
            "Internet-Browser" durch
          </p>
          <div class="left-point"></div>
        </div>
      </Slide>
      <Slide v-show="currentSlide === 2">
        <div class="slide-info speech-bubble">
          <p>
            Internet Browser sind Computerprogramme, die Webseiten im Internet
            darstellen können
          </p>
          <div class="left-point"></div>
        </div>
      </Slide>
      <Slide v-show="currentSlide === 3">
        <div class="slide-info">
          <img :src="require(`../assets/img/Chrome.png`)" />
          <p>Der meistgenutzte Browser ist "Google Chrome"</p>
          <div class="left-point"></div>
        </div>
      </Slide>
      <Slide v-show="currentSlide === 4">
        <div class="slide-info">
          <div class="row">
            <div class="column">
              <img :src="require(`../assets/img/Safari.png`)" />
            </div>
            <div class="column">
              <img :src="require(`../assets/img/Firefox.png`)" />
            </div>
            <div class="column">
              <img :src="require(`../assets/img/Edge.png`)" />
            </div>
          </div>
          <p>
            Aber neben Google Chrome gibt es noch andere Browser wie "Safari",
            "Firefox", "Edge" und viele andere
          </p>
          <div class="left-point"></div>
        </div>
      </Slide>
    </Carousal>
    <img
      class="codi"
      src="./../assets/img/characters/codi/999.png"
      alt="Codi"
    />
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";

import Carousal from "../components/Carousal.vue";
import Slide from "../components/Slide.vue";

export default {
  components: {
    MainLayout,
    Carousal,
    Slide,
  },
  setup() {
    const carousalSlides = ["img", "Gif", "video"];

    return { carousalSlides };
  },
};
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
.carousal {
  position: relative;
  max-height: 100%;
  height: 100%;
  .slide-info {
    height: 100%;

    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 25%;
      margin-top: 50px;
    }

    p {
      text-align: center;
    }
    .row {
      display: flex;
    }

    /* Create three equal columns that sits next to each other */
    .column {
      flex: 33.33%;
      padding: 5px;
    }
  }
  .speech-bubble {
    display: table;
    padding: 0 3rem;
    p {
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
  left: 8rem;
  bottom: 1rem;
}
.left-point {
  width: 0;
  height: 0;
  border-left: 2vh solid transparent;
  border-right: 2vh solid transparent;
  border-top: 10vh solid #fff;
  position: absolute;
  top: 83%;
  left: 20%;
  transform: rotate(60deg);
}
</style>
