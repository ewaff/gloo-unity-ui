import { _mock } from './_mock';

// OVERVIEW
// ----------------------------------------------------------------------

export const _appStreams = ['Germany', 'England', 'France', 'Korean', 'USA'].map(
  (country, index) => ({
    id: _mock.id(index),
    countryName: country,
    android: _mock.number.nativeL(index),
    windows: _mock.number.nativeL(index + 1),
    apple: _mock.number.nativeL(index + 2),
    countryCode: ['de', 'gb', 'fr', 'kr', 'us'][index],
  })
);

export const _appEngager = [...Array(3)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.fullName(index),
  avatarUrl: _mock.image.avatar(index),
  totalFavorites: _mock.number.nativeL(index),
}));

export const _appInvoices = [...Array(5)].map((_, index) => {
  const category = ['AR', 'AP', 'Assets', 'Services', 'Supplies'][index];

  const status = ['paid', 'out of date', 'progress', 'paid', 'paid'][index];

  return {
    id: _mock.id(index),
    invoiceNumber: `INV-199${index}`,
    price: _mock.number.price(index),
    category,
    status,
  };
});

// ANALYTIC
// ----------------------------------------------------------------------

export const _analyticTraffic = [
  {
    value: 'facebook',
    label: 'Facebook',
    total: _mock.number.nativeL(1),
  },
  {
    value: 'google',
    label: 'Google',
    total: _mock.number.nativeL(2),
  },
  {
    value: 'linkedin',
    label: 'Linkedin',
    total: _mock.number.nativeL(3),
  },
  {
    value: 'twitter',
    label: 'Twitter',
    total: _mock.number.nativeL(4),
  },
];
