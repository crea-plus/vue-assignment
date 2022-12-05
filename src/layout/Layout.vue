<template>

  <Header />

  <div class="container">
    <slot />
  </div>

</template>

<script lang="ts" setup>
import Header from "./Header.vue";

const name       = "Layout",
      components = {
        Header
      };

</script>

<style scoped>

</style>
