import { createContext, useState, useContext, PropsWithChildren, useMemo } from 'react';
import type { CardState } from '@/card/types';

const INITIAL_CARD_STATE: CardState = {
  cardNumber: '0000 0000 0000 0000',
  expirationDate: '00 00',
  ownerName: '',
  securityCode: '000',
  password: '0000',
  label: '',
  color: '',
  description: '',
  createdTimestamp: 0,
};

type CardContextType = {
  card: CardState;
  ownerCards: CardState[];
  setCard: (card: CardState) => void;
  resetCurrentCard: () => void;
  addCardToOwner: (card: CardState) => void;
  editCardToOwner: (card: CardState) => void;
  removeCardFromOwner: (card: CardState) => void;
  isCardExist: (card: CardState) => boolean;
};

const CardContext = createContext<CardContextType | null>(null);

export const CardProvider = ({
  children,
  initialOwnerCards,
  cardStorageKey,
}: PropsWithChildren & {
  initialOwnerCards?: CardState[];
  cardStorageKey: string;
}) => {
  const [card, setCard] = useState<CardState>(INITIAL_CARD_STATE);
  const [ownerCards, setOwnerCards] = useState<CardState[]>(initialOwnerCards || []);

  const resetCurrentCard = () => {
    setCard(INITIAL_CARD_STATE);
  };

  const addCardToOwner = (card: CardState) => {
    setOwnerCards((prevCards) => [...prevCards, card]);
    localStorage.setItem(cardStorageKey, JSON.stringify([...ownerCards, card]));
  };

  const editCardToOwner = (card: CardState) => {
    const editedOwnerCards = ownerCards.map((prevCard) =>
      prevCard.cardNumber === card.cardNumber ? { ...card } : prevCard,
    );
    setOwnerCards(editedOwnerCards);
    localStorage.setItem(cardStorageKey, JSON.stringify(editedOwnerCards));
  };

  const removeCardFromOwner = (card: CardState) => {
    const removedOwnerCards = ownerCards.filter((prevCard) => prevCard.cardNumber !== card.cardNumber);
    setOwnerCards(removedOwnerCards);
    localStorage.setItem(cardStorageKey, JSON.stringify(removedOwnerCards));
  };

  const isCardExist = (card: CardState) => ownerCards.some((ownerCard) => ownerCard.cardNumber === card.cardNumber);

  const ownerCardsDescending = useMemo(
    () => ownerCards.sort((a, b) => b.createdTimestamp - a.createdTimestamp),
    [ownerCards],
  );

  const contextValue = useMemo(
    () => ({
      card,
      ownerCards: ownerCardsDescending,
      setCard,
      resetCurrentCard,
      addCardToOwner,
      editCardToOwner,
      removeCardFromOwner,
      isCardExist,
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
