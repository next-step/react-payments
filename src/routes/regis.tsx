import { RouteObject } from 'react-router-dom';
import RegisPage from '../pages/regis/RegisPage.tsx';
import { PAGES } from './route.constant.ts';

const RegisRoute: RouteObject = {
  path: PAGES.REGIS,
  element: <RegisPage />,
};

export default RegisRoute;
