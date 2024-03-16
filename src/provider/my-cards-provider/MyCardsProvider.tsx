import { CardBrand, CardStateType } from '@/domain/type';
import { PropsWithChildren, createContext, useState } from 'react';

type CardListType = CardStateType & CardBrand;
interface MyCardListType {
  myCardList: CardListType[];
  addCard: (card: CardListType) => void;
}

const initialContext: MyCardListType = {
  myCardList: [],
  addCard: () => undefined,
};

export const MyCardsContext = createContext(initialContext);

const MyCardsProvider = ({ children }: PropsWithChildren) => {
  const [myCardList, setMyCardList] = useState<CardListType[]>([]);
  const addCard = (card: CardListType) => {
    setMyCardList((prev) => [card, ...prev]);
  };
  return (
    <MyCardsContext.Provider value={{ myCardList, addCard }}>{children}</MyCardsContext.Provider>
  );
};

export default MyCardsProvider;
