<template>
  <div class="bubble" :class="[ type, size, orientation, { 'is-visible': visible } ]">
    <slot />
    <nav class="bubble-nav" v-if="prev || next">
      <button @click="$emit('prev')" v-if="prev" style="margin-right: .5rem;">
        <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 256 512"><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg>
        Zurück
      </button>
      <button @click="$emit('next')" v-if="next" style="margin-left: auto;">
        Weiter
        <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 256 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>
      </button>
    </nav>
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
    prev: {
      type: Boolean,
      default: false,
    },
    next: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.bubble {
  display: inline-block;
  padding: 1rem;
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

  ::v-slotted(p) {
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
    width: 0;
    height: 0;
    position: absolute;
    border-left: .5rem solid transparent;
    border-right: .5rem solid var(--color-orange);
    border-top: .5rem solid var(--color-orange);
    border-bottom: .5rem solid transparent;
    left: calc(var(--border-radius) + 20%);
    top: 100%;
  }
}

.speech-bubble-left {
  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 0;
    z-index: 1;
    border-style: solid;
    border-width: 1.5rem 0 0 1.5rem;
    border-color: transparent transparent transparent var(--color-orange);
    top: 50%;
    right: -5%;
    margin-top: -10px;
  }
}

.bubble-nav {
  display: flex;
  margin-top: 1.5rem;

  button {
    font: inherit;
    font-weight: 500;
    color: inherit;
    margin: 0;
    background: 0;
    border: 0;
    background-color: var(--color-orange-dark);
    padding: .25em .75em;
    border-radius: var(--border-radius);
  }

  svg {
    display: inline-block;
    width: .75em;
    height: 1em;
    position: relative;
    top: .125em;
  }
}
</style>
