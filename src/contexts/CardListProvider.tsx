import { createContext, PropsWithChildren, useRef, useState } from 'react';
import type { PartialCreditCardType } from 'types/CreditCard';

export const CardListContext = createContext({
  cardList: [] as PartialCreditCardType[],
  addCardInfo: (data: PartialCreditCardType) => {},
});
CardListContext.displayName = 'CardListContext';

const CardListProvider = ({ children }: PropsWithChildren) => {
  const id = useRef(1);
  const [cardList, setCardList] = useState<PartialCreditCardType[]>([]);

  const addCardInfo = (data: PartialCreditCardType) => {
    data['id'] = id.current;
    setCardList((prev) => [...prev, data]);
    id.current += 1;
  };

  return (
    <CardListContext.Provider value={{ cardList, addCardInfo }}>
      {children}
    </CardListContext.Provider>
  );
};

export default CardListProvider;
