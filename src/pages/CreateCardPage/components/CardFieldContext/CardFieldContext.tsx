import { CardField } from '@/types';
import React, { createContext, useContext, useMemo, useReducer } from 'react';
import cardFieldReducer, { CardFieldAction } from './CardFieldReducer';

export const CardFieldContext = createContext<CardField | null>(null);
export const CardFieldDispatchContext =
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

type CardFieldProviderProps = { children: JSX.Element | JSX.Element[] };

export const useCardFieldContext = () => {
  const context = useContext(CardFieldContext);
  if (!context) {
    throw new Error(
      'useCardFieldContext must be used within a CardFieldProvider'
    );
  }
  return context;
};

export const useCardFieldDispatchContext = () => {
  const context = useContext(CardFieldDispatchContext);
  if (!context) {
    throw new Error(
      'useCardFieldDispatchContext must be used within a CardFieldProvider'
    );
  }
  return context;
};
