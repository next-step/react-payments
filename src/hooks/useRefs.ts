import { useMemo, useRef } from 'react';

const useRefs = <T extends HTMLElement = HTMLElement>(
  length: number,
  defaultValue: T | null = null
) =>
  useMemo(
    () => Array.from({ length }, () => useRef<T>(defaultValue)),
    [length, defaultValue]
  );

export default useRefs;
