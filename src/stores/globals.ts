import { defineStore } from "pinia";

export const useGlobalsStore = defineStore( {
  id     : "globals",
  state  : () => ( {
    loading: true
  } ),
  actions: {
    setLoading( value: boolean ) {
      this.loading = value;
    }
  }

} );
