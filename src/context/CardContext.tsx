import React, { createContext, ReactNode, useContext, useState } from 'react';
import { ICard } from '../domain/payments/types';
import { CARD_DEFAULT_VALUE } from '../domain/payments/constants';

const CardValueContext = createContext<ICard | null>(null);
const CardValueUpdatingContext = createContext<((card: ICard) => void) | null>(null);

export function CardContextProvider({ children }: { children: ReactNode }) {
  const [card, setCard] = useState<ICard>(CARD_DEFAULT_VALUE);

  return (
    <CardValueContext.Provider value={card}>
      <CardValueUpdatingContext.Provider value={setCard}>{children}</CardValueUpdatingContext.Provider>
    </CardValueContext.Provider>
  );
}

export function useCardContext() {
  const card = useContext(CardValueContext);
  const setCard = useContext(CardValueUpdatingContext);

  if ([card, setCard].some((o) => o === null)) {
    throw new Error('CardValueContext 초기화 작업이 진행되지 않았습니다.' + card + setCard);
  }
  return {
    card,
    setCard,
  };
}
