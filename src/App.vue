<template>

  <Layout>

    <div v-if="globals.loading" class="loading-container">
      <div class="loading text-center">
        Loading, please wait...
        <div class="spinner mt-3">
          <font-awesome-icon icon="fa-solid fa-spinner" size="2xl" spin />
        </div>
      </div>
    </div>

    <RouterView />
  </Layout>

</template>
<script lang="ts" setup>
import { useGlobalsStore } from "@/stores/globals";
import { RouterView } from "vue-router";
import Layout from "@/layout/Layout.vue";

const globals = useGlobalsStore();
</script>
<style>
</style>
