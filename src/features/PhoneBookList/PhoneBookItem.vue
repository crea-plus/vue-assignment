<template>
    <RouterLink :to="'/' + props.address.personId">
        <Card class="hover:bg-gray-50 transition-all"
            contentClasses="flex flex-row rounded-xl gap-5 items-center hover:border-l-8 hover:pl-8 hover:border-green-500 transition-all group relative">
            <font-awesome-icon icon="fa-solid fa-star" class="absolute top-2 left-2 w-6 h-6 transition-color text-yellow-300 fill-current filter drop-shadow"
                v-if="props.address.favorite" />
            <div class="flex items-center justify-center shadow text-lg rounded-full w-14 h-14 md:w-20 md:h-20 border-2"
                :style="{
                    backgroundColor: `hsl(${hsl}, 100%, 75%)`,
                    borderColor: `hsl(${hsl}, 100%, 50%)`,
                    color: `hsl(${hsl}, 0%, 0%)`
                }">
                {{ initials }}
            </div>
            <div class="flex flex-col gap-0">
                <h2 class="text-lg md:text-2xl leading-none font-black">{{ props.address.name }}</h2>
                <p class="text-xs md:text-lg opacity-70">{{ props.address.phoneNumber }}</p>
            </div>
            <font-awesome-icon icon="fa-solid fa-chevron-right" class="ml-auto w-4 h-4 lg:w-6 lg:h-6 transition-color group-hover:text-green-500" />
        </Card>
    </RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { Card } from '@/components'
import useCleanPhoneNumber from './composables/useCleanPhoneNumber'

import type { PhoneBookAddress } from '@/features'

const props = defineProps<{
    address: PhoneBookAddress
}>()

const initials = computed(() =>
    props.address.name
        .split(' ')
        .map((name) => name[0])
        .join('')
)
const hsl = computed(() => useCleanPhoneNumber(props.address.phoneNumber))
</script>
