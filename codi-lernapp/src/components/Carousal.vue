<template>
  <div class="carousal">
    <slot :currentSlide="currentSlide" />

    <!-- Navigation -->
    <div class="navigation">
      <div v-show="currentSlide > 1" class="toggle-page left">
        <span v-on:click="playClick" @click="prevSlide">zurück</span>
      </div>
      <div class="toggle-page right">
        <span v-on:click="playClick" @click="nextSlide(this)">weiter</span>
      </div>
    </div>

    <!-- Pagination -->
    <!--<div class="pagination">
          <span
            @click="GotoSlide(index)"
            v-for="(slide, index) in getSlideCount"
            :key="index"
            :class="{ active : index + 1 === currentSlide }"
          >

          </span>
      </div>-->
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import routes from "../routes";
export default {
  props: {
    maxSlides: {
      type: Number,
      required: true,
    },
    nextPage: {
      type: String,
    },
  },
  setup(props) {
    const currentSlide = ref(1);
    const getSlideCount = ref(null);

    //next Slide
    const nextSlide = (self) => {
      if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = props.maxSlides;
        self.$root.currentRoute = props.nextPage;
        window.history.pushState(null, routes[props.nextPage], props.nextPage);
        return;
      }
      currentSlide.value += 1;
    };

    //prev Slide
    const prevSlide = () => {
      if (currentSlide.value === 1) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value -= 1;
    };

    const GotoSlide = (index) => {
      currentSlide.value = index + 1;
    };

    onMounted(() => {
      getSlideCount.value = document.querySelectorAll(".slide").length;
    });

    return { currentSlide, nextSlide, prevSlide, getSlideCount, GotoSlide };
  },
  methods: {
    playClick() {
      var clickSound = new Audio(require("../assets/music/mixkit-select-click-1109.wav"));
      clickSound.volume = 0.4;
      clickSound.play();
    }
  }
};
</script>

<style lang="scss" scoped>
.body {
  height: 100%;
}
.navigation {
  padding: 0 16px;
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  .toggle-page {
    display: flex;
    flex: 1;
    position: absolute;
    right: 15%;
    bottom: 10%;

    .navigation-with-skip & {
      right: 22%;
    }
  }

  .right {
    right: 5%;

    .navigation-with-skip & {
      right: 12%;
    }
  }

  span {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1.5rem;
    width: 107px;
    height: 50px;
    background-color: #ffaa00;
    color: #fff;
  }
}

.pagination {
  position: absolute;
  bottom: 24px;
  width: 100%;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;

  span {
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #ffcc66;
  }
  .active {
    background-color: #ffaa00;
  }
}
</style>
