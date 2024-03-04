export const CARD_KEY = 'cards';

export const getLocalStorageItem = ({ key }: { key: string }) => {
  const storedData = localStorage.getItem(key);
  if (!storedData) return [];

  return JSON.parse(storedData);
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
