import { useCallback } from 'react';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { CardStore } from '@/stores/CardCreatorContext/cardStore';
import { useCardContextApiSelector } from '@/stores/CardCreatorContext';
import { mapObjectValues } from '@/utils/object';

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
  const { localStore, setStore } = useLocalStorage<{ [createdAt: string]: CardStorePOJO }>(LOCAL_STORAGE_CARD_LIST_KEY);

  const cardContextApis = useCardContextApiSelector();

  const getCardFromStorage = useCallback(
    (cardId: string, fallback?: () => void): void => {
      if (typeof localStore === 'undefined') return;

      const card = localStore?.[cardId];
      if (!card) {
        fallback && fallback();
        return;
      }

      dispatchCardStoreJSONInContext(card, cardContextApis);
    },
    [localStore, cardContextApis]
  );

  const setCardInStorage = useCallback(
    (cardId: string | number, card: CardStore) => {
      const cardPOJO = mapObjectValues(card, (value) => {
        if (Array.isArray(value)) return value.map((stateObject) => stateObject.getPOJO());
        // @ts-ignore
        return value.getPOJO();
      }) as unknown as CardStorePOJO;

      setStore({ ...localStore, [cardId]: cardPOJO });
    },
    [setStore, localStore]
  );

  const deleteCard = useCallback(
    (cardId: string | number) => {
      delete localStore?.[cardId];
      setStore(localStore ?? null);
    },
    [localStore, setStore]
  );

  return {
    cardList: localStore,
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
