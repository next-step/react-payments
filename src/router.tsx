import { createBrowserRouter, Navigate } from 'react-router-dom';
import { CreateCardPage, CardListPage } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate replace to="/card" />,
  },
  {
    path: '/card',
    element: <CardListPage />,
  },
  { path: '/card/create', element: <CreateCardPage /> },
]);

export default router;
