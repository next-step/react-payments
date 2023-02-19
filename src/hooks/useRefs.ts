import { useMemo, useRef } from 'react';

const useRefs = <T extends HTMLElement = HTMLElement>(
  length: number,
  defaultValue: T | null = null
) => {
  const refsArray = useMemo(() => {
    return Array.from({ length }, () => useRef<T>(defaultValue));
  }, [length, defaultValue]);

  return refsArray;
};

export default useRefs;
