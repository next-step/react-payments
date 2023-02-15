import CardList from '@pages/CardList/CardList';
import AddCard from '@pages/AddCard/AddCard';
import Complete from '@pages/Complete/Complete';
import { createBrowserRouter } from 'react-router-dom';

const ROUTERS = [
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

const router = createBrowserRouter(ROUTERS);

export default router;
