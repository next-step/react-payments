import { useCallback } from 'react';

import { useApplicationContext, TCard, TCardList } from '@/contexts/ApplicationContext';

import { useFetch } from '../useFetch';

export function useFetchCardList() {
  const appContext = useApplicationContext();
  const { fetch, fetchedData } = useFetch<TCardList | null>(appContext?.service);

  const postCard = useCallback(
    (card: TCard, givenCardId?: string) => {
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
