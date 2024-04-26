import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { countryRoutes } from './country';
import { DEFAULT_ROUTE } from 'config';

const Page404 = lazy(() => import('pages/404'));

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to={DEFAULT_ROUTE} replace />,
    },
    ...countryRoutes,
    // No match 404
    { path: '*', element: <Page404 /> },
  ]);
}
