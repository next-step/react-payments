import { createRef, useMemo } from 'react';

const useRefs = <T extends HTMLElement = HTMLElement>(
  length: number,
  defaultValue: T | null = null
) =>
  useMemo(
    // TODO
    // () => Array.from({ length }, () => useRef<T>(defaultValue)),
    () => Array.from({ length }).map(createRef<HTMLInputElement>),
    [length, defaultValue]
  );

export default useRefs;
