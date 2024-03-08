import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import routes from './routes';

export default function App() {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}
