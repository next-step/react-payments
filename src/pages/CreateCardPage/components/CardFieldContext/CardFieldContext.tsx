import { CardField } from '@/types';
import React, { createContext, useContext, useMemo, useReducer } from 'react';
import cardFieldReducer, { CardFieldAction } from './CardFieldReducer';

const CardFieldContext = createContext<CardField | null>(null);
const CardFieldDispatchContext =
  createContext<React.Dispatch<CardFieldAction> | null>(null);

const initialState = {
  cardNumber: '',
  expirationMonth: '',
  expirationYear: '',
  ownerName: '',
  cvc: '',
  cardPassword: '',
};

export const CardFieldProvider = ({ children }: CardFieldProviderProps) => {
  const [cardField, dispatch] = useReducer(cardFieldReducer, initialState);
  const memoSetCardField = useMemo(() => dispatch, []);
  return (
    <CardFieldContext.Provider value={cardField}>
      <CardFieldDispatchContext.Provider value={memoSetCardField}>
        {children}
      </CardFieldDispatchContext.Provider>
    </CardFieldContext.Provider>
  );
};

type CardFieldProviderProps = { children: JSX.Element };

export const useCardFieldContext = () => useContext(CardFieldContext);
export const useCardFieldDispatchContext = () =>
  useContext(CardFieldDispatchContext);
