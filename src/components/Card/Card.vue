<template>
  <section data-testid="card" :class="{
    'max-w-full flex flex-col rounded-xl shadow bg-gray-100 text-black': true,
    shadow: !noShadow,
    'bg-gray-800 text-white dark:bg-gray-900 dark:text-white': dark,
    'container mx-auto': container
  }">
    <header v-if="$slots.header" class="p-5 border-b border-b-gray-300" aria-label="card-header">
      <slot name="header" />
    </header>
    <div :class="{ 'p-5': true, [contentClasses]: true }" aria-label="inner-container">
      <slot />
    </div>
    <footer v-if="$slots.footer" class="p-4 flex flex-wrap" aria-label="card-footer">
      <slot name="footer" />
    </footer>
  </section>
</template>

<script setup lang="ts">
defineProps({
  dark: {
    type: Boolean,
    default: false,
    required: false
  },
  noShadow: {
    type: Boolean,
    default: false,
    required: false
  },
  container: {
    type: Boolean,
    default: false,
    required: false
  },
  contentClasses: {
    type: String,
    default: '',
    required: false
  }
})
</script>
