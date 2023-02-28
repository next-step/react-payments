import { CardInfo } from '@/types';
import React, { createContext, useReducer } from 'react';
import cardListReducer, { CardListAction } from './CardListReducer';

export const CardListContext =
  createContext<[CardInfo[], React.Dispatch<CardListAction>] | null>(null);

const initialState: CardInfo[] = [];

const CardListProvider = ({ children }: CardListProviderProps) => {
  const reducer = useReducer(cardListReducer, initialState);
  return (
    <CardListContext.Provider value={reducer}>
      {children}
    </CardListContext.Provider>
  );
};

type CardListProviderProps = { children: JSX.Element | JSX.Element[] };

export default CardListProvider;
