import { createBrowserRouter } from 'react-router-dom';
import { New, List, Example } from '@/pages';
import Layout from '@/layout';
import { Outlet } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      element: (
        <Layout>
          <Outlet />
        </Layout>
      ),
      children: [
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
    },
  ],
  {
    basename: '/react-payments',
  }
);

export default router;
