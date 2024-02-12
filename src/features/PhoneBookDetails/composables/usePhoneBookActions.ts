import axios from 'axios';
import { useRouter } from 'vue-router';
import { createToaster } from '@meforma/vue-toaster';

import { phoneBookAddressToPerson } from '@/lib/converter';

import type { Person, PhoneBookAddress } from '@/features';

export default function usePhoneBookActions(address: PhoneBookAddress) {
  const router = useRouter();

  const handlePhoneBookUpdate = () => {
    // may look confusing...
    // I used this for testing in the local json - server (I mean the address.favorite ? true : false part)
    const updatedAddress = phoneBookAddressToPerson(address, !!address.favorite);

    axios
      .patch<Person>(`https://creaplus.free.beeceptor.com/persons/${updatedAddress.id}`, updatedAddress)
      .then(() => {
        router.push({
          name: 'home',
        });
        createToaster().success('Phone book updated');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handlePhoneBookDelete = () => {
    axios
      .delete(`https://creaplus.free.beeceptor.com/persons/${address.personId}`)
      .then(() => {
        router.back();
        createToaster().success('Phone book deleted');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return { handlePhoneBookUpdate, handlePhoneBookDelete };
}
