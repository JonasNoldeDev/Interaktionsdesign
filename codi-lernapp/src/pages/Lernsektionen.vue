<template>
  <main-layout>
    <h1>Deine Lernsektionen</h1>
    <nav>
      <ul>
        <li class="sektion">
          <div class="sektion-text">
            <img
              src="./../assets/img/sections/SektionSuchmaschinen.png"
              alt=""
            />
            <v-button
              :href="
                (vueConfig.publicPath || '') + '/lernsektionen/lesson1/part1'
              "
              >Start</v-button
            >
          </div>
          <h2 class="sektion-title">Lektion 1: Internet Browser</h2>
        </li>
        <li class="sektion disabled">
          <div class="sektion-text">
            <v-button
              :href="(vueConfig.publicPath || '') + '/'"
              tabindex="-1"
              >Start</v-button
            >
          </div>
          <h2 class="sektion-title">Lektion 2: E-Mails</h2>
        </li>
        <li class="sektion">
          <div class="sektion-text">
            <img
              src="./../assets/img/sections/SektionPDF.jpg"
              alt=""
            />
            <v-button
              :href="(vueConfig.publicPath || '') + '/lernsektionen/pdf'"
              >Start</v-button
            >
          </div>
          <h2 class="sektion-title">Lektion 3: PDF</h2>
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

  svg {
    display: block;
    width: 1em;
    height: 1em;
  }
}

h1 {
  font-size: 1.5em;
  line-height: 4.5rem;
  margin-top: 8rem;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 2rem -1rem -1rem 0;
}

li {
  width: calc(33.333% - 1rem);
  margin: 0 1rem 1rem 0;
}

.sektion.disabled {
  pointer-events: none;
  opacity: .25;

  .sektion-text {
    background-color: var(--color-blue);
  }
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
</style>
