export const CARD_STORAGE_KEY = 'cards';

export const getLocalStorageItem = <T>({ key }: { key: string }): T | null => {
  const storedData = localStorage.getItem(key);

  return JSON.parse(storedData || 'null');
};

export const setLocalStorageItem = ({
  key,
  item,
}: {
  key: string;
  item: unknown;
}): void => {
  const data = JSON.stringify(item);

  localStorage.setItem(key, data);
};
