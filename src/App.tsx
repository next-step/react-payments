import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import routes from './routes';

import CardsProvider from './context/CardsProvider';

export default function App() {
  const router = createBrowserRouter(routes);

  return (
    <CardsProvider>
      <RouterProvider router={router} />
    </CardsProvider>
  );
}
