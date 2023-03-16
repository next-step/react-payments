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
  const { localStore, setStore: setExternalStore } = useExternalStore<T>(localStorage);

  const setStore = useCallback(
    (newStore: T | null) => {
      throwErrorIfNotBrowser();

      setExternalStore(newStore);
    },
    [setExternalStore]
  );

  return { localStore, setStore };
}
