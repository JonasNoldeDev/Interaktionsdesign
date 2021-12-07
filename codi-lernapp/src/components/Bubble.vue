<template>
  <div class="bubble" :class="[ type, size, orientation, { 'is-visible': visible } ]">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "speech-bubble",
    },
    size: {
      type: String,
      default: "large",
    },
    orientation: {
      type: String,
      default: "right",
    },
    visible: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.bubble {
  display: inline-block;
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
  background-color: var(--color-orange);
  border-radius: var(--border-radius);
  position: absolute;
  height: 0;
  opacity: 0;
  transform: scale(.9);
  transform-origin: bottom center;
  visibility: hidden;
  backface-visibility: hidden;
  transition: .3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-property: opacity, transform;

  &.is-visible {
    position: relative;
    height: auto;
    opacity: 1;
    transform: none;
    visibility: unset;
  }

  ::v-slotted(button) {
    font: inherit;
    color: inherit;
    padding: 0;
    background: 0;
    border: 0;
    border-radius: 0;
  }

  ::v-slotted(p),
  ::v-slotted(button) {
    margin: 0;

    &:not(:first-child) {
      margin-top: .75rem;
    }
  }
}

.small {
  font-size: 1.25rem;
}

.speech-bubble {
  &:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: .5rem solid transparent;
    border-right: .5rem solid var(--color-orange);
    border-top: .5rem solid var(--color-orange);
    border-bottom: .5rem solid transparent;
    left: calc(var(--border-radius) + 20%);
    top: 100%;
  }
}
</style>