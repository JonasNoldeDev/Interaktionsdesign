<template>
  <header role="banner">
    <button class="menu-button" @click="toggleMenu()">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
      Menü
    </button>
    <div class="menu-drawer" :class="{ 'is-open': menuIsOpen }">
      <nav>
        <ul>
          <li>
              <v-link href="/">Home</v-link>
          </li>
          <li>
              <v-link href="/about">About</v-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="overlay-close" :class="{ 'is-open': menuIsOpen }" @click="toggleMenu()" tabindex="-1" aria-hidden="true"></div>
  </header>
</template>

<script>
import VLink from "../components/VLink.vue";

export default {
  name: 'AppHeader',
  components: {
    VLink,
  },
  data: () => {
    return {
      menuIsOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  position: relative;
  z-index: 1;
  padding: 1rem;
  background-color: navajowhite;
}

.menu-button {
  font: inherit;
  display: inline-flex;
  align-items: center;
  background: 0;
  border: 0;
  padding: .25em;

  svg {
    font-size: 1.5em;
    width: 1em;
    height: 1em;
    margin-right: .25em;
  }
}

.menu-drawer {
  position: fixed;
  left: 0;
  top: 4rem;
  bottom: 0;
  z-index: 1;
  width: 20rem;
  background-color: navajowhite;
  visibility: hidden;
  transform: translateX(-100%);
  backface-visibility: hidden;
  transition: .3s ease-in-out;

  &.is-open {
    visibility: initial;
    transform: none;
  }
}

nav {
  padding: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: .5rem;
}

.overlay-close {
  position: fixed;
  left: 0;
  top: 4rem;
  bottom: 0;
  right: 0;
  z-index: -1;
  background-color: rgba($color: #000000, $alpha: .25);
  visibility: hidden;
  opacity: 0;
  backface-visibility: hidden;
  transition: .3s ease-in-out;

  &.is-open {
    opacity: 1;
    visibility: initial;
  }
}
</style>
