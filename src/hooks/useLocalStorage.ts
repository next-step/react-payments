import { useCallback, useLayoutEffect, useState } from "react";

export default function useLocalStorage<T>(key: string, initialValue: T) {
  const [store, setStore] = useState<T>(initialValue);

  const setStorage = useCallback((value: T) => {
    setStore(value);
    localStorage.setItem(key, JSON.stringify(value));
  }, []);

  useLayoutEffect(() => {
    const existed = localStorage.getItem(key);
    if (existed) return setStore(JSON.parse(existed));
  }, []);

  return [store, setStorage] as const;
}
