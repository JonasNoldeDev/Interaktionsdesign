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
            Hi! Hier bin ich wieder, Codi, dein Abenteuerfreund im digitalen Dschungel. <br>
            Schön, dass du mit mir die <b>erste Lektion: Internet Browser</b> durchgehst!
          </p>
          <div class="left-point"></div>
        </div>
      </Slide>
      <Slide v-show="currentSlide === 2">
        <div class="slide-info speech-bubble">
          <p>
            Internet Browser sind Computerprogramme, die Webseiten im Internet
            darstellen können.
          </p>
          <div class="left-point"></div>
        </div>
      </Slide>
      <Slide v-show="currentSlide === 3">
        <div class="slide-info">
          <img :src="require(`../assets/img/Chrome.png`)" />
          <p style="text-align: center">Der meistgenutzte Browser ist "Google Chrome".</p>
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
          <p style="text-align: center">
            Aber neben Google Chrome gibt es noch andere Browser wie "Safari",
            "Firefox", "Edge" und viele andere.
          </p>
          <div class="left-point"></div>
        </div>
      </Slide>
      <img v-show="currentSlide === 2 || currentSlide === 4" class="codi" src="./../assets/img/characters/codi/999.png" alt="Codi">
      <img v-show="currentSlide === 3" class="codi codi-gross" src="./../assets/img/characters/codi/Papagai_erklaerend_gross.png" alt="Codi">
      <img v-show="currentSlide === 1" class="codi codi-sing" src="./../assets/img/characters/codi/Codi_richtig.png" alt="Codi">
    </Carousal>
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
      line-height: 2rem;
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
  .codi-gross{
    width: 18rem;
    bottom: 0.5rem;
  }
  .codi-sing{
    bottom: 0.5rem;
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
