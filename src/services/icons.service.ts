import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faXmark,
  faCheck,
  faCircleCheck,
  faCircleExclamation,
  faCircleXmark,
  faUser,
  faHandshake,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

import { faStar } from '@fortawesome/free-regular-svg-icons';

export default function initIcons() {
  library.add(
    faXmark,
    faCheck,
    faCircleCheck,
    faCircleExclamation,
    faCircleXmark,
    faUser,
    faHandshake,
    faPhone,
    faStar,
  );
}
