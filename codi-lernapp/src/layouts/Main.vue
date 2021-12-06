<template>
  <div class="page-wrapper">
    <!-- <app-header></app-header> -->
    <main class="main" role="main">
      <slot></slot>
    </main>
  </div>
</template>

<script>
// import AppHeader from "../components/AppHeader.vue";

export default {
  components: {
    // AppHeader,
  },
};
</script>

<style scoped>
.page-wrapper {
  height: 100%;
  border-bottom: 1.5rem solid #408802;
  padding: 1rem;
}
.main {
  height: 100%;
}
</style>
