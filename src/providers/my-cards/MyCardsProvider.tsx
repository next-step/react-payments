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
  saveCard: (card: ICard) => void;
  deleteCard: (id: string) => void;
}

interface IProps {
  initData?: ICard[];
}

const initValue: IMyCardsContext = {
  myCards: [],
  saveCard: () => null,
  deleteCard: () => null,
};

export const MyCardsContext = createContext(initValue);

export default function MyCardsProvider({
  children,
  initData = myCardsStorage.getData(),
}: PropsWithChildren<IProps>) {
  const [myCards, setMyCards] = useState(initData || []);

  const saveCard = useCallback((newCard: ICard) => {
    setMyCards((myCards) => {
      const existsCard = myCards.find((card) => card.id === newCard.id);
      if (existsCard) {
        return myCards.map((card) => (card === existsCard ? newCard : card));
      } else {
        return [...myCards, newCard];
      }
    });
  }, []);

  const deleteCard = useCallback((id: string) => {
    setMyCards((myCards) => myCards.filter((card) => card.id !== id));
  }, []);

  const contextValue = useMemo(
    () => ({ myCards, saveCard, deleteCard }),
    [myCards, saveCard, deleteCard]
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
