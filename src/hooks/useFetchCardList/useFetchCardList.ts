import { useCallback } from 'react';

import type { TCardStore } from '@/stores/CardContext';
import { useFetch } from '../useFetch';

const LOCAL_STORAGE_CARD_LIST_KEY = 'cardList';

type CardStateJSON = { value: any }[];
type CardStoreJSON = Record<keyof TCardStore, CardStateJSON>;
type CardList = { [createdAt: string]: CardStoreJSON };

const get = async () => {
  const item = window.localStorage.getItem(LOCAL_STORAGE_CARD_LIST_KEY);
  return item ? (JSON.parse(item) as CardList) : null;
};

const fetchMethods = {
  get,
  post: async (cardList: CardList) => {
    window.localStorage.setItem(LOCAL_STORAGE_CARD_LIST_KEY, JSON.stringify(cardList));
    return get();
  },
};

export function useFetchCardList() {
  const { fetch, fetchedData } = useFetch<CardList | null>(fetchMethods);

  const postCard = useCallback(
    (card: CardStoreJSON, givenCardId?: string) => {
      const cardId = givenCardId || new Date().getTime();

      if (!fetchedData) {
        fetch('post', { [cardId]: card });
        return;
      }

      fetchedData[cardId] = card;
      fetch('post', fetchedData);
    },
    [fetch, fetchedData]
  );

  const deleteCard = useCallback(
    (cardId: string) => {
      if (!fetchedData) return;

      delete fetchedData[cardId];
      fetch('post', fetchedData);
    },
    [fetch, fetchedData]
  );

  return { cardList: fetchedData, postCard, deleteCard };
}
