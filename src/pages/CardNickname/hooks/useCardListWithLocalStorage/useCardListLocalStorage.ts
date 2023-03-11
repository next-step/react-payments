import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

import type { CardStore } from '@/stores/CardCreatorContext/cardStore';
import { useCardContextApiSelector } from '@/stores/CardCreatorContext';

const LOCAL_STORAGE_CARD_LIST_KEY = 'cardList';

type PropertyType = { theme?: any; value?: any; name?: any };
type ObjectPropertyWithPrimitiveProperty = { [key: string]: PropertyType | null | PropertyType[] };
type CardStoreJSON = Record<keyof CardStore, ObjectPropertyWithPrimitiveProperty>;

export function useCardListWithLocalStorage() {
  const { storageValue, setValueInLocalStorage } = useLocalStorage(LOCAL_STORAGE_CARD_LIST_KEY);
  const [cardList, setCardList] = useState<{ [key: string]: any }>({});

  const cardContextApis = useCardContextApiSelector();

  useEffect(() => {
    if (storageValue) {
      setCardList(JSON.parse(storageValue));
    }
  }, [storageValue]);

  const getCardFromStorage = useCallback(
    (cardId: string, fallback?: () => void): void => {
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
    [cardList, cardContextApis]
  );

  const setCardInStorage = useCallback(
    (cardId: string | number, card: CardStore) => {
      cardList[cardId] = card;
      const stringifyAbleObject = formatToStringifyAbleObject(card) as CardStoreJSON;
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
      cardList,
      getCardFromStorage,
      setCardInStorage,
      deleteCard,
    }),
    [cardList, getCardFromStorage, setCardInStorage, deleteCard]
  );
}

function formatToStringifyAbleObject(object: ObjectPropertyWithPrimitiveProperty): ObjectPropertyWithPrimitiveProperty {
  return Object.entries(object).reduce<ObjectPropertyWithPrimitiveProperty>((prev, [key, val]) => {
    if (Array.isArray(val)) {
      const stringifyAbleObject = val.map(({ theme, value, name }) => ({ theme, value, name }));
      prev[key] = stringifyAbleObject;
      return prev;
    }

    prev[key] = { theme: val?.theme, value: val?.value, name: val?.name };
    return prev;
  }, {});
}
