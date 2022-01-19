<template>
  <main-layout>
    <img class="logo" src="./../assets/img/codi-lernapp-logo.png" alt="Codi Lernapp Logo">
    <img class="codi" src="./../assets/img/characters/codi/999.png" alt="Codi">
    <nav>
      <ul>
        <li>
          <v-button :href="(vueConfig.publicPath || '') + '/explain'">Start</v-button>
        </li>
        <li>
          <v-button :href="(vueConfig.publicPath || '') + '/lernsektionen'">Lernsektionen</v-button>
        </li>
        <li>
          <v-button :href="(vueConfig.publicPath || '') + '/optionen'">Optionen</v-button>
        </li>
      </ul>
    </nav>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue';
  import VButton from "../components/VButton.vue";
  import vueConfig from '../../vue.config';

  export default {
    components: {
      MainLayout,
      VButton
    },
    data: () => ({
      vueConfig: vueConfig
    })
  }
</script>

<style lang="scss" scoped>
.logo {
  display: block;
  position: absolute;
  width: 16rem;
  height: auto;
  left: 10rem;
  top: 4rem;
}

.codi {
  display: block;
  position: absolute;
  width: 35rem;
  height: auto;
  left: 10rem;
  bottom: 0;
}

nav {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  margin-left: 53rem;
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