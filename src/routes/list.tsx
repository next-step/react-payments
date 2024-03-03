import { RouteObject } from 'react-router-dom';
import ListPage from '../pages/list/ListPage.tsx';

const ListRoute: RouteObject = {
  path: '/list',
  element: <ListPage />,
};

export default ListRoute;
