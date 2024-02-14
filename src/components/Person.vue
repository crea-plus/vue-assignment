<script setup lang="ts">
import type { Person } from '@/shared/Person.model'

const props = defineProps<{ person: Person }>()
</script>

<template>
  <div
    class="max-w-sm mx-auto mb-3 rounded cursor-pointer overflow-hidden shadow-lg transition-transform duration-400 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
  >
    <div class="px-6 py-4 flex items-center">
      <div
        class="rounded-full h-10 w-10 flex items-center justify-center bg-gray-300 text-gray-600 font-bold text-xl mr-4"
      >
        {{ props.person.first_name.charAt(0) + props.person.last_name.charAt(0) }}
      </div>
      <div>
        <div class="font-bold text-xl mb-2">
          {{ props.person.first_name + ' ' + props.person.last_name }}
        </div>
        <p class="text-gray-700 text-base">
          {{ props.person.phone_number }}
        </p>
      </div>
    </div>
  </div>
</template>
