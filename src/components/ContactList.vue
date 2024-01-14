<template>
  <div class="flex items-center p-4 border rounded mb-4">
    <div class="w-10 h-10 flex items-center justify-center bg-blue-500 text-white font-bold rounded-full mr-4">
      {{ getContactInitials(contact) }}
    </div>
    <div>
      <div class="text-lg font-semibold mb-1">
        {{ contact?.first_name }} {{ contact?.last_name }}
      </div>
      <div class="text-gray-700">{{ contact?.phone_number }}</div>
    </div>
  </div>
</template>
  

<script lang="ts">
import type { Contact } from '../interfaces/contact.interface';

export default {
  name: 'ContactList',
  props: ['contact'],
  data() {
    return {}
  },
  methods: {
    getContactInitials(contact: Contact) {
      return contact.first_name.charAt(0).toUpperCase() + contact.last_name.charAt(0).toUpperCase();
    }
  },

};

</script>
