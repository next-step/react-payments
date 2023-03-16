import { useCallback, useMemo } from 'react';

import { useExternalStore } from '../useExternalStore';
import { LocalStorage } from './LocalStorage';

function throwErrorIfNotBrowser() {
  if (!window) {
    throw new Error('you can use localStorage Api in browser env only');
  }
}

export function useLocalStorage<T extends { [key: string]: any }>(key: string) {
  const localStorage = useMemo(() => new LocalStorage<T>(key), [key]);
  const { localStore, setStore } = useExternalStore<T>(localStorage);

  const setLocalStorageValue = useCallback(
    (newStore: T | null) => {
      throwErrorIfNotBrowser();

      setStore(newStore);
    },
    [setStore]
  );

  return { value: localStore, setLocalStorageValue };
}
