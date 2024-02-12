import type { Person, PhoneBookAddress } from '@/features'

export function personToPhoneBookAddress(person: Person): PhoneBookAddress {
    return {
        name: person.first_name + ' ' + person.last_name,
        phoneNumber: person.phone_number,
        personId: person.id,
        favorite: person.favorite
    }
}

export function phoneBookAddressToPerson(
    phoneBookAddress: PhoneBookAddress,
    favorite = false
): Person {
    const nameParts = phoneBookAddress.name.split(' ');

    const firstName = nameParts[0];
    const lastName = nameParts.length > 2 ? nameParts.slice(1).join(' ') : nameParts[1];

    return {
        id: phoneBookAddress.personId,
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneBookAddress.phoneNumber,
        favorite
    }
}
