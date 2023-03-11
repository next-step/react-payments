import { RefObject, useCallback } from 'react';

export default function useFocusRef(ref: RefObject<HTMLInputElement>) {
  return useCallback(() => (
    ref.current?.focus()
  ), []);
}
