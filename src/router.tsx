import { AddCard, CardList, Complete } from '@pages';

import { createBrowserRouter } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <CardList />,
  },
  {
    path: '/add',
    element: <AddCard />,
  },
  {
    path: '/complete',
    element: <Complete />,
  },
];

const router = createBrowserRouter(routes);

export default router;
