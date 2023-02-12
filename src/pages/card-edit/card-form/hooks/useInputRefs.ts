import { createRef, useMemo } from "react";

export default function useInputRefs(size: number) {
  return useMemo(
    () => Array.from({ length: size }).map(createRef<HTMLInputElement>),
    [size]
  );
}
