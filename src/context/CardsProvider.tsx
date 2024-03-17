import { PropsWithChildren, createContext, useState } from 'react';

import { CardType } from '../types/CardFormType';

type InitialCards = {
  cards: CardType[];
  getCardInList: (id: number) => CardType;
  addCardInList: (card: CardType) => void;
  editCardInList: (card: CardType) => void;
  deleteCardInList: (id: number) => void;
};

const initialCards: InitialCards = {
  cards: [],
  getCardInList: () => [],
  addCardInList: () => null,
  editCardInList: () => null,
  deleteCardInList: () => [],
};

export const CardsContext = createContext(initialCards);

export default function CardsProvider({ children }: PropsWithChildren) {
  const [cards, setCards] = useState<CardType[]>([]);

  const getCardInList = (id: number) => {
    const targetCard = cards.filter((preCard) => preCard.id === id)[0];

    return targetCard;
  };

  const addCardInList = (card: CardType) => {
    setCards([card, ...cards]);
  };

  const editCardInList = (card: CardType) => {
    const newCards = cards.map((preCard) =>
      preCard.id != card.id ? preCard : card
    );
    console.log(newCards);
    setCards(newCards);
  };

  const deleteCardInList = (id: number) => {
    console.log(cards.filter((preCard) => preCard.id != id));
    setCards(cards.filter((preCard) => preCard.id != id));
  };

  return (
    <CardsContext.Provider
      value={{
        cards,
        getCardInList,
        addCardInList,
        editCardInList,
        deleteCardInList,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
}
