import { MutableRefObject, useCallback, useRef } from 'react';

interface RefObject<T> {
  [key: string | number]: MutableRefObject<T | null>;
}

type IUseRefs<T> = [
  RefObject<T>,
  () => T[]
];

export default function useRefs<T>(refNames: string[] | number[]): IUseRefs<T> {
  const refObject = useRef<RefObject<T>>({});

  for (const refName of refNames) {
    refObject.current[refName] = useRef<T | null>(null);
  }

  const getRefs = useCallback(() => {
    return Object.values(refObject.current).map((item) => (
      item.current
    ));
  }, []);

  return [refObject.current, getRefs];
}
