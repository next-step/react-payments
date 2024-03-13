import { PropsWithChildren, createContext, useState } from 'react';
import { CardType } from '../types/CardFormType';

export const CardContext = createContext<CardType[]>([]);

export default function CardProvider({ children }: PropsWithChildren) {
  const [cards, setCards] = useState<CardType[]>([]);

  const handleChangeCards = (cards: CardType[]) => {
    setCards(cards);
  };

  return (
    <CardContext.Provider value={{ cards, handleChangeCards }}>
      {children}
    </CardContext.Provider>
  );
}
