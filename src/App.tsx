import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import routes from './routes';

import CardsProvider from './context/CardsProvider';
import CardProvider from './context/CardProvider';

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
