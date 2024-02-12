<template>
    <component :is="tag" class="flex flex-col container mx-auto my-5 px-5 md:px-0">
        <slot />
    </component>
</template>

<script setup lang="ts">
const { tag } = defineProps({
    tag: {
        type: String,
        default: 'main'
    }
})
</script>