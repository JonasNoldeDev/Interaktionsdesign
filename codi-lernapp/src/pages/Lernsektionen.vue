<template>
  <main-layout>
    <h1>Deine Lernsektionen</h1>
    <nav>
      <ul>
        <li class="sektion">
          <div class="sektion-text">
            <img
              src="./../assets/img/sections/SektionSuchmaschinen.jpg"
              alt=""
            />
            <v-button
              :href="
                (vueConfig.publicPath || '') + '/lernsektionen/lesson1/part1'
              "
              >Start</v-button
            >
          </div>
          <div class="progress-bar">
            <div class="progress-bar-inner" style="width: 70%"></div>
          </div>
          <h2 class="sektion-title">Suchmaschinen</h2>
        </li>
        <li class="sektion">
          <div class="sektion-text">
            <v-button
              :href="(vueConfig.publicPath || '') + '/'"
              >Start</v-button
            >
          </div>
          <div class="progress-bar">
            <div class="progress-bar-inner" style="width: 40%"></div>
          </div>
          <h2 class="sektion-title">E-Mails</h2>
        </li>
        <li class="sektion">
          <div class="sektion-text">
            <v-button
              :href="(vueConfig.publicPath || '') + '/lernsektionen/pdf'"
              >Start</v-button
            >
          </div>
          <div class="progress-bar">
            <div class="progress-bar-inner" style="width: 10%"></div>
          </div>
          <h2 class="sektion-title">PDF</h2>
        </li>
        <li class="sektion">
          <div class="sektion-text">
            <v-button
              :href="(vueConfig.publicPath || '') + '/'"
              >Start</v-button
            >
          </div>
          <div class="progress-bar">
            <div class="progress-bar-inner" style="width: 50%"></div>
          </div>
          <h2 class="sektion-title">Soziale Medien</h2>
        </li>
      </ul>
    </nav>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";
import VButton from "../components/VButton.vue";
import vueConfig from "../../vue.config";

export default {
  components: {
    MainLayout,
    VButton,
  },
  data: () => ({
    vueConfig: vueConfig,
  }),
};
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
    opacity: 0.5;
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
  height: 0.25rem;
  background: hsl(204, 97%, 74%);
}

.progress-bar-inner {
  height: 100%;
  background: #18a0fb;
}

h1 {
  font-size: 1.5em;
  display: inline;
  vertical-align: top;
  line-height: 7rem;
}
</style>
