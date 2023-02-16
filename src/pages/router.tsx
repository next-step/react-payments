import { createBrowserRouter, Navigate } from 'react-router-dom';
import CardListPage from './CardListPage';
import CreateCardPage from './CreateCardPage';

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
