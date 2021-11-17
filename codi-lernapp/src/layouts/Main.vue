<template>
  <div class="page-wrapper">
    <app-header></app-header>
    <main class="main" role="main">
      <slot></slot>
    </main>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
};
</script>

<style scoped>
.main {
    padding: 1rem;
}
</style>