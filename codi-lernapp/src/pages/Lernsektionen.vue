<template>
  <main-layout>
    <nav>
      <header>
        <v-button :href="(vueConfig.publicPath || '') + '/'"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left" class="svg-inline--fa fa-angle-left fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg></v-button>
        <h1>Deine Lernsektionen</h1>
      </header>
      <ul>
        <li class="sektion">
          <div class="sektion-text">
            <img src="./../assets/img/sections/SektionSuchmaschinen.jpg" alt="">
            <v-button :href="(vueConfig.publicPath || '') + '/lernsektionen/lesson1/part1'">Start</v-button>
          </div>
          <div class="progress-bar">
            <div class="progress-bar-inner" style="width: 70%;"></div>
          </div>
          <h2 class="sektion-title">Suchmaschinen</h2>
        </li>
        <li class="sektion">
          <div class="sektion-text">
            <v-button :href="(vueConfig.publicPath || '') + '/lernsektionen/sektion1'">Start</v-button>
          </div>
          <div class="progress-bar">
            <div class="progress-bar-inner" style="width: 40%;"></div>
          </div>
          <h2 class="sektion-title">E-Mails</h2>
        </li>
        <li class="sektion">
          <div class="sektion-text">
            <v-button :href="(vueConfig.publicPath || '') + '/lernsektionen/sektion1'">Start</v-button>
          </div>
          <div class="progress-bar">
            <div class="progress-bar-inner" style="width: 10%;"></div>
          </div>
          <h2 class="sektion-title">Links</h2>
        </li>
        <li class="sektion">
          <div class="sektion-text">
            <v-button :href="(vueConfig.publicPath || '') + '/lernsektionen/sektion1'">Start</v-button>
          </div>
          <div class="progress-bar">
            <div class="progress-bar-inner" style="width: 50%;"></div>
          </div>
          <h2 class="sektion-title">Soziale Medien</h2>
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
header {
  display: flex;
  align-items: center;
  margin: 1rem 0 2rem;

  h1 {
    margin: 0 0 0 2rem;
  }

  svg {
    display: block;
    width: 1em;
    height: 1em;
  }
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0 -1rem -1rem 0;
}

li {
  width: calc(33.333% - 1rem);
  margin: 0 1rem 1rem 0;
}

.sektion-text {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 14rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 1.5rem 1.5rem 0 0;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .5;
  }

  a {
    position: relative;
    z-index: 1;
  }
}

.sektion-title {
  line-height: 1;
  font-size: 1em;
  margin: 0;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0 0 1.5rem 1.5rem;
}

.progress-bar {
  height: .25rem;
  background: hsl(204, 97%, 74%);
}

.progress-bar-inner {
  height: 100%;
  background: #18A0FB;
}
</style>
