import { createContext, useState } from "react";
import { CardType } from "../types/common";

type ComponentProps = {
  children: JSX.Element | JSX.Element[] | string;
};

type ContextProps = {
  cards: CardType[];
  setCards: Function;
};

export const CardsContext = createContext<ContextProps | null>(null);

function CardsProvider({ children }: ComponentProps) {
  const [cards, setCards] = useState([]);

  return (
    <CardsContext.Provider value={{ cards, setCards }}>
      {children}
    </CardsContext.Provider>
  );
}

export default CardsProvider;
