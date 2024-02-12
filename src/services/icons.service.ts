import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faXmark,
  faCheck,
  faCircleCheck,
  faCircleExclamation,
  faCircleXmark,
  faUser,
  faHandshake,
  faStar,
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

export default function initIcons() {
  library.add(
    faXmark,
    faCheck,
    faCircleCheck,
    faCircleExclamation,
    faCircleXmark,
    faUser,
    faHandshake,
    faStar,
    faChevronRight,
    faChevronLeft,
  );
}
