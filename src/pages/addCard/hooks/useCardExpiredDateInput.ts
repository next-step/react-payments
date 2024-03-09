import { useCallback } from "react";
import { insertAtInterval } from "../../../utils/stringUtils";
import useDisplayedInput from "./useDisplayedInput";

const EXPIRED_DATE_LENGTH = 4;
const EXPIRED_MONTH_LENGTH = 2;

export default function useCardExpiredDateInput() {
  const toDisplayed = useCallback(
    (value: string) => insertAtInterval(value, "/", EXPIRED_MONTH_LENGTH),
    []
  );

  const { value, displayedValue, handleChange } = useDisplayedInput({
    toDisplayed,
    maxLength: EXPIRED_DATE_LENGTH,
  });

  return { value, displayedValue, handleChange };
}
