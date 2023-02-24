import { CardInformation } from '@/types';
import { createContext, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

type CardList = CardInformation[];

const initialCardList: CardList = [];

type CardListHandler = {
  addCard(card: CardInformation): void;
};

const CardListContext = createContext<CardList | null>(null);
const CardListHandlerContext = createContext<CardListHandler | null>(null);

interface CardListContextProps {
  children: ReactNode;
}

function useCardList() {
  const value = useContext(CardListContext);

  if (!value) {
    throw new Error('useCardList는 CardListProvider에서 사용해야 합니다');
  }

  return value;
}

function useCardListHandler() {
  const value = useContext(CardListHandlerContext);

  if (!value) {
    throw new Error('useCardListHandler CardListProvider에서 사용해야 합니다');
  }

  return value;
}

function CardListProvider({ children }: CardListContextProps) {
  const [cardList, setCardList] = useState(initialCardList);

  const handlers = useMemo(
    () => ({
      addCard(newCard: CardInformation) {
        setCardList(prev => [...prev, newCard]);
      },
    }),
    [],
  );

  return (
    <CardListHandlerContext.Provider value={handlers}>
      <CardListContext.Provider value={cardList}>{children}</CardListContext.Provider>
    </CardListHandlerContext.Provider>
  );
}

export { CardListProvider, CardListContext, useCardList, useCardListHandler };
