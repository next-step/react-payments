import { CardInformation } from '@/types';
import { PropsWithChildren, createContext, useContext, useMemo, useState } from 'react';

type CardList = CardInformation[];

const initialCardList: CardList = [];

type CardListHandler = {
  addCard(card: CardInformation): void;
  deleteCard(id: string): void;
  updateCard(id: string, form: Partial<CardInformation>): void;
};

const CardListContext = createContext<CardList | null>(null);
const CardListHandlerContext = createContext<CardListHandler | null>(null);

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

function CardListProvider({ children }: PropsWithChildren) {
  const [cardList, setCardList] = useState(initialCardList);

  const handlers = useMemo(
    () => ({
      addCard(newCard: CardInformation) {
        setCardList(prev => [newCard, ...prev]);
      },
      deleteCard(id: string) {
        setCardList(prev => prev.filter(card => card.id !== id));
      },
      updateCard(id: string, form: Partial<CardInformation>) {
        setCardList(prev => {
          return [...prev].map(card => {
            if (card.id === id) {
              return { ...card, ...form };
            }
            return card;
          });
        });
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
