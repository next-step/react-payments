import { useCallback } from "react";
import { insertAtInterval, replaceTo } from "../../../utils/stringUtils";
import useDisplayedInput from "../../../hooks/useDisplayedInput";

const CARN_NUMBER_LENGTH = 16;
const CARD_NUMBER_HYPHEN_INTERVAL = 4;
const CARD_NUMBER_NOT_MASKED_LENGTH = 8;

export default function useCardNumberInput() {
  const toMaskedCardNumber = useCallback((value: string) => {
    const masked = replaceTo(
      value,
      "*",
      CARD_NUMBER_NOT_MASKED_LENGTH,
      value.length
    );
    return insertAtInterval(masked, "-", CARD_NUMBER_HYPHEN_INTERVAL);
  }, []);

  const { value, displayedValue, handleChange } = useDisplayedInput({
    toDisplayed: toMaskedCardNumber,
    maxLength: CARN_NUMBER_LENGTH,
  });

  return { value, displayedValue, handleChange };
}
