<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <Card>
    <form @submit.prevent="handlePhoneBookUpdate">
      <FormControl>
        <template #label>
          Name
        </template>
        <Input v-model="editAddress.name" type="text" placeholder="John Doe" />
      </FormControl>
      <FormControl>
        <template #label>
          Phone Number
        </template>
        <Input v-model="editAddress.phoneNumber" type="tel" placeholder="111-222-333" />
      </FormControl>
      <FormControl class="!flex-row items-center gap-5">
        <template #label>
          Favorite
        </template>
        <input v-model="editAddress.favorite" type="checkbox" class="mr-auto w-4 h-4">
      </FormControl>
    </form>
    <template #footer>
      <Button
        variant="danger" class="mr-5 ml-auto w-1/3 flex-grow lg:flex-grow-0 lg:w-auto"
        @click.once="handlePhoneBookDelete"
      >
        <template #iconBefore>
          <font-awesome-icon icon="fa-solid fa-circle-exclamation" />
        </template>
        Delete
      </Button>
      <Button variant="success" class="w-1/2 lg:w-auto" @click.once="handlePhoneBookUpdate">
        <template #iconBefore>
          <font-awesome-icon icon="fa-solid fa-circle-check" />
        </template>
        Update
      </Button>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  Card, Button, FormControl, Input,
} from '@/components';
import type { PhoneBookAddress } from '@/features';

import usePhoneBookActions from './composables/usePhoneBookActions';

const props = defineProps<{
    address: PhoneBookAddress;
}>();

const editAddress = ref<PhoneBookAddress>(props.address);

const { handlePhoneBookDelete, handlePhoneBookUpdate } = usePhoneBookActions(editAddress.value);
</script>
