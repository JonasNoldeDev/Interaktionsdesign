<template>
  <div class="character-wrapper" :class="[ position ]">
    <slot />
    <img v-if="character === 'codi'" class="character codi" src="./../assets/img/characters/codi/999.png" alt="Codi">
  </div>
</template>

<script>
export default {
  props: {
    character: {
      type: String,
      default: "codi",
    },
    position: {
      type: String,
      default: "left",
    },
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.character-wrapper {
  position: absolute;
  width: 20rem;
  height: auto;
  left: 3rem;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  &.right {
    left: auto;
    right: 3rem;
  }
}
.character {
  display: block;
  max-width: 100%;
}
</style>