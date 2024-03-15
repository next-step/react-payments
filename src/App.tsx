import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import routes from './routes';

import CardProvider from './context/CardProvider';
import CardsProvider from './context/CardsProvider';

export default function App() {
  const router = createBrowserRouter(routes);

  return (
    <CardsProvider>
      <CardProvider>
        <RouterProvider router={router} />
      </CardProvider>
    </CardsProvider>
  );
}
