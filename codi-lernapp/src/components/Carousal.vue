<template>
  <div class="carousal">
      <slot :currentSlide="currentSlide" />

      <!-- Navigation -->
      <div class="navigation">
          <div class="toggle-page left">
              <i @click="prevSlide" class="fas fa-chevron-left"></i>
          </div>
          <div class="toggle-page right">
              <i @click="nextSlide" class="fas fa-chevron-right"></i>
          </div>
      </div>

      <!-- Pagination -->
      <div class="pagination">
          <span 
            @click="GotoSlide(index)"
            v-for="(slide, index) in getSlideCount" 
            :key="index" 
            :class="{ active : index + 1 === currentSlide }"
          >

          </span>
      </div>
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
                currentSlide.value = 3;
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
        }

        .right{
            justify-content: flex-end;
        }

        i{
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            width: 40px;
            height: 40px; 
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
