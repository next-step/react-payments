import { getItem, setItem } from '@/storage/storage';
import { StorageKey } from '@/storage/storageKey';
import { CardData, CardKey } from '@/types';

export const getCards = () => {
  return getItem(StorageKey.CARD_LIST) as CardData[];
};

export const getLatestCard = () => {
  return getItem(StorageKey.CARD_LIST).at(-1) as CardData;
};
export const createCard = (value: object) => {
  setItem(StorageKey.CARD_LIST, [
    ...(getItem(StorageKey.CARD_LIST) ?? []),
    { ...value },
  ]);
};

export const updateNickNameByCardUID = (card: CardData, nickName: string) => {
  const originalCards = getItem(StorageKey.CARD_LIST) as CardData[];
  const updateCard = { ...card, [CardKey.NICK_NAME]: nickName };
  setItem(StorageKey.CARD_LIST, [
    ...originalCards.filter(({ UID }) => UID != card.UID),
    { ...updateCard },
  ]);
};

export const removeCard = (uid: string) => {
  const originalCards = getItem(StorageKey.CARD_LIST) as CardData[];
  const filteredCards = originalCards.filter((card) => card.UID != uid);
  setItem(StorageKey.CARD_LIST, filteredCards);
  return filteredCards;
};
