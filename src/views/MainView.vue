<template>
  <ContainerLayout class="h-screen overflow-hidden gap-5">
      <PhoneBookSearch />
      <PhoneBookList />
  </ContainerLayout>
</template>

<script lang="ts" setup>
import { ContainerLayout } from '@/layouts'
import { PhoneBookList } from '@/features/PhoneBookList'
import { PhoneBookSearch } from '@/features/PhoneBookSearch';
</script>