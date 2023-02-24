import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AddCard, CardList, Complete, NotFound } from '@pages';

import { ROUTES } from './constants';
import { CardFormProvider, useCardForm, useCardFormHandler } from './context/CardFormContext';
import { CardListProvider, useCardListHandler } from './context/CardListContext';

import type { FormEvent } from 'react';

import './styles/index.css';

function App() {
  const { addCard } = useCardListHandler();
  const card = useCardForm();
  const { onReset } = useCardFormHandler();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addCard(card);
    onReset();
  };

  const routes = [
    {
      path: ROUTES.HOME,
      element: <CardList />,
    },
    {
      path: ROUTES.ADD,
      element: <AddCard onSubmit={onSubmit} />,
    },
    {
      path: ROUTES.COMPLETE,
      element: <Complete />,
    },
    {
      path: ROUTES.NOT_FOUND,
      element: <NotFound />,
    },
  ];

  const router = createBrowserRouter(routes);

  return (
    <CardListProvider>
      <CardFormProvider>
        <RouterProvider router={router} />;
      </CardFormProvider>
    </CardListProvider>
  );
}

export default App;
