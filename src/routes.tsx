import { CardList, CardAdd } from '@/pages';

const routes = [
  {
    path: '/',
    element: <CardList />,
  },
  {
    path: 'card-add',
    element: <CardAdd />,
  },
];

export default routes;
