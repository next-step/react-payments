import { createBrowserRouter, Navigate } from 'react-router-dom';
import { CreateCardPage, CardListPage, CardCreateCompletePage } from './pages';
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
  {
    path: ROUTE.CARD_CREATE_COMPLETE,
    element: <CardCreateCompletePage />,
  },
]);

export default router;
