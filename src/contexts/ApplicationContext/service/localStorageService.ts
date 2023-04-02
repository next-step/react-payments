import type { TCardList, TCardListService } from '../type';

const LOCAL_STORAGE_CARD_LIST_KEY = 'cardList';

const get = async () => {
  const item = window.localStorage.getItem(LOCAL_STORAGE_CARD_LIST_KEY);
  return item ? (JSON.parse(item) as TCardList) : null;
};

export const localStorageService: TCardListService = {
  get,
  post: async (cardList: TCardList) => {
    window.localStorage.setItem(LOCAL_STORAGE_CARD_LIST_KEY, JSON.stringify(cardList));
    return get();
  },
};
