<template>
  <button
    data-testid="brand-button"
    @click="emits('click')"
    :class="{
      'max-w-full rounded-xl px-10 py-3 text-center inline-flex items-center justify-center gap-2 shadow transition-all hover:shadow-lg': true,
      [styles[variant || 'primary']]: true,
      [styles[size || 'lg']]: true
    }"
  >
    <i v-if="$slots.iconBefore">
      <slot name="iconBefore" />
    </i>
    <slot />
    <i v-if="$slots.iconAfter">
      <slot name="iconAfter" />
    </i>
  </button>
</template>

<script setup lang="ts">
import type { ButtonProps, ButtonVariant, ButtonSize } from './Button.d'

const { size, variant } = defineProps<ButtonProps>()
const emits = defineEmits(['click'])

const styles: Record<ButtonVariant | ButtonSize, string> = {
  primary: 'bg-green-500 text-white',
  danger: 'bg-red-500 text-white',
  info: 'bg-blue-500 text-white',
  success: 'bg-green-300 text-black',
  warning: 'bg-orange-300 text-black',
  lg: 'text-lg leading-none',
  sm: 'text-sm',
  md: 'text-md',
  ghost: 'w-14 h-14 text-sm !rounded-full !p-0 hover:bg-gray-100 hover:text-black hover:shadow-xl'
}
</script>
./Button
