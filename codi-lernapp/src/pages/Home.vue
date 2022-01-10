<template>
  <main-layout>
    <img class="logo" src="./../assets/img/codi-lernapp-logo.png" alt="Codi Lernapp Logo">
    <img class="codi" src="./../assets/img/characters/codi/999.png" alt="Codi">
    <nav>
      <ul>
        <li>
          <v-button href="/explain">Start</v-button>
        </li>
        <li>
          <v-button href="/lernsektionen">Lernsektionen</v-button>
        </li>
        <li>
          <v-button href="/optionen">Optionen</v-button>
        </li>
      </ul>
    </nav>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue';
  import VButton from "../components/VButton.vue";

  export default {
    components: {
      MainLayout,
      VButton
    }
  }
</script>

<style lang="scss" scoped>
.logo {
  display: block;
  position: absolute;
  width: 16rem;
  height: auto;
  left: 7rem;
  top: 4rem;
}

.codi {
  display: block;
  position: absolute;
  width: 35rem;
  height: auto;
  left: 3rem;
  bottom: 0;
}

nav {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  margin-left: 42rem;
  height: 100%;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
}
.home-button{
  display: none;
}
</style>