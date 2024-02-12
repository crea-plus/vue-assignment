/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia';
import axios from 'axios';
import { computed, ref } from 'vue';

import { personToPhoneBookAddress } from '@/lib/converter';

import type { Person, PhoneBookAddress } from '@/features';

// Not sure if it is okay to use composition API for the Pinia store.
// The same store can be implemented using the Options API as well.
// state in the state method, and methods in the actions method
// https://pinia.vuejs.org/introduction.html#Basic-example
export const usePhoneBookStore = defineStore('phoneBook', () => {
  const searchQuery = ref('');
  const addresses = ref<PhoneBookAddress[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  // maybe this should have a different name
  // const sort = ref<'ASC' | 'DESC'>('ASC')
  // this computed property can be used to sort the addresses as well..
  const filteredAddresses = computed(() => addresses.value.filter(({ name }) => name.toLowerCase().includes(searchQuery.value.toLowerCase())));

  async function fetchPhoneBooks() {
    loading.value = true;
    try {
      // fetch persons from the mock API
      const response = await axios.get('https://creaplus.free.beeceptor.com/persons');
      if (response.status !== 200) {
        throw new Error('Failed to fetch persons');
      }
      const persons = response.data as Person[];
      if (persons && persons.length) {
        addresses.value = persons.map((person) => personToPhoneBookAddress(person));
      }
    } catch (err) {
      error.value = String(err);
    } finally {
      loading.value = false;
    }

    return { addresses, loading, error };
  }

  function setSearchQuery(query: string) {
    searchQuery.value = query;
  }

  function addAddress(address: PhoneBookAddress) {
    addresses.value.push(address);
  }

  function removeAddress(index: number) {
    addresses.value.splice(index, 1);
  }

  function clearAddresses() {
    addresses.value = [];
  }

  function getPhoneBookAddress(personId: string) {
    return addresses.value.find((address) => address.personId === Number(personId));
  }

  return {
    searchQuery,
    addresses,
    filteredAddresses,
    loading,
    error,

    fetchPhoneBooks,
    setSearchQuery,
    addAddress,
    removeAddress,
    clearAddresses,
    getPhoneBookAddress,
  };
});
