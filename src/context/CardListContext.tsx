import React, { createContext, ReactNode, useContext, useState } from 'react';
import { initCardList } from '../data/init';
import { CardInfoType, CardListDispatchType } from '../type/card';

export const CardListContext = createContext<CardInfoType[] | null>(null);
export const CardListDispatchContext =
  createContext<CardListDispatchType | null>(null);

export const CardListProvider = ({ children }: { children: ReactNode }) => {
  const [cardList, setCardList] = useState(initCardList);
  const addCard = (cardInfo: CardInfoType) => {
    setCardList([...cardList, { ...cardInfo }]);
  };
  const updateNickname = (selectIdx: number, value: string) => {
    const updatedCardList = cardList.map((card, index) => {
      if (index === selectIdx) {
        return { ...card, nickname: value };
      } else {
        return card;
      }
    });
    setCardList(updatedCardList);
  };
  const deleteCard = (selectIdx: number) => {
    const updatedCardList = cardList.filter((_, index) => selectIdx !== index);
    setCardList(updatedCardList);
  };

  return (
    <CardListContext.Provider value={cardList}>
      <CardListDispatchContext.Provider
        value={{ addCard, updateNickname, deleteCard }}
      >
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

export const useCardListDispatch = () => {
  const dispatch = useContext(CardListDispatchContext);
  if (!dispatch) throw new Error('Cannot find CardListDispatchContext');
  return dispatch;
};
