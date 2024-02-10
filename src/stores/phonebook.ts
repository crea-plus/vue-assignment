import { defineStore } from 'pinia';

import axios from 'axios';

export const  phoneBook = defineStore ({
    id: 'phoneBook',
    state: () => ({
        phoneNumbers: []
    }),
    actions: {
        async getPhoneBook() {
            try {
                const data = await axios.get('https://creaplus.free.beeceptor.com/persons');
                this.phoneNumbers = data.data;
            } catch (error) {
                console.log(error);
            }
        }
    },
    getters: {
        getPersonWithId(state) {
            return (id: number) => state.phoneNumbers[id];
        }
    }
})