import React, {
  createContext,
  Dispatch,
  ReactChild,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { CardData } from "@common/defines";

interface IContextState {
  tempCardData: CardData;
  setTempCardData: Dispatch<SetStateAction<CardData>>;
  cardDataList: CardData[];
  addCardData: (newCardData: CardData) => void;
  updateCardData: (id: number, updatedCardData: CardData) => void;
  removeCardData: (id: number) => void;
}

const defaultContextState: IContextState = {
  tempCardData: {},
  setTempCardData: () => {},
  cardDataList: [],
  addCardData: (newCardData: CardData) => {},
  updateCardData: (id: number, updatedCardData: CardData) => {},
  removeCardData: (id: number) => {},
};

export const CardDataContext =
  createContext<IContextState>(defaultContextState);

export function CardDataProvider({ children }: { children: ReactChild }) {
  const [cardDataList, setCurDataList] = useState<CardData[]>([]);
  const [tempCardData, setTempCardData] = useState<CardData>({});

  const addCardData = (newCardData: CardData) => {
    setCurDataList([...cardDataList, newCardData]);
  };

  const updateCardData = (id: number, updatedCardData: CardData) => {
    setCurDataList(
      cardDataList.map((cardData) =>
        cardData.id === updatedCardData.id ? updatedCardData : cardData
      )
    );
  };

  const removeCardData = (id: number) => {
    setCurDataList(cardDataList.filter((cardData) => id !== cardData.id));
  };

  return (
    <CardDataContext.Provider
      value={{
        tempCardData,
        setTempCardData,
        cardDataList,
        addCardData,
        updateCardData,
        removeCardData,
      }}
    >
      {children}
    </CardDataContext.Provider>
  );
}

export function useCardData() {
  return useContext(CardDataContext);
}
