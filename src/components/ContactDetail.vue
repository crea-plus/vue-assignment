<template>
  <form class="flex items-center p-4 border rounded mb-4">
    <div class="mb-2 flex items-center">
      <div class="mt-4 mr-2">
        <font-awesome-icon icon="fa-solid fa-user" size="lg" />
      </div>
      <div class="mb-2">
        <label for="first_name" class="block text-lg font-semibold text-gray-800">
          First Name:
        </label>
        <input v-model="contact.first_name" id="first_name" class="border p-2 rounded" />
      </div>
      <div class="mb-2 mr-4">
        <label for="last_name" class="block text-lg font-semibold text-gray-800">
          Last Name:
        </label>
        <input v-model="contact.last_name" id="last_name" class="border p-2 rounded" />
      </div>
    </div>
    <div class="mb-2 flex items-center">
      <div class="mt-4 mr-2">
        <font-awesome-icon icon="fa-solid fa-phone" size="lg" />
      </div>
      <div class="mb-2 mr-4">
        <label for="phone_number" class="block text-lg font-semibold text-gray-800">
          Phone Number:
        </label>
        <input v-model="contact.phone_number" id="phone_number" class="border p-2 rounded" />
      </div>
      <div class="mt-4 mr-2">
        <font-awesome-icon icon="fa-regular fa-star" size="lg" />
      </div>
      <div class="mb-2 mr-4">
        <label for="favorite" class="block text-lg font-semibold text-gray-800">
          Favorite:
        </label>
        <input v-model="contact.favorite" id="favorite" class="border p-2 rounded" />
      </div>
      <div class="mt-5">
        <button @click="deleteContact(contact.id)" class="bg-red-500 text-white p-2 rounded">
          Delete
        </button>
      </div>
    </div>
  </form>
</template>
  
<script lang="ts">

import ContactService from '@/services/contact.service';
import { useContactStore } from '@/stores/contact.store';

export default {
  name: 'ContactDetail',
  props: ['contact'],
  data() {
    return {
    };
  },
  methods: {
    async deleteContact(id: number) {
      try {
        await ContactService.deleteContact(id);
        const contactStore = useContactStore();
        const filteredContacts = contactStore.contacts.filter(contact => contact.id !== id);
        contactStore.$patch({ contacts: filteredContacts });
      } catch (error: any) {
        console.error(error.message);
      }
    }
  }
};

</script>
