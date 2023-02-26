import { createContext, PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { isEqual } from 'lodash';

import { Card, CardNumber } from '@/types/card';

type InitValue = {
  cardList: Card[];
  handleClickAdd: (card: Card) => void;
  handleClickDelete: (cardNumber: CardNumber) => void;
};

const initValue: InitValue = {
  cardList: [],
  handleClickAdd: () => null,
  handleClickDelete: () => null,
};

export const CardListContext = createContext(initValue);

export default function CardListProvider({ children }: PropsWithChildren) {
  const [cardList, setCardList] = useState<Card[]>([]);

  const handleClickAdd = useCallback((card: Card) => {
    setCardList((prevCardList) => {
      const 이미등록된카드인덱스 = prevCardList.findIndex((prevCard) => isEqual(prevCard.cardNumber, card.cardNumber));
      if (이미등록된카드인덱스 !== -1) {
        prevCardList[이미등록된카드인덱스] = card;
        return [...prevCardList];
      }

      return [card, ...prevCardList];
    });
  }, []);

  const handleClickDelete = useCallback((cardNumber: CardNumber) => {
    setCardList((prevCardList) => prevCardList.filter((prevCard) => !isEqual(prevCard.cardNumber, cardNumber)));
  }, []);

  const contextValue = useMemo(
    () => ({ cardList, handleClickAdd, handleClickDelete }),
    [cardList, handleClickAdd, handleClickDelete],
  );

  return <CardListContext.Provider value={contextValue}>{children}</CardListContext.Provider>;
}
