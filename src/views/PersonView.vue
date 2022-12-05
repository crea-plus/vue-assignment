<template>

  <template v-if="!person || !person.id">
    <div class="alert alert-danger mt-4"><h4>404</h4>Unable to find the person you are looking for!</div>
  </template>

  <template v-else>

    <form method="POST" @submit.prevent="dummySend">
      <div class="container mt-5 mb-5">
        <div class="row">

          <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <div class="person-avatar large mb-4">{{ person.first_name.charAt( 0 ) }}</div>
              <span class="font-weight-bold">{{ person.first_name }}</span>
            </div>
          </div>

          <div class="col-md-5 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Profile Settings</h4>
              </div>

              <div class="row mt-2">
                <div class="col-md-6">
                  <label class="labels">Name</label>
                  <input v-model="person.first_name" class="form-control" placeholder="First Name" type="text">
                </div>

                <div class="col-md-6">
                  <label class="labels">Surname</label>
                  <input v-model="person.last_name" class="form-control" placeholder="Last Name" type="text">
                </div>
              </div>

              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels">Phone Number</label>
                  <input v-model="person.phone_number" class="form-control" placeholder="Phone Number" type="text">
                </div>
              </div>

              <div v-if="sentSuccess" class="alert alert-success mt-4">
                If this was a real API, this would get sent to the server:
                <pre>{{ JSON.stringify( person, null, "\t" ) }}</pre>
              </div>

              <div class="mt-4 d-flex flex-row">

                <router-link :to="{ name: 'home'}" class="btn btn-danger align-self-start">
                  <font-awesome-icon icon="fa-solid fa-arrow-left" />
                  Back
                </router-link>
                <button class="btn btn-primary ms-auto align-self-end" type="submit" value="send">
                  <font-awesome-icon icon="fa-solid fa-save" />
                  Save Profile
                </button>

              </div>

            </div>

          </div>

          <div class="col-md-4"></div>

        </div>
      </div>
    </form>

  </template>

</template>

<script lang="ts">
import { usePersonsStore } from "@/stores/persons";
import { useRoute } from "vue-router";
import { computed, inject, ref } from "vue";

export default {
  name: "PersonView",
  setup() {

    const copy = inject( "copy-object", {} );

    // Variables
    const route        = useRoute(),
          personsStore = usePersonsStore(),
          person       = computed(
            function() {
              return JSON.parse(
                JSON.stringify(
                  personsStore.getPerson( route.params.id )
                )
              );
            }
          );

    // Reflective
    let sentSuccess = ref( false );

    // Define method
    const dummySend = () => {

      sentSuccess.value = true;

      // After few sec
      setTimeout( () => {
        sentSuccess.value = false;
      }, 5000 );

      return false;

    };

    return {
      dummySend,
      sentSuccess,
      person
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

<style scoped>

</style>
