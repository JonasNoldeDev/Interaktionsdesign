<template>
  <header role="banner">
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
  </header>
</template>

<script>
import VLink from "../components/VLink.vue";

export default {
  name: 'AppHeader',
  components: {
    VLink,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  padding: 1rem;
  background-color: navajowhite;
}

ul {
  list-style-type: none;
  display: flex;
  padding: 0;
  margin: 0;
}

li {
  margin-right: .5rem;
}
</style>
