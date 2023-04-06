import React, { createContext, ReactNode, useContext, useState } from 'react';
import { ICard } from '../domain/payments/types';

export const CARD_DEFAULT_VALUE: ICard = {
  numbers: '1234-1234-1234-1234'.split('-'),
  cardName: '삼성카드 taptap',
  expiredMonth: '12',
  expiredYear: '40',
  alias: '삼성카드 taptap',
  cvc: '098',
  owner: '홍길동',
  password: '7890',
};

const CardValueContext = createContext<ICard | null>(null);
const CardValueUpdatingContext = createContext<((card: ICard) => void) | null>(null);

export function CardContextProvider({ children }: { children: ReactNode }) {
  const [card, setCard] = useState<ICard | null>(CARD_DEFAULT_VALUE);

  const updateCard = (card: ICard) => setCard(card);

  return (
    <CardValueContext.Provider value={card}>
      <CardValueUpdatingContext.Provider value={updateCard}>{children}</CardValueUpdatingContext.Provider>
    </CardValueContext.Provider>
  );
}

export function useCardContext() {
  const card = useContext(CardValueContext);
  const setCard = useContext(CardValueUpdatingContext);

  if ([card, setCard].some((o) => o === null)) {
    throw new Error('CardValueContext 초기화 작업이 진행되지 않았습니다.');
  }
  return {
    card,
    setCard,
  };
}
