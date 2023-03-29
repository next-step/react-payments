import { useCallback } from 'react';

import type { TCardStoreKeys } from '@/stores/CardContext';
import { useFetch } from '../useFetch';

const LOCAL_STORAGE_CARD_LIST_KEY = 'cardList';

type TCardStateListJSON = { value: any }[];
type TCardStoreJSON = Record<TCardStoreKeys, TCardStateListJSON>;
type TCardList = { [createdAt: string]: TCardStoreJSON };

const get = async () => {
  const item = window.localStorage.getItem(LOCAL_STORAGE_CARD_LIST_KEY);
  return item ? (JSON.parse(item) as TCardList) : null;
};

const fetchLocalStorageMethods = {
  get,
  post: async (cardList: TCardList) => {
    window.localStorage.setItem(LOCAL_STORAGE_CARD_LIST_KEY, JSON.stringify(cardList));
    return get();
  },
};

export function useFetchCardList() {
  const { fetch, fetchedData } = useFetch<TCardList | null>(fetchLocalStorageMethods);

  const postCard = useCallback(
    (card: TCardStoreJSON, givenCardId?: string) => {
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
