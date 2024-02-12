<template>
    <Suspense>
        <template #fallback>
            <p class="text-lg text-gray-700">Loading...</p>
        </template>
        <p v-if="store.loading" class="text-lg text-gray-700">Loading...</p>
        <p v-else-if="store.error" class="text-lg text-red-500">{{ store.error }}</p>
        <p v-else-if="store.filteredAddresses.length === 0" class="text-lg text-gray-700">
            No phone books found
        </p>
        <section v-else class="flex flex-col gap-5 overflow-y-scroll overflow-x-auto" ref="list" :style="{
            height: `${maxListHeight}px`
        }">
            <PhoneBookItem v-for="address in store.filteredAddresses" :key="address.personId" :address="address" />
        </section>
    </Suspense>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import { PhoneBookItem } from '@/features/PhoneBookList'
import { usePhoneBookStore } from '@/stores/PhoneBookStore'

const store = usePhoneBookStore()
const list = ref<HTMLElement | null>(null)

onMounted(() => {
    store.fetchPhoneBooks()
})

const maxListHeight = computed(() => {
    const domRect = list.value?.getBoundingClientRect()
    if (domRect) {
        return window.innerHeight - domRect.top - 50
    }
    return window.innerHeight
})
</script>
../PhoneBookSearch
