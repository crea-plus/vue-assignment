<template>
  <Input
    data-testid="phone-book-search"
    type="search"
    placeholder="Search phone book"
    v-model="store.searchQuery"
  />
</template>

<script setup lang="ts">
import { Input } from '@/components'
import { usePhoneBookStore } from '@/stores/PhoneBookStore'

const store = usePhoneBookStore()
</script>
