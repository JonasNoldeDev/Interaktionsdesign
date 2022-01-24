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
      v-show="character === 'codi' && pose === 'moveLeft'"
      class="character codi pose-moveLeft"
      src="./../assets/img/characters/codi/Codi_richtig_bewegung1.png"
      alt="Codi"
    />
    <img
      v-show="character === 'codi' && pose === 'moveRight'"
      class="character codi pose-moveRight"
      src="./../assets/img/characters/codi/Codi_richtig_bewegung2.png"
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
      class="character bella pose-top"
      src="./../assets/img/characters/Bella_Draufsicht1.png"
      alt="Bella"
    />
    <img
      v-show="character === 'bella' && pose === 'lookUp'"
      class="character bella pose-top"
      src="./../assets/img/characters/Bella_Draufsicht2.png"
      alt="Bella"
    />
    <div
      class="height-spacer"
      :class="{
        'codi-front': character === 'codi',
        'bella-front': character === 'bella' && pose === 'normal',
        'bella-up':
          character === 'bella' && (pose === 'up' || pose === 'lookUp'),
      }"
      aria-hidden="true"
    ></div>
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
  z-index: 1;
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

  &.center {
    left: auto;
    right: 20rem;
  }
}

.character {
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  max-width: 100%;
  transform-origin: bottom center;
  pointer-events: none;

  &.codi.pose-normal {
    transform: scale(1.15);
  }

  &.codi.pose-wrong {
    transform: scale(0.9);
  }

  &.codi.pose-right {
    transform: scale(1.1);
  }

  &.codi.pose-flying {
    transform: scale(1.1);
  }
}

.height-spacer {
  width: 100%;

  &.codi-front {
    height: 22rem;
  }

  &.bella-front {
    height: 20rem;
  }

  &.bella-up {
    height: 16rem;
  }
}
</style>
