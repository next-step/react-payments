import { createBrowserRouter } from 'react-router-dom';
import { New, List } from '@/pages';
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
      ],
    },
  ],
  {
    basename: '/react-payments',
  }
);

export default router;
