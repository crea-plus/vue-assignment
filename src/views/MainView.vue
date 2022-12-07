<template>
  <div class="container">
    <div :class="showDetails? 'align-left': ''" class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 inline-flex min-w-full sm:px-6 lg:px-8">
        <div class="overflow-x-auto">
          <label class="block text-gray-700 text-sm font-bold mb-2 pl-2" for="Search">
            Search
          </label>
          <input
            id="Search"
            v-model="filter" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Search"
          >
          <table class="min-w-full">
            <thead class="border-b">
              <tr>
                <th v-for="value in columns" :key="value.key" scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                  {{ value.name }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="value in filterBook" :key="value.id" class="border-b bg-white" @click="detailsOpen(value.id)">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {{ value.id }}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {{ value.first_name }}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {{ value.last_name }}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {{ value.phone_number }}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {{ value.favorite }}
                </td>
              </tr>
              <tr>
                <td v-if="userData.length === 0" class="content-center">
                  No results
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div v-if="showDetails" :class="showDetails? 'align-right': ''" class="details pt-20">
      <div class="flex items-center">
        <img
          class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0 object-cover rounded-full h-[100px] w-[100px]"
          src="https://robohash.org/stefan-one" alt=""
        >
        <div class="block">
          <strong>{{ currentSelected.first_name +' '+ currentSelected.last_name }}</strong>
          <font-awesome-icon v-if="currentSelected.favorite" class="block" icon="fa-solid fa-handshake" size="2xl" />
          <div class="block ">
            <span>{{ currentSelected.phone_number }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mainStore } from '@/store/store';

export default {
  name: 'MainView',
  data() {
    return {
      showDetails: false,
      filter: '',
      currentSelected: { },
      columns: [
        {
          key: 'id',
          name: 'ID',
        },
        {
          key: 'first_name',
          name: 'First Name',
        },
        {
          key: 'last_name',
          name: 'Last Name',
        },
        {
          key: 'phone_number',
          name: 'Phone Number',
        },
        {
          key: 'favorite',
          name: 'Favorite',
        },
      ],
      userData: [],
    };
  },
  computed: {
    filterBook() {
      if (this.filter === '') {
        return this.userData;
      }
      return this.userData.filter((value) => value.first_name.toUpperCase().startsWith(this.filter.toUpperCase()));
    },
  },
  async created() {
    const store = mainStore();
    this.userData = await store.loadDataFromAPI();
  },
  methods: {
    detailsOpen(id) {
      console.log(this.currentSelected);
      this.currentSelected = this.userData.find((x) => x.id === id);
      this.showDetails = true;
    },
  },
};
</script>

<style scoped>
table {
  display: block;
/*  width: 50vw;*/
  height: 90vh;
  overflow-y: scroll;
}
.details {
  display: block;
  height: 90vh;
}
.container {
  width:100%;
}

.align-left {
  float: left;
  width:50%;
}

.align-right{
  float: right;
  width:50%
}

</style>
