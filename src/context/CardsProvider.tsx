import { PropsWithChildren, createContext, useState } from 'react';

import { CardType } from '../types/CardFormType';

type InitialCards = {
  cards: CardType[];
  addCardInList: (card: CardType) => void;
};

const initialCards: InitialCards = {
  cards: [],
  addCardInList: () => null,
};

export const CardsContext = createContext(initialCards);

export default function CardsProvider({ children }: PropsWithChildren) {
  const [cards, setCards] = useState<CardType[]>([]);

  const addCardInList = (card: CardType) => {
    setCards((cards) => [...cards, card]);
  };

  return (
    <CardsContext.Provider value={{ cards, addCardInList }}>
      {children}
    </CardsContext.Provider>
  );
}
