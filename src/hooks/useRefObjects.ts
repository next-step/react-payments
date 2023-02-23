import { createRef, useMemo } from 'react';

const useRefObjects = <T extends HTMLElement = HTMLElement>(
  initialLength: number
) => useMemo(() => Array.from({ length: initialLength }).map(createRef<T>), []);

export default useRefObjects;
