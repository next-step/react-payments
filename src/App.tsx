import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import routes from './routes';

import CardContext from './context/CardContext';

export default function App() {
  const router = createBrowserRouter(routes);

  return (
    <CardContext>
      <RouterProvider router={router} />
    </CardContext>
  );
}
