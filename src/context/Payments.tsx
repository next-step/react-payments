/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState } from 'react';
import { CardType } from 'types';

type PaymentsContextType = {
  cardList: CardType[];
  addCard: (card: CardType) => void;
  updateAlias: (card: CardType) => void;
  removeCard: (card: CardType) => void;
};

export const PaymentsContext = createContext<PaymentsContextType>({
  cardList: [],
  addCard: function (card: CardType) {},
  updateAlias: function (card: CardType) {},
  removeCard: function (card: CardType) {},
});

export const PaymentsContextProvider = ({ children }) => {
  const [cardList, setCardList] = useState<CardType[]>([]);

  // 카드 리스트에 추가
  const addCard = (card: CardType) => {
    const newCardList = [...cardList, card];
    setCardList(newCardList);
  };

  // 카드 별칭 업데이트
  const updateAlias = (card: CardType) => {
    const newCardList = cardList.map((el) => {
      if (el.id === card.id) {
        return {
          ...card,
        };
      }
      return el;
    });
    setCardList(newCardList);
  };

  // 카드 삭제
  const removeCard = (card: CardType) => {
    const newCardList = cardList.filter((el: CardType) => el.id !== card.id);
    setCardList(newCardList);
  };

  const context = {
    cardList,
    addCard,
    updateAlias,
    removeCard,
  };
  return <PaymentsContext.Provider value={context}>{children}</PaymentsContext.Provider>;
};
