import { ChangeEvent, useCallback } from "react";

import { CARD_VALIDATION_ERROR_MESSAGES } from "@/constants/alertMessages";
import { CARD_INPUT_VARIABLES } from "@/constants/variables";
import { isNumber } from "@/helper";
import useInput from "@/hooks/useInput";

export type CardNumber = {
  [K in "num1" | "num2" | "num3" | "num4"]: string;
};

const validateCardNumberInput = (value: string) => {
  if (value.length > CARD_INPUT_VARIABLES.PARTIAL_NUMBER_MAX_LENGTH)
    return false;

  if (!isNumber(value)) {
    alert(CARD_VALIDATION_ERROR_MESSAGES.ONLY_NUMBER);
    return false;
  }

  return true;
};

const useCardNumberInput = (initialValue: CardNumber) => {
  const { value, onChange } = useInput(initialValue);

  const handleNumberChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { target } = e;

      if (!validateCardNumberInput(target.value)) {
        return;
      }

      onChange(e);
    },
    [value]
  );

  return {
    cardNumber: value,
    onCardNumberChange: handleNumberChange,
  };
};

export default useCardNumberInput;
