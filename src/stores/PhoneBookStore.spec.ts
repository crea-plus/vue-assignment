import { createPinia, setActivePinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'

import { usePhoneBookStore } from '@/stores/PhoneBookStore';

import type { PhoneBookAddress } from '@/features'

const addressList: PhoneBookAddress[] = [
    {
        name: 'John Doe',
        phoneNumber: '123-456-7890',
        favorite: false,
        personId: 1
    },
    {
        name: 'Jane Doe',
        phoneNumber: '321-654-0987',
        favorite: true,
        personId: 2
    }
]

describe('phoneBook Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    const getPhoneBookStore = () => {
        const store = usePhoneBookStore()
        addressList.forEach((address) => {
            store.addAddress(address)
        })
        return store
    }

    it('Should properly filter addresses if query', () => {
        const store = getPhoneBookStore()
        store.setSearchQuery('John')

        expect(store.filteredAddresses.length).toEqual(1)
    })

    it('Should return addresses if no query', () => {
        const store = getPhoneBookStore()
        store.setSearchQuery('')

        expect(store.filteredAddresses.length).toEqual(2)
    })

    it('Should be able to set the query', () => {
        const store = getPhoneBookStore()
        store.setSearchQuery('Banana split?')
        expect(store.searchQuery).toEqual('Banana split?')
    })

    it('Should be able to remove an address', () => {
        const store = getPhoneBookStore()
        store.removeAddress(0)
        expect(store.addresses.length).toEqual(1)
    })

    it('Should be able to add an address', () => {
        const store = getPhoneBookStore()
        store.addAddress({
            name: 'Test',
            phoneNumber: '123-456-7890',
            favorite: false,
            personId: 3
        })
        expect(store.addresses.length).toEqual(3)
    })

    it('Should be able to clear all addresses', () => {
        const store = getPhoneBookStore()
        store.clearAddresses()
        expect(store.addresses.length).toEqual(0)
    })

    //- Add the ability to change the sorting order(ascending or descending) in the list view.
    // Maybe add sorting ... so ASC and DESC -> sort((a,b) => a-b) & sort((a,b) => b-a)
    // only if I have time left
})
