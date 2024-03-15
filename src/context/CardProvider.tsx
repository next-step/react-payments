import { PropsWithChildren, createContext, useState } from 'react';

import { CardType } from '../types/CardFormType';

type InitialCard = {
  card: CardType;
  addCard: (card: CardType) => void;
};

const initialCard: InitialCard = {
  card: {} as CardType,
  addCard: () => null,
};

export const CardContext = createContext(initialCard);

export default function CardProvider({ children }: PropsWithChildren) {
  const [card, setCard] = useState<CardType>({} as CardType);

  const addCard = (card: CardType) => {
    setCard(card);
  };

  return (
    <CardContext.Provider value={{ card, addCard }}>
      {children}
    </CardContext.Provider>
  );
}
