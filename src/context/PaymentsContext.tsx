import { createContext, useState } from 'react';

interface PaymentsProviderProps {
  children: React.ReactNode;
}

interface CardData {
  id: Date;
  bank?: string;
  num1?: string;
  num2?: string;
  num3?: string;
  num4?: string;
  holder: string;
  expiry?: string;
  alias?: string;
}

type AddCard = (cardData: CardData) => void;
type RemoveCard = (cardId: Date) => void;
type AddAlias = (alias: string) => void;

interface PaymentsContextValue {
  cardList: CardData[];
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
  const [cardList, setCardList] = useState<CardData[]>([]);

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
