import React, { Dispatch, useContext, useState } from 'react';
import { CardStateType } from './CardContext';

type ListDispatch = Dispatch<CardStateType[]>;
const initList: CardStateType[] = [
  {
    digits: { digit1: 1111, digit2: 2222, digit3: 1111, digit4: 2222 },
    expire: '04/21',
    name: 'SEYOUNG',
    cvc: '123',
    passwords: { password1: '1', password2: '2' },
  },
];

export const CardListContext = React.createContext<CardStateType[] | null>(
  null
);
export const CardListDispatchContext = React.createContext<ListDispatch | null>(
  null
);

export const CardListProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cardList, setCardList] = useState<CardStateType[]>(initList);

  return (
    <CardListContext.Provider value={cardList}>
      <CardListDispatchContext.Provider value={setCardList}>
        {children}
      </CardListDispatchContext.Provider>
    </CardListContext.Provider>
  );
};

export const useCardListState = () => {
  const state = useContext(CardListContext);

  if (!state) throw new Error('Cannot find CardListProvider');

  return state;
};
