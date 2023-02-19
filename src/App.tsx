import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AddCard, CardList, Complete } from '@pages';
import './styles/index.css';
import { ChangeEvent, FormEvent, useState } from 'react';
import { CardInformation } from './types';

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
      path: '/',
      element: <CardList />,
    },
    {
      path: '/add',
      element: <AddCard cardInformation={cardInformation} onChange={handleCardInformation} onSubmit={onSubmit} />,
    },
    {
      path: '/complete',
      element: <Complete />,
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;
