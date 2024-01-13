import type { Contact } from '@/interfaces/contact.interface'
import { defineStore } from 'pinia'

export const useContactStore = defineStore('Contact', {
  state: () => ({
    contacts: [] as Contact[]
  }),
  getters: {
  },
  actions: {
  },
})
