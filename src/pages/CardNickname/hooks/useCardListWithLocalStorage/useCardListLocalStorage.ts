import { useCallback, useEffect, useMemo, useState } from 'react';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { CardStore } from '@/stores/CardCreatorContext/cardStore';
import { useCardContextApiSelector } from '@/stores/CardCreatorContext';

const LOCAL_STORAGE_CARD_LIST_KEY = 'cardList';

type CardStatePOJO = { theme?: any; value?: any; name?: any };
type CardStateValuePOJO = CardStatePOJO[] | CardStatePOJO | null;
type CardStoreJSON = Record<keyof CardStore, CardStateValuePOJO>;

// FIXME: 클린코드 필요!
// FIXME: LocalStorage 의존성 제거 -> useGetCard라고 이름 바꿔서 범용성 늘리기
export function useCardListWithLocalStorage() {
  const { storageValue, setValueInLocalStorage } = useLocalStorage(LOCAL_STORAGE_CARD_LIST_KEY);
  const [cardList, setCardList] = useState<{ [createdAt: string]: any } | null>(null);

  const cardContextApis = useCardContextApiSelector();

  useEffect(() => {
    if (storageValue) {
      setCardList(JSON.parse(storageValue));
    }
  }, [storageValue]);

  const getCardFromStorage = useCallback(
    (cardId: string, fallback?: () => void): void => {
      if (typeof storageValue === undefined || cardList === null) return;

      const card = cardList[cardId] as CardStoreJSON | undefined;
      if (!card) {
        fallback && fallback();
        return;
      }

      Object.entries(card).forEach(([key, cardInfo]) => {
        const type = key as keyof CardStoreJSON;

        if (Array.isArray(cardInfo)) {
          const cardInfos = cardInfo;
          // @ts-ignore
          cardInfos.forEach((cardInfo, index) => cardContextApis?.dispatch({ type, payload: { index, ...cardInfo } }));
          return;
        }

        // @ts-ignore
        cardContextApis?.dispatch({ type, payload: { index: 0, ...cardInfo } });
      });
    },
    [storageValue, cardList, cardContextApis]
  );

  const setCardInStorage = useCallback(
    (cardId: string | number, card: CardStore) => {
      if (cardList === null) return;

      cardList[cardId] = card;
      const stringifyAbleObject = changeValueToPOJO(card);
      setValueInLocalStorage(
        LOCAL_STORAGE_CARD_LIST_KEY,
        JSON.stringify({ ...cardList, [cardId]: stringifyAbleObject })
      );
    },
    [cardList, setValueInLocalStorage]
  );

  const deleteCard = useCallback(
    (cardId: string | number) => {
      const copyCardList = { ...cardList };
      delete copyCardList[cardId];
      setValueInLocalStorage(LOCAL_STORAGE_CARD_LIST_KEY, JSON.stringify({ ...copyCardList }));
    },
    [cardList, setValueInLocalStorage]
  );

  return useMemo(
    () => ({
      cardList: cardList || {},
      getCardFromStorage,
      setCardInStorage,
      deleteCard,
    }),
    [cardList, getCardFromStorage, setCardInStorage, deleteCard]
  );
}

function changeValueToPOJO(object: CardStore): CardStoreJSON {
  return Object.entries(object).reduce<CardStoreJSON>((prev, [key, val]) => {
    if (Array.isArray(val)) {
      const stringifyAbleObject = val.map(({ value }) => ({ value }));
      // @ts-ignore
      prev[key] = stringifyAbleObject;
      return prev;
    }

    // @ts-ignore
    prev[key] = { theme: val?.theme, value: val?.value, name: val?.name };
    return prev;
  }, {} as CardStoreJSON);
}
