import { useCallback } from "react";
import { useFocusNext, useNumberInput } from "../../../hooks";

const MAX_LENGTH = 3;

export default function useCardSecurityCode(focusNext: () => void) {
  const isValid = useCallback((value: string) => {
    return !isNaN(Number(value)) && value.length === MAX_LENGTH;
  }, []);

  const [$ref, { invalid, handleInput }] = useNumberInput({
    valueLength: MAX_LENGTH,
    isValid,
  });

  useFocusNext({ invalid, focusNext });

  return [$ref, { invalid, handleInput }] as const;
}
