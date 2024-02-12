<template>
  <div class="flex flex-col gap-2 mb-4">
    <label v-if="$slots.label" class="text-lg leading-snug text-black">
      <slot name="label" />:
    </label>
    <slot />
  </div>
</template>
