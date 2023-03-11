import { createContext, PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { isEqual } from 'lodash';

import { Card, CardNumber } from '@/types/card';

type InitValue = {
  cardList: Card[];
  getUniqueKey: (card: Card) => string;
  handleClickAdd: (card: Card) => void;
  handleClickDelete: (cardNumber: CardNumber) => void;
};

const initValue: InitValue = {
  cardList: [],
  getUniqueKey: () => '',
  handleClickAdd: () => null,
  handleClickDelete: () => null,
};

export const CardListContext = createContext(initValue);

export default function CardListProvider({ children }: PropsWithChildren) {
  const [cardList, setCardList] = useState<Card[]>([]);

  const getUniqueKey = useCallback((card: Card) => {
    const {
      cardNumber: { num1, num2, num3, num4 },
    } = card;

    return num1 + num2 + num3 + num4;
  }, []);

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
    () => ({ cardList, getUniqueKey, handleClickAdd, handleClickDelete }),
    [cardList, getUniqueKey, handleClickAdd, handleClickDelete],
  );

  return <CardListContext.Provider value={contextValue}>{children}</CardListContext.Provider>;
}
