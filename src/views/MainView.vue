<template>

  <!-- ERROR Handling if loading fails -->
  <template v-if="persons.loaded && persons.error !== null">
    <div class="alert alert-danger mt-5">Sorry, fetching data from API failed. Message was:
      <pre class="m-0">{{ persons.error?.response?.data || persons.error?.message }}</pre>
    </div>
  </template>
  <template v-else>

    <!-- Persons -->
    <div class="my-5">

      <div class="row">
        <div class="col">
          <h2 class="mb-2">Phonebook entries</h2>
        </div>
        <div class="col-xl-4">
          <div class="input-group">
            <input v-model="filterPersons" class="form-control" placeholder="Filter phonebook" type="text" />
            <button v-if="filterPersons !== ''" class="btn btn-primary" type="button" @click="filterPersons = ''">
              <font-awesome-icon icon="fa-solid fa-times" />
            </button>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">

          <div class="table-responsive">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Phone</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="person in persons" :key="person.id" class="align-middle c-pointer" @click="$router.push({ name: 'person', params: { id: person.id } })">
                  <td>
                    <div class="person-avatar">{{ person.first_name.charAt( 0 ) }}</div>
                  </td>
                  <td>{{ person.first_name }}</td>
                  <td>{{ person.last_name }}</td>
                  <td>{{ person.phone_number }}</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>

    </div>

  </template>

</template>

<script lang="ts">
import { usePersonsStore } from "@/stores/persons";
import { computed, ref, watchEffect } from "vue";

export default {
  name: "MainView",
  setup() {

    // Variables
    const filterPersons = ref( "" ),
          personsStore  = usePersonsStore();

    return {
      filterPersons,
      persons: computed( () => {

        if ( filterPersons.value !== "" ) {
          return personsStore.list.filter( person => {
            return person.first_name.toLowerCase().includes( filterPersons.value.toLowerCase() ) || person.last_name.toLowerCase().includes( filterPersons.value.toLowerCase() );
          } );
        }

        return personsStore.list;

      } )
    };

  },

  /**
   * Instead of using onMounted, this allows us to use the async/await syntax and keep route loading
   * (prevents all further issues with loaded/not loaded data)
   *
   * @param to
   * @param from
   * @param next
   */
  async beforeRouteEnter( to: any, from: any, next: any ) {

    const personsStore = usePersonsStore();
    if ( !personsStore.list.length ) {
      await personsStore.loadDataFromAPI();
    }
    next();

  }
};
</script>

<style scoped></style>
