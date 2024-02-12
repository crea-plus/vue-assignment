<template>
  <ContainerLayout class="h-screen overflow-hidden">
      <!-- here will be the search -->
      <PhoneBookList />
  </ContainerLayout>
</template>

<script lang="ts" setup>
import { ContainerLayout } from '@/layouts'
import { PhoneBookList } from '@/features/PhoneBookList'
</script>