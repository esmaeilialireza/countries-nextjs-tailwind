import { lazy } from 'react';
import { paths } from './paths';

const CountriesPage = lazy(() => import('pages/countries'));
const CountryDetails = lazy(() => import('pages/country-details'));

export const countryRoutes = [
  {
    path: paths.countries.root,
    element: <CountriesPage />,
  },
  {
    path: `${paths.countries.root}/:name`,
    element: <CountryDetails />,
  },
];
