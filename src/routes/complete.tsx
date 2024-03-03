import { RouteObject } from 'react-router-dom';
import CompletePage from '../pages/complete/CompletePage.tsx';

export const CompleteRoute: RouteObject = {
  path: '/complete',
  element: <CompletePage />,
};
