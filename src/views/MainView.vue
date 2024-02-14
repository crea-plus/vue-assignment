<script setup lang="ts">
import { usePhonebookStore } from '@/stores/storePhonebook'
import { onMounted } from 'vue'
import Person from '@/components/Person.vue'

// store
const phonebookStore = usePhonebookStore()

onMounted(() => {
  phonebookStore.fetchPersons()
})
</script>

<template>
  <div class="flex justify-center items-start mt-12 mb-8">
    <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
      <!-- Search -->
      <label for="searchPerson" class="block mb-2">Search for a person</label>
      <input
        v-model="phonebookStore.searchQuery"
        name="searchPerson"
        type="text"
        class="block w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
        placeholder="Type a persons name or surname"
      />
    </div>
  </div>

  <div>
    <div v-if="phonebookStore.persons.length === 0" class="text-center text-gray-600">
      No persons found.
    </div>
    <Person
      v-else
      v-for="person in phonebookStore.filteredPersons"
      :key="person.id"
      :person="person"
      @click.prevent=""
    ></Person>
  </div>
</template>
