import {
  createContext,
  useState,
  useMemo,
  PropsWithChildren,
  useCallback,
  useEffect,
} from 'react';
import { CardInfo } from '../../types';
import {
  CARD_STORAGE_KEY,
  getLocalStorageItem,
  setLocalStorageItem,
} from '../../utils/localStorage';

interface CardListContextType {
  cardList: CardInfo[];
  saveCardList: (newCard: CardInfo) => void;
  deleteCard: (id: string) => void;
  getCard: (id: string) => void;
}

export const CardListContext = createContext<CardListContextType | undefined>(
  undefined
);

export const CardListProvider = ({ children }: PropsWithChildren) => {
  const [cardList, setCardList] = useState<CardInfo[]>(
    getLocalStorageItem({ key: CARD_STORAGE_KEY }) || []
  );

  const saveCardList = useCallback((newCard: CardInfo) => {
    newCard.id = Object.values(newCard.numbers).join('');
    newCard.createdAt = new Date().toISOString();

    setCardList((prevCardList) => {
      const existsCard = prevCardList.find((card) => card.id === newCard.id);
      if (existsCard) {
        return prevCardList
          .map((card) => (card === existsCard ? newCard : card))
          .sort((a, b) =>
            new Date(b.createdAt) > new Date(a.createdAt) ? 1 : -1
          );
      } else {
        return [newCard, ...prevCardList];
      }
    });
  }, []);

  const deleteCard = useCallback((id: string) => {
    setCardList((prevCardList) =>
      prevCardList.filter((card) => card.id !== id)
    );
  }, []);

  const getCard = useCallback(
    (id: string) => {
      return cardList.find((card) => card.id === id);
    },
    [cardList]
  );

  useEffect(() => {
    setLocalStorageItem({ key: CARD_STORAGE_KEY, item: cardList });
  }, [cardList]);

  const value = useMemo(
    () => ({ cardList, saveCardList, deleteCard, getCard }),
    [cardList, deleteCard, saveCardList, getCard]
  );

  return (
    <CardListContext.Provider value={value}>
      {children}
    </CardListContext.Provider>
  );
};
