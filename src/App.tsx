import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AddCard, CardList, Complete } from '@pages';

import './styles/index.css';

import type { ChangeEvent, FormEvent } from 'react';
import type { CardInformation } from './types';
import { ROUTES } from './constants';
import { CardFormProvider } from './context/CardFormContext';

const initCardInformation = {
  cardNumber1: '',
  cardNumber2: '',
  cardNumber3: '',
  cardNumber4: '',
  year: '',
  month: '',
  cvc: '',
  password1: '',
  password2: '',
  cardOwner: '',
  nickname: '',
};

function App() {
  const [cardInformation, setCardInformation] = useState<CardInformation>(initCardInformation);

  const handleCardInformation = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, validity } = e.target;
    if (!validity.valid) return;

    setCardInformation(prev => ({ ...prev, [name]: value }));
  };

  const initializedState = () => {
    setCardInformation(initCardInformation);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    initializedState();
  };

  const routes = [
    {
      path: ROUTES.HOME,
      element: <CardList />,
    },
    {
      path: ROUTES.ADD,
      element: <AddCard cardInformation={cardInformation} onChange={handleCardInformation} onSubmit={onSubmit} />,
    },
    {
      path: ROUTES.COMPLETE,
      element: <Complete />,
    },
  ];

  const router = createBrowserRouter(routes);

  return (
    <CardFormProvider>
      <RouterProvider router={router} />;
    </CardFormProvider>
  );
}

export default App;
