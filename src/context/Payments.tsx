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

interface ProviderProps {
  children: React.ReactNode;
}

export const PaymentsContextProvider = ({ children }: ProviderProps) => {
  const [cardList, setCardList] = useState<CardType[]>([]);

  // 카드 리스트에 추가
  const addCard = (currentCard) => {
    setCardList((prevCardList) => [...prevCardList, currentCard]);
  };

  // 카드 별칭 업데이트
  const updateAlias = (currentCard) => {
    const newCardList = cardList.map((card) => {
      if (currentCard.id === card.id) {
        return {
          ...currentCard,
        };
      }
      return card;
    });
    setCardList(newCardList);
  };

  // 카드 삭제
  const removeCard = (currentCard) => {
    const newCardList = cardList.filter((card) => card.id !== currentCard.id);
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
