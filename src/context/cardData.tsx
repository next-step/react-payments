import React, { createContext, ReactChild, useContext, useState } from "react";
import { CardData } from "@common/defines";

interface IContextState {
  cardData: CardData;
  setCardData: React.Dispatch<React.SetStateAction<CardData>>;
}

const defaultContextState: IContextState = {
  cardData: {},
  setCardData: () => {},
};

export const CardDataContext =
  createContext<IContextState>(defaultContextState);

export function CardDataProvider({ children }: { children: ReactChild }) {
  const [cardData, setCardData] = useState<CardData>({});
  return (
    <CardDataContext.Provider value={{ cardData, setCardData }}>
      {children}
    </CardDataContext.Provider>
  );
}

export function useCardData() {
  return useContext(CardDataContext);
}
