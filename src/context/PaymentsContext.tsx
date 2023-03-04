import { createContext, useState } from 'react';

import { CardProps } from '../components/Card/Card';

interface PaymentsProviderProps {
  children: React.ReactNode;
}

export interface CreditCard extends CardProps {
  id: Date;
  alias?: string;
}

type AddCard = (cardData: CreditCard) => void;
type RemoveCard = (cardId: Date) => void;
type UpdateAlias = (cardId: Date, alias: string) => void;

interface PaymentsContextValue {
  cardList: CreditCard[];
  addCard: AddCard;
  removeCard: RemoveCard;
  updateAlias: UpdateAlias;
}

export const PaymentsContext = createContext<PaymentsContextValue>({
  cardList: [],
  addCard: () => {},
  removeCard: () => {},
  updateAlias: () => {},
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

  const updateAlias: UpdateAlias = (cardId, alias) => {
    setCardList((prevCardList) =>
      prevCardList.map((card) => {
        if (card.id === cardId) {
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
    updateAlias,
  };

  return (
    <PaymentsContext.Provider value={paymentsContextValue}>
      {children}
    </PaymentsContext.Provider>
  );
};
