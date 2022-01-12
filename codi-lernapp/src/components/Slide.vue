<template>
  <div class="slide">
      <transition name="slide">
          <slot />
      </transition>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .slide{
        font-size: 1.3rem;
        position: absolute;
        top: 5%;
        left: 25%;
        width: 50%;
        max-height: 100%;
        height: 50%;
        background-color: #fff;
        border-radius: 2rem;
        padding: 0 30px;
        animation-name: expand-bounce;
        animation-duration: 0.4s;
    }

    @keyframes expand-bounce {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.25);
        }
        100% {
            transform: scale(1);
        }
    }


</style>
