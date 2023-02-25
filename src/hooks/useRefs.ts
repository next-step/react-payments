import { MutableRefObject, useCallback, useRef } from 'react';

interface IRefObject<T> {
  [key: string | number]: MutableRefObject<T | null>;
}

type TUseRefs<T> = [
  IRefObject<T>,
  () => T[]
];

export default function useRefs<T>(refNames: string[] | number[]): TUseRefs<T> {
  const refObject = useRef<IRefObject<T>>({});

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
