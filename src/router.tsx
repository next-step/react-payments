import { createBrowserRouter, Navigate } from 'react-router-dom';
import { CreateCardPage, CardListPage } from './pages';
import { ROUTE } from './constants/route';

const router = createBrowserRouter([
  {
    path: ROUTE.HOME,
    element: <Navigate replace to={ROUTE.CARD} />,
  },
  {
    path: ROUTE.CARD,
    element: <CardListPage />,
  },
  { path: ROUTE.CARD_CREATE, element: <CreateCardPage /> },
]);

export default router;
