<template>
  <div class="character-wrapper" :class="[position]">
    <slot />
    <img
      v-show="character === 'codi' && pose === 'normal'"
      class="character codi pose-normal"
      src="./../assets/img/characters/codi/Papagai_freude_gross.png"
      alt="Codi"
    />
    <img
      v-show="character === 'codi' && pose === 'explaining'"
      class="character codi pose-explaining"
      src="./../assets/img/characters/codi/Papagai_erklaerend_gross.png"
      alt="Codi"
    />
    <img
      v-show="character === 'codi' && pose === 'wrong'"
      class="character codi pose-wrong"
      src="./../assets/img/characters/codi/Codi_FALSCH.png"
      alt="Codi"
    />
    <img
      v-show="character === 'codi' && pose === 'right'"
      class="character codi pose-right"
      src="./../assets/img/characters/codi/Codi_richtig.png"
      alt="Codi"
    />
    <img
      v-show="character === 'codi' && pose === 'stressed'"
      class="character codi pose-stressed"
      src="./../assets/img/characters/codi/Codi_gestresst.png"
      alt="Codi"
    />
    <img
      v-show="character === 'codi' && pose === 'move'"
      class="character codi pose-move"
      src="./../assets/img/characters/codi/Bewegung.gif"
      alt="Codi"
    />

    <img
      v-show="character === 'codi' && pose === 'flying'"
      class="character codi pose-flying"
      src="./../assets/img/characters/codi/Codi_flying.png"
      alt="Codi"
    />
    <img
      v-show="character === 'bella' && pose === 'normal'"
      class="character bella pose-normal"
      src="./../assets/img/characters/Bella.png"
      alt="Bella"
    />
    <img
     v-show="character === 'bella' && pose === 'up'"
     class="character bella pose-normal"
     src="./../assets/img/characters/Bella_Draufsicht1.png"
     alt="Bella"
    />
    <img
     v-show="character === 'bella' && pose === 'lookUp'"
     class="character bella pose-normal"
     src="./../assets/img/characters/Bella_Draufsicht2.png"
     alt="Bella"
    />
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
    pose: {
      type: String,
      default: "normal",
    },
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
