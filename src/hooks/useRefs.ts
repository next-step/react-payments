import { createRef, MutableRefObject, useCallback, useRef } from 'react';

type TRefArray<T> = MutableRefObject<T>[];

type TUseRefs<T> = [
  TRefArray<T>,
  () => T[]
];

export default function useRefs<T>(refLength: number): TUseRefs<T> {
  const refObject = useRef<TRefArray<T>>([]);

  refObject.current = Array.from({ length: refLength }).map((_, i) => (
    refObject.current[i] ?? createRef()
  ));

  const getRefs = useCallback(() => {
    return Object.values(refObject.current).map((item) => (
      item.current
    ));
  }, []);

  return [refObject.current, getRefs];
}
