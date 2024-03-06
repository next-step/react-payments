import { createContext, useState, useContext, PropsWithChildren, useMemo } from 'react';
import { CardState } from '@/type';

const INITIAL_CARD_STATE: CardState = {
  cardNumber: ['', '', '', ''],
  expirationDate: ['', ''],
  ownerName: '',
  securityCode: '',
  label: '',
  color: '',
  description: '',
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
  const [card, setCard] = useState<CardState>(INITIAL_CARD_STATE);

  const [ownerCards, setOwnerCards] = useState<CardState[]>([]);

  const resetCurrentCard = () => {
    setCard(INITIAL_CARD_STATE);
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
