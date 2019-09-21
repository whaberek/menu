import {
  faUserCircle,
  faPlane,
  faCreditCard,
  faLifeRing,
  faPhoneAlt,
  faSignOutAlt,
  faQuestionCircle,
  faExclamationCircle
} from '@fortawesome/free-solid-svg-icons';

const mobileConstants = {
  profile: {
    label: 'Profile',
    icon: faUserCircle,
  },
  bookings: {
    label: 'My Bookings',
    icon: faPlane,
  },
  payments: {
    label: 'My Payments',
    icon: faCreditCard,
  },
  support: {
    label: 'Support',
    icon: faLifeRing,
  },
  contactUs: {
    label: 'Contact Us',
    icon: faPhoneAlt,
  },
  logout: {
    label: 'Log Out',
    icon: faSignOutAlt,
  },
  aboutUs: {
    label: isMobile => isMobile ? 'About' : 'About Us',
    icon: faQuestionCircle,
  },
  faq: {
    label: 'FAQ',
    icon: faExclamationCircle,
  },
};

const desktopConstants = {
  ...mobileConstants,
  home: {
    label: 'Home',
  },
  flights: {
    label: 'Flights',
  },
  resumeApp: {
    label: 'Resume Application',
  },
};

export { mobileConstants, desktopConstants };
