import { createContext, PropsWithChildren, useState } from 'react';
import type { PartialCreditCardType } from 'types/CreditCard';

export const CardListContext = createContext({
  cardList: [] as PartialCreditCardType[],
  addCardInfo: (data: PartialCreditCardType) => {},
});
CardListContext.displayName = 'CardListContext';

const CardListProvider = ({ children }: PropsWithChildren) => {
  const [cardList, setCardList] = useState<PartialCreditCardType[]>([]);

  const addCardInfo = (data: PartialCreditCardType) => {
    setCardList((prev) => [...prev, data]);
  };

  return (
    <CardListContext.Provider value={{ cardList, addCardInfo }}>
      {children}
    </CardListContext.Provider>
  );
};

export default CardListProvider;
