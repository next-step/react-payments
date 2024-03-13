import { createContext, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import routes from './routes';

import { CardType } from './types/CardFormType';

export default function App() {
  const [cards, setCards] = useState<CardType[]>();

  const CardContext = createContext(cards);

  const router = createBrowserRouter(routes);

  return (
    <CardContext.Provider value={cards}>
      <RouterProvider router={router} />
    </CardContext.Provider>
  );
}
