<template>
  <input
    v-model="model"
    class="max-w-full px-5 py-3 text-lg rounded-xl border border-gray-300 bg-gray-200 focus:bg-gray-50 focus:outline-none focus:border-green-500"
  />
</template>

<script setup lang="ts">
const model = defineModel()
</script>
