import { CardList, CardAdd, CardCompleted } from '@/pages';
import { ROUTES } from '@/constants/routes';

const routes = [
  {
    path: ROUTES.CARD.LIST,
    element: <CardList />,
  },
  {
    path: ROUTES.CARD.ADD,
    element: <CardAdd />,
  },
  {
    path: ROUTES.CARD.COMPLETED,
    element: <CardCompleted />,
  },
];

export default routes;
