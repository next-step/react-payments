import { useCallback, useEffect, useLayoutEffect, useState } from "react";

export default function useLocalStorage<T>(key: string, initialValue: T) {
  const [store, setStore] = useState<T>(initialValue);

  const setStorage = useCallback((value: T) => {
    setStore(value);
  }, []);

  useLayoutEffect(() => {
    const existedValue = JSON.parse(localStorage.getItem(key)!) as T;
    existedValue && setStore(existedValue);
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(store));
  }, [key, store]);

  return [store, setStorage] as const;
}
