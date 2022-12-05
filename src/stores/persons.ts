import { defineStore } from "pinia";
import axios from "axios";

interface person {
  id: number;
  first_name: string,
  last_name: string,
  phone_number: string,
}

export const usePersonsStore = defineStore( {
  id     : "persons",
  state  : () => ( {
    loaded: false,
    error : null,
    list  : new Array<person>()
  } ),
  actions: {

    loadDataFromAPI() {

      return axios.get( "https://creaplus.free.beeceptor.com/persons" )
        .then( response => {

          this.list   = response.data;
          this.loaded = true;

        } ).catch( error => { // Not properly handled but it's just a demo

          this.error  = error;
          this.loaded = true;
          console.error( error );

        } );

      // We could use .finally here and skip two x writing this.loaded if TS ES spec would be updated to ES2018

    },

    filterPersons( search: string ) {

      // Filter persons here
      return this.list.filter( person => person.first_name.toLowerCase().includes( search.toLowerCase() ) );

    },

    /**
     * Get person by ID
     *
     * @param id
     */
    getPerson( id: string | string[] | number ) {

      // Make sure passed string is numeric
      if ( typeof id === "string" ) {

        id = parseInt( id );

      }

      return this.list.find( person => person.id === id ) ?? null;

    }

  }

} );
