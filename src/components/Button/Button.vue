<template>
  <button
    :class="{
      'max-w-full rounded-xl px-10 py-3 text-center inline-flex items-center justify-center gap-2 shadow transition-all hover:shadow-lg': true,
      [styles[props.variant || 'primary']]: true,
      [styles[props.size || 'lg']]: true
    }" @click="emits('click')"
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
import type { PropType } from 'vue';
import type { ButtonVariant, ButtonSize } from '.';

const props = defineProps({
  variant: {
    type: String as PropType<ButtonVariant>,
    default: 'primary',
    required: false,
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: 'lg',
    required: false,
  },
});
const emits = defineEmits(['click']);

const styles: Record<ButtonVariant | ButtonSize, string> = {
  primary: 'bg-green-500 text-white',
  danger: 'bg-red-500 text-white',
  info: 'bg-blue-500 text-white',
  success: 'bg-green-300 text-black',
  warning: 'bg-orange-300 text-black',
  lg: 'text-lg leading-none',
  sm: 'text-sm',
  md: 'text-md',
  ghost: 'w-14 h-14 text-sm !rounded-full !p-0 hover:bg-gray-100 hover:text-black hover:shadow-xl',
};
</script>
