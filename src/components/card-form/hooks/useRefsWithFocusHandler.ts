import { createRef, RefObject, useCallback, useMemo } from "react";

export default function useRefsWithFocusHandler(size: number) {
  const refs = useMemo(
    () => Array.from({ length: size }).map(createRef<HTMLInputElement>),
    [size]
  );

  const createFocusHandler = useCallback((ref: RefObject<HTMLInputElement>) => {
    return () => ref.current?.focus();
  }, []);

  return { refs, createFocusHandler };
}
