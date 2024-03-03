import { createContext, useState, useContext, PropsWithChildren, useMemo } from 'react';

type CardState = {
  cardNumber: string;
  expirationDate: string;
  ownerName: string;
  securityCode: string;
  label: string;
  color: string;
  description: string;
};

type CardContextType = {
  card: CardState;
  ownerCards: CardState[];
  setCard: (card: CardState) => void;
  resetCurrentCard: () => void;
  addCardToOwner: (card: CardState) => void;
};

const CardContext = createContext<CardContextType | null>(null);

export const CardProvider = ({ children }: PropsWithChildren) => {
  const [card, setCard] = useState<CardState>({
    cardNumber: '',
    expirationDate: '',
    ownerName: '',
    securityCode: '',
    label: '',
    color: '',
    description: '',
  });

  const [ownerCards, setOwnerCards] = useState<CardState[]>([]);

  const resetCurrentCard = () => {
    setCard({
      cardNumber: '',
      expirationDate: '',
      ownerName: '',
      securityCode: '',
      description: '',
      label: '',
      color: '',
    });
  };

  const addCardToOwner = (card: CardState) => {
    setOwnerCards((prevCards) => [...prevCards, card]);
  };

  const contextValue = useMemo(
    () => ({
      card,
      ownerCards,
      setCard,
      resetCurrentCard,
      addCardToOwner,
    }),
    [card, ownerCards],
  );

  return <CardContext.Provider value={contextValue}>{children}</CardContext.Provider>;
};

export const useCard = () => {
  const context = useContext(CardContext);
  if (context === null) {
    throw new Error('useCard는 CardProvider 하위에서 사용되어야 합니다.');
  }
  return context;
};
