import { useCallback, useEffect, useState } from 'react';

export interface IFetchMethods<T> {
  get(): Promise<T | null>;
  post(newStore?: T | null): Promise<T | null>;
}

// 스스로 externalStore를 GET하고 POST해줄 수 있는 객체 넣고, 그 결과를 React lifecycle에 맞춰서 제공해줄 수 있는 hook
export function useFetch<T>(fetchMethods: IFetchMethods<T>): {
  fetchedData?: T | null;
  fetch: (key: keyof IFetchMethods<T>, newStore?: T | null) => void;
};
export function useFetch<T, K extends { [method: string | number | symbol]: Promise<T | null> }>(
  fetchMethods: IFetchMethods<T> & K
): { fetchedData?: T | null; fetch: (key: keyof IFetchMethods<T> & keyof K, newStore?: T | null) => void } {
  const [fetchedData, setFetchedData] = useState<T | null | undefined>();

  useEffect(() => {
    fetchMethods.get().then((res) => {
      setFetchedData(res);
    });
  }, [fetchMethods]);

  const fetch = useCallback(
    (key: keyof IFetchMethods<T> & keyof K, newStore?: T | null) => {
      fetchMethods[key](newStore).then((res) => {
        setFetchedData(res);
      });
    },
    [fetchMethods]
  );

  return { fetchedData, fetch };
}
