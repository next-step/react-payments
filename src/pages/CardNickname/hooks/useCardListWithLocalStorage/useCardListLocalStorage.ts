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

  const getCardListFromStorage = useCallback(() => {
    // 카드 리스트를 통째로 가져온다.
  }, []);

  const getCardFromStorage = useCallback(
    (cardId: string): void => {
      const card = cardList[cardId] as CardStoreJSON;
      Object.entries(card).forEach(([key, value]) => {
        const type = key as keyof CardStoreJSON;
        if (type === 'cardCompany') {
          // @ts-ignore
          cardContextApis?.dispatch({ type, payload: value });
          return;
        }

        if (Array.isArray(value)) {
          // @ts-ignore
          value.forEach((val, index) => cardContextApis?.dispatch({ type, payload: { index, ...val } }));
          return;
        }

        // @ts-ignore
        cardContextApis?.dispatch({ type, payload: { index, ...value } });
      });
    },
    [cardList, cardContextApis]
  );

  const setCardInLocalStorage = useCallback(
    (cardId: string, card: CardStore) => {
      cardList[cardId] = card;
      const stringifyAbleObject = formatToStringifyAbleObject(card) as CardStoreJSON;
      setValueInLocalStorage(
        LOCAL_STORAGE_CARD_LIST_KEY,
        JSON.stringify({ ...cardList, [cardId]: stringifyAbleObject })
      );
    },
    [cardList, setValueInLocalStorage]
  );

  return useMemo(
    () => ({
      cardList,
      getCardListFromStorage,
      getCardFromStorage,
      setCardInLocalStorage,
    }),
    [cardList, getCardListFromStorage, getCardFromStorage, setCardInLocalStorage]
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
