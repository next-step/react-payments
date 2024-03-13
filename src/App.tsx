import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import routes from './routes';

import { CardType } from './types/CardFormType';

export default function App() {
  const cards: CardType[] = [];

  const CardContext = React.createContext(cards);

  const router = createBrowserRouter(routes);

  return (
    <CardContext.Provider value={cards}>
      <RouterProvider router={router} />
    </CardContext.Provider>
  );
}
