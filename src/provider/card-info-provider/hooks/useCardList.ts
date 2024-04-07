import { CardBrand, CardStateType } from '@/domain/type';
import { useState } from 'react';

type CardListType = CardStateType & CardBrand;

const useCardList = () => {
  const [myCardList, setMyCardList] = useState<CardListType[]>([]);

  const addCard = (card: CardListType) => setMyCardList((prev) => [...prev, card]);

  const removeCard = (i: number) => setMyCardList(myCardList.filter((_, idx) => idx !== i));

  return { myCardList, addCard, removeCard };
};
export default useCardList;
