import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTES } from './constants';
import { CardList, AddCard, Complete, NotFound } from './pages';

const routes = [
  {
    path: ROUTES.HOME,
    element: <CardList />,
  },
  {
    path: ROUTES.ADD,
    element: <AddCard />,
  },
  {
    path: ROUTES.COMPLETE,
    element: <Complete />,
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFound />,
  },
];

const router = createBrowserRouter(routes);

function RootRouter() {
  return <RouterProvider router={router} />;
}

export default RootRouter;
