import { _id } from 'src/_mock/assets';

// ----------------------------------------------------------------------

const MOCK_ID = _id[1];

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------

export const paths = {
  page403: '/error/403',
  page404: '/error/404',
  page500: '/error/500',
  // AUTH
  auth: {
    signIn: `${ROOTS.AUTH}/sign-in`,
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    mail: `#`,
    chat: `${ROOTS.DASHBOARD}/chat`,
    calendar: `#`,
    general: {
      interactions: `${ROOTS.DASHBOARD}/interactions`,
      analytics: `${ROOTS.DASHBOARD}/analytics`,
      accounting: `#`,
    },
    user: {
      root: `${ROOTS.DASHBOARD}/user`,
    },
  },
};
