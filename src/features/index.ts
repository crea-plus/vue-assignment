// as per spec this is the result of the API call
export interface Person {
    id: number
    first_name: string
    last_name: string
    phone_number: string
    favorite: boolean
}

// This is just a convenience type to make it easier to work with the data.
// I also used cammel case for the property names, as I am used to that.
// Did not find any rules in the eslint config about this, so I hope it is ok.
export interface PhoneBookAddress {
    personId: number // reference to the initial object id (Person)
    name: string
    phoneNumber: string
    favorite: boolean
}
