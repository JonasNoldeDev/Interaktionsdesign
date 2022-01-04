<template>
  <div class="character-wrapper" :class="[position]">
    <slot />
    <img
      v-show="character === 'codi' && pose === 'normal'"
      class="character codi pose-normal"
      src="./../assets/img/characters/codi/999.png"
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
  data: () => ({
    pose: "normal",
  }),
  methods: {
    switchPose(pose, switchBackIn = -1) {
      if (this.pose === pose) return;
      if (this.character !== "codi") return;

      let oldPose = this.pose;

      switch (pose) {
        case "normal":
          this.pose = "normal";
          break;

        case "wrong":
          this.pose = "wrong";
          break;
  
        case "right":
          this.pose = "right";
          break;

        default:
          console.log("Unknown character pose.");
          break;
      }

      if (switchBackIn > 0) {
        setTimeout(() => {
          this.pose = oldPose;
        }, switchBackIn * 1000);
      }
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