<template>
    <component :is="tag" class="container flex flex-col mx-auto p-5 md:px-0">
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