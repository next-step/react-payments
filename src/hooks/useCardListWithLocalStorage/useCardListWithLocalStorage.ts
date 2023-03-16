import { useCallback } from 'react';

import { useLocalStorage } from '@/hooks';
import type { CardStore } from '@/stores/CardContext/cardStore';
import { useCardContextApiSelector } from '@/stores/CardContext';
import { mapObjectValues } from '@/utils';

const LOCAL_STORAGE_CARD_LIST_KEY = 'cardList';

type CardStatePOJO = { value: any };
type CardStorePOJOValue = CardStatePOJO[] | CardStatePOJO | null;
interface CardStorePOJO extends Record<keyof CardStore, CardStorePOJOValue> {
  cardCompany: CardStatePOJO;
  cardNickname: CardStatePOJO;
  cardNumbers: CardStatePOJO[];
  expireDates: CardStatePOJO[];
  cardOwners: CardStatePOJO[];
  passwords: CardStatePOJO[];
  securityCodes: CardStatePOJO[];
}

export function useCardListWithLocalStorage() {
  const { value, setLocalStorageValue } =
    useLocalStorage<{ [createdAt: string]: CardStorePOJO }>(LOCAL_STORAGE_CARD_LIST_KEY);

  const cardContextApis = useCardContextApiSelector();

  const getCardFromStorage = useCallback(
    (cardId: string, fallback?: () => void): void => {
      if (typeof value === 'undefined') return;

      const card = value?.[cardId];
      if (!card) {
        fallback && fallback();
        return;
      }

      dispatchCardStoreJSONInContext(card, cardContextApis);
    },
    [value, cardContextApis]
  );

  const setCardInStorage = useCallback(
    (cardId: string | number, card: CardStore) => {
      const cardPOJO = mapObjectValues(card, (value) => {
        if (Array.isArray(value)) return value.map((stateObject) => stateObject.getPOJO());
        // @ts-ignore
        return value.getPOJO();
      }) as unknown as CardStorePOJO;

      setLocalStorageValue({ ...value, [cardId]: cardPOJO });
    },
    [setLocalStorageValue, value]
  );

  const deleteCard = useCallback(
    (cardId: string | number) => {
      delete value?.[cardId];
      setLocalStorageValue(value ?? null);
    },
    [value, setLocalStorageValue]
  );

  return {
    cardList: value,
    getCardFromStorage,
    setCardInStorage,
    deleteCard,
  };
}

function dispatchCardStoreJSONInContext(
  card: CardStorePOJO,
  cardContextApis: ReturnType<typeof useCardContextApiSelector>
) {
  Object.entries(card).forEach(([key, val]) => {
    if (!val) return;

    const type = key as keyof CardStore;
    if (!Array.isArray(val)) {
      cardContextApis?.dispatch({ type, payload: val });
      return;
    }

    val.forEach(({ value }, index) => {
      cardContextApis?.dispatch({ type, payload: { value, index } });
    });
  });
}
