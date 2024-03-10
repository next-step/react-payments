import { CardStateType } from '@/domain/type';
import { PropsWithChildren, createContext, useState } from 'react';

interface MyCardListType {
  myCardList: CardStateType[];
  addCard: (card: CardStateType) => void;
}
const initialState: MyCardListType = {
  myCardList: [],
  addCard: () => undefined,
};

export const MyCardsContext = createContext(initialState);
const MyCardsProvider = ({ children }: PropsWithChildren) => {
  const [myCardList, setMyCardList] = useState<CardStateType[]>([]);
  const addCard = (card: CardStateType) => {
    setMyCardList((prev) => [...prev, card]);
  };
  return (
    <MyCardsContext.Provider value={{ myCardList, addCard }}>{children}</MyCardsContext.Provider>
  );
};

export default MyCardsProvider;
