import { useCallback } from "react";
import { insertAtInterval, replaceTo } from "../../../utils/stringUtils";

export default function useCardNumberInput() {
  const toMaskedCardNumber = useCallback((value: string) => {
    const masked = replaceTo(value, "*", 8, value.length);
    return insertAtInterval(masked, "-", 4);
  }, []);

  return { toMaskedCardNumber };
}
