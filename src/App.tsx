import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import routes from './routes';

import CardContext from './context/CardProvider';
import CardsContext from './context/CardProvider';

export default function App() {
  const router = createBrowserRouter(routes);

  return (
    <CardsContext>
      <CardContext>
        <RouterProvider router={router} />
      </CardContext>
    </CardsContext>
  );
}
