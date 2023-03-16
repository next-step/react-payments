import { useCallback, useEffect, useState } from 'react';
import type { ExternalStore } from './ExternalStore';

// 스스로 externalStore를 가져오고 POST해줄 수 있는 객체 넣고, 그 결과를 React lifecycle에 맞춰서 제공해줄 수 있는 hook
export function useExternalStore<T>(externalStore: ExternalStore<T>) {
  const [localStore, setLocalStore] = useState<T | null | undefined>();

  useEffect(() => {
    externalStore.init().then((res) => {
      setLocalStore(res);
    });
  }, [externalStore]);

  const setStore = useCallback(
    (newStore: T | null) => {
      externalStore.setStore(newStore).then((res) => {
        setLocalStore(res);
      });
    },
    [externalStore]
  );

  return { localStore, setStore };
}
