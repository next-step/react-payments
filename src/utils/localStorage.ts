export const setLocalStorageItem = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorageItem = <T>(key: string) => {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item) as T;
  }
  return null;
};

export const removeLocalStorageItem = (key: string) => {
  localStorage.removeItem(key);
};
