import { RefObject, useCallback } from "react";

export default function useRefs() {
  return useCallback((ref: RefObject<HTMLInputElement>) => {
    return () => ref.current?.focus();
  }, []);
}
