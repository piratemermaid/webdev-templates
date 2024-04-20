import { createBrowserRouter } from 'react-router-dom';

import Root from '../components/Root';
import ROUTES from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: ROUTES.map((route) => {
      return {
        path: route.path,
        element: <route.Component />,
      };
    }),
  },
]);

export default router;
