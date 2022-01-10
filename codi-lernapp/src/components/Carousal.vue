<template>
  <div class="carousal">
      <slot :currentSlide="currentSlide" />

      <!-- Navigation -->
      <div class="navigation">
          <div v-show="currentSlide>1" class="toggle-page left">
              <span @click="prevSlide">zurück</span>
          </div>
          <div class="toggle-page right">
              <span @click="nextSlide">weiter</span>
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
export default {
    setup() {
        const currentSlide = ref(1);
        const getSlideCount = ref(null);

        //next Slide
        const nextSlide = () => {
            if (currentSlide.value === getSlideCount.value){
                currentSlide.value = 4;
                return;
            }
            currentSlide.value += 1;
        };

        //prev Slide
        const prevSlide = () => {
            if (currentSlide.value === 1){
                currentSlide.value = 1;
                return;
            }
            currentSlide.value -= 1;
        }

        const GotoSlide = (index) => {
            currentSlide.value = index + 1;
        }


        onMounted(() => {
            getSlideCount.value = document.querySelectorAll('.slide').length;
        })

        return { currentSlide, nextSlide, prevSlide, getSlideCount, GotoSlide };
    },
};
</script>

<style lang="scss" scoped>
    .body{
        height: 100%;
    }
    .navigation{
        padding: 0 16px;
        height: 100%;
        width: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;

        .toggle-page{
            display: flex;
            flex: 1;
            position: absolute;
            right: 22%;
            bottom: 10%;
        }

        .right{
            justify-content: flex-end;
            right: 10%;
        }

        span{
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 1.5rem;
            width: 110px;
            height: 50px; 
            background-color: #FFAA00;
            color: #fff;
        }
    }

    .pagination{
        position: absolute;
        bottom: 24px;
        width: 100%;
        display: flex;
        gap: 16px;
        justify-content: center;
        align-items: center;

        span{
            cursor: pointer;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #FFCC66;
        }
        .active{
            background-color: #FFAA00;
        }
    }
</style>
