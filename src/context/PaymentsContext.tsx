import { createContext, useState } from 'react';

import { CardProps } from '../components/Card/Card';

interface PaymentsProviderProps {
  children: React.ReactNode;
}

interface CreditCard extends CardProps {
  id: Date;
  alias?: string;
}

type AddCard = (cardData: CreditCard) => void;
type RemoveCard = (cardId: Date) => void;
type AddAlias = (alias: string) => void;

interface PaymentsContextValue {
  cardList: CreditCard[];
  addCard: AddCard;
  removeCard: RemoveCard;
  addAlias: AddAlias;
}

export const PaymentsContext = createContext<PaymentsContextValue>({
  cardList: [],
  addCard: () => {},
  removeCard: () => {},
  addAlias: () => {},
});

export const PaymentsProvider = ({ children }: PaymentsProviderProps) => {
  const [cardList, setCardList] = useState<CreditCard[]>([]);

  const addCard: AddCard = (cardData) => {
    setCardList((prevCardList) => [...prevCardList, cardData]);
  };

  const removeCard: RemoveCard = (cardId) => {
    setCardList((prevCardList) =>
      prevCardList.filter((card) => card.id !== cardId)
    );
  };

  const addAlias: AddAlias = (alias) => {
    setCardList((prevCardList) =>
      prevCardList.map((card, index) => {
        if (prevCardList.length - 1 === index) {
          return {
            ...card,
            alias,
          };
        }
        return card;
      })
    );
  };

  const paymentsContextValue: PaymentsContextValue = {
    cardList,
    addCard,
    removeCard,
    addAlias,
  };

  return (
    <PaymentsContext.Provider value={paymentsContextValue}>
      {children}
    </PaymentsContext.Provider>
  );
};
