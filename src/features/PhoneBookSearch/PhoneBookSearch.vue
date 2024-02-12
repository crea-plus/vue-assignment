<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <Input v-model="store.searchQuery" data-testid="phone-book-search" type="search" placeholder="Search phone book" />
</template>

<script setup lang="ts">
import { Input } from '@/components';
import { usePhoneBookStore } from '@/stores/PhoneBookStore';

const store = usePhoneBookStore();
</script>
