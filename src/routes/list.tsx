import { RouteObject } from 'react-router-dom';
import ListPage from '../pages/list/ListPage.tsx';
import { PAGES } from './route.constant.ts';

const ListRoute: RouteObject = {
  path: PAGES.HOME,
  element: <ListPage />,
};

export default ListRoute;
