import { createBrowserRouter } from 'react-router-dom';
import { New, List, Example } from '@/pages';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <List />,
    },
    {
      path: '/new',
      element: <New />,
    },
    {
      path: '/example',
      element: <Example />,
    },
  ],
  {
    basename: '/react-payments',
  }
);

export default router;
