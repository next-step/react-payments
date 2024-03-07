import { RefObject, useEffect, useRef } from "react";

interface UseChainFocusInputResult<T> {
  targetRef: RefObject<T>;
  focusRef: RefObject<HTMLInputElement>;
}

export default function useChainFocusInput<
  T extends HTMLElement
>(): UseChainFocusInputResult<T> {
  const targetRef = useRef<T>(null);
  const focusRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!targetRef.current || !focusRef.current) return;
    const target = targetRef.current;
    function focus() {
      focusRef.current?.focus();
    }
    target.addEventListener("click", focus);
    return () => {
      target.removeEventListener("click", focus);
    };
  }, []);

  return { targetRef, focusRef } as const;
}
