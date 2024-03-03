import { RouteObject } from 'react-router-dom';
import CompletePage from '../pages/complete/CompletePage.tsx';
import { PAGES } from './route.constant.ts';

export const CompleteRoute: RouteObject = {
  path: PAGES.COMPLETE,
  element: <CompletePage />,
};
