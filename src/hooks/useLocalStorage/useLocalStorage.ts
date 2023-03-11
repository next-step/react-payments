import { useCallback, useEffect, useMemo, useState } from 'react';

function throwErrorIfNotBrowser() {
  if (!window) {
    throw new Error('you can use localStorage Api in browser env only');
  }
}

export function useLocalStorage(initialKey: string) {
  const [key, setKey] = useState(initialKey);
  const [storageValue, setStorageValue] = useState<string | undefined | null>();

  useEffect(() => {
    setStorageValue(window?.localStorage.getItem(key));
  }, [key]);

  const setLocalStorageKey = useCallback((key: string) => setKey(key), [setKey]);

  const setValueInLocalStorage = useCallback((key: string, value: string) => {
    throwErrorIfNotBrowser();

    window.localStorage.setItem(key, value);
    setKey(key);
    setStorageValue(value);
  }, []);

  return useMemo(
    () => ({ storageValue, setLocalStorageKey, setValueInLocalStorage }),
    [storageValue, setLocalStorageKey, setValueInLocalStorage]
  );
}
