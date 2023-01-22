import {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ICard } from "../../domain";
import { myCardsStorage } from "../../storage";

interface IMyCardsContext {
  myCards: ICard[];
  addCard: (card: ICard) => void;
  deleteCard: (id: string) => void;
}

const initValue: IMyCardsContext = {
  myCards: [],
  addCard: () => null,
  deleteCard: () => null,
};

export const MyCardsContext = createContext(initValue);

export default function MyCardsProvider({ children }: PropsWithChildren) {
  const [myCards, setMyCards] = useState(myCardsStorage.getData());

  const addCard = useCallback((card: ICard) => {
    setMyCards((myCards) => [...myCards, card]);
  }, []);

  const deleteCard = useCallback((id: string) => {
    setMyCards((myCards) => myCards.filter((card) => card.id !== id));
  }, []);

  const contextValue = useMemo(
    () => ({ myCards, addCard, deleteCard }),
    [myCards, addCard, deleteCard]
  );

  useEffect(() => {
    myCardsStorage.setData(myCards);
  }, [myCards]);

  return (
    <MyCardsContext.Provider value={contextValue}>
      {children}
    </MyCardsContext.Provider>
  );
}
