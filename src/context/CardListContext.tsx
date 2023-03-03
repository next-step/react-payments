import React, { useContext } from 'react';
import { CardStateType } from './CardContext';

export const CardListContext = React.createContext<CardStateType[] | null>(
  null
);

const initList: CardStateType[] = [
  {
    digits: { digit1: 1111, digit2: 2222, digit3: 1111, digit4: 2222 },
    expire: '04/21',
    name: 'SEYOUNG',
    cvc: '123',
    passwords: { password1: '1', password2: '2' },
  },
];

export const CardListProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <CardListContext.Provider value={initList}>
      {children}
    </CardListContext.Provider>
  );
};

export const useCardListState = () => {
  const state = useContext(CardListContext);
  if (!state) throw new Error('Cannot find CardListProvider');
  return state;
};
