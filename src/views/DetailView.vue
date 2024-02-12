<template>
  <ContainerLayout class="h-screen overflow-hidden gap-5">
    <Suspense>
      <template #fallback>
        <p class="text-lg text-gray-700">
          Loading...
        </p>
      </template>
      <PhoneBookEditForm v-if="address" :address="address" />
    </Suspense>
    <RouterLink to="/">
      <Button>
        <template #iconBefore>
          <font-awesome-icon icon="fa-solid fa-chevron-left" />
        </template>
        Go back
      </Button>
    </RouterLink>
  </ContainerLayout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

import { ContainerLayout } from '@/layouts';
import { Button } from '@/components';

import { PhoneBookEditForm } from '@/features/PhoneBookDetails';
import type { PhoneBookAddress } from '@/features';
import { usePhoneBookStore } from '@/stores/PhoneBookStore';

const route = useRoute();

const phoneBookId = route.params.personId as string;
const address = ref<PhoneBookAddress>();
const store = usePhoneBookStore();

onMounted(async () => {
  if (store.addresses.length === 0) {
    await store.fetchPhoneBooks();
  }
  const phoneBookAddress = store.getPhoneBookAddress(phoneBookId);
  if (phoneBookAddress) {
    address.value = phoneBookAddress;
  }
});
</script>
