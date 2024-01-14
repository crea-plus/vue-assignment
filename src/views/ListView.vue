<template>
  <div class="flex flex-col sm:flex-row justify-center mt-5 cursor-pointer">
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
      <div class="mb-4">
        <input v-model="searchQuery" @keyup.enter="search()" placeholder="Search..."
          class="w-full p-2 border border-gray-300 rounded" />
      </div>

      <div v-for="contact in contacts" class="mb-4">
        <ContactList :contact="contact" @click="showDetail(contact.id)" />
      </div>
    </div>
    <div class="ml-0 sm:ml-5 mt-4 sm:mt-0">
      <router-view v-slot="{ Component, route }">
        <transition :name="'fade'" :key="route.path">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts">

import ContactList from '../components/ContactList.vue';
import type { Contact } from '../interfaces/contact.interface';
import ContactService from '../services/contact.service';
import { useContactStore } from '@/stores/contact.store';

export default {
  name: 'ListView',
  components: {
    ContactList
  },
  data(): { searchQuery: string, contacts: Contact[] } {
    return {
      searchQuery: '',
      contacts: []
    };
  },
  computed: {
  },
  methods: {
    search() {
      const contactStore = useContactStore();
      const filteredContacts: Contact[] = [];
      contactStore.contacts.forEach(contact => {
        if (contact.first_name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          contact.last_name.toLowerCase().includes(this.searchQuery.toLowerCase())) {
          filteredContacts.push(contact);
        }
      });
      this.contacts = filteredContacts;
    },
    showDetail(id: number) {
      this.$router.push({ path: `/details/${id}` });
    },
  },
  async created() {
    try {
      const contactStore = useContactStore();
      const contacts = await ContactService.getContacts();
      contactStore.$patch({ contacts });
      this.contacts = contacts;
    } catch (error: any) {
      console.error(error.message);
    }
  },
};

</script>
