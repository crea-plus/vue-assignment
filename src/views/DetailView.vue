<script setup lang="ts">
import type { Person } from '@/shared/Person.model'
import { usePhonebookStore } from '@/stores/storePhonebook'
import { useRoute } from 'vue-router'
import { onMounted, ref, type Ref } from 'vue'

// route
const route = useRoute()

// store
const storePhonebook = usePhonebookStore()

const person: Ref = ref<Person>({
  id: 0,
  first_name: ' ',
  last_name: ' ',
  phone_number: ' ',
  favorite: false
})

onMounted(async () => {
  if (storePhonebook.persons.length === 0) {
    await storePhonebook.fetchPersons()
  }

  const personContent = storePhonebook.getPersonContent(+route.params.id)
  if (personContent) {
    person.value = personContent
  }
})
</script>

<template>
  <h1 class="mb-5">Persons details</h1>
  <form @submit.prevent="">
    <div class="mb-4">
      <label for="first_name" class="block text-gray-700 text-sm font-bold mb-2">First Name:</label>
      <input
        type="text"
        v-model="person.first_name"
        id="first_name"
        name="first_name"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
      />
    </div>
    <div class="mb-4">
      <label for="last_name" class="block text-gray-700 text-sm font-bold mb-2">Last Name:</label>
      <input
        type="text"
        v-model="person.last_name"
        id="last_name"
        name="last_name"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
      />
    </div>
    <div class="mb-4">
      <label for="phone_number" class="block text-gray-700 text-sm font-bold mb-2"
        >Phone Number:</label
      >
      <input
        type="text"
        v-model="person.phone_number"
        id="phone_number"
        name="phone_number"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
      />
    </div>
    <div class="mb-4">
      <label for="favorite" class="block text-gray-700 text-sm font-bold mb-2">Favorite:</label>
      <input
        type="checkbox"
        v-model="person.favorite"
        id="favorite"
        name="favorite"
        class="form-checkbox h-5 w-5 text-green-500"
      />
    </div>
    <button
      type="submit"
      class="mr-4 mb-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Edit
    </button>
    <button
      @click.prevent="$router.push('/')"
      class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Cancel
    </button>
  </form>
</template>
