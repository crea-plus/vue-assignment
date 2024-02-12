<template>
  <input
    :value="props.modelValue"
    class="max-w-full px-5 py-3 text-lg rounded-xl border border-gray-300 bg-gray-200 focus:bg-gray-50 focus:outline-none focus:border-green-500"
    @input="emit('update:modelValue', $event.target!.value)"
  >
</template>

<script setup lang="ts">
const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);
</script>
