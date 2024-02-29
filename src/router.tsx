import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
    },
  ],
  {
    basename: '/react-payments',
  }
);

export default router;
