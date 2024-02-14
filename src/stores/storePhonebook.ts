import { defineStore } from 'pinia'
import type { Person } from '@/shared/Person.model'
import type { AxiosResponse } from 'axios'
import axios from 'axios'
import { environment } from '@/environments/environment'
import { persons } from '@/mocks/persons.mock'

export const usePhonebookStore = defineStore('phonebook', {
  state: () => {
    return {
      persons: [] as Person[],
      searchQuery: '' as string
    }
  },
  actions: {
    async fetchPersons() {
      try {
        const response: AxiosResponse<Person[]> = await axios.get<Person[]>(environment.getPersons)
        if (response.status === 200) {
          this.persons = response.data
        }
      } catch (error) {
        //TODO display some modal or smth
      }
    }
  },
  getters: {
    filteredPersons(state): Person[] {
      return state.persons.filter((person) => {
        const fullName =
          person.first_name.toLocaleLowerCase() + ' ' + person.last_name.toLowerCase()
        return fullName.includes(this.searchQuery.toLowerCase())
      })
    },
    getPersonContent(state): (id: number) => Person {
      return (id: number) => state.persons.filter((person) => person.id === id)[0]
    }
  }
})
