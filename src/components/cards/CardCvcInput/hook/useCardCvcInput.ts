import { ChangeEvent, useCallback } from "react";

import { CARD_VALIDATION_ERROR_MESSAGES } from "@/constants/alertMessages";
import { CARD_INPUT_VARIABLES } from "@/constants/variables";
import { isNumber } from "@/helper";
import useInput from "@/hooks/useInput";

const validateCvcNumber = (value: string) => {
  if (value.length > CARD_INPUT_VARIABLES.CVC_NUMBER_MAX_LENGTH) {
    alert(CARD_VALIDATION_ERROR_MESSAGES.ONLY_NUMBER);
    return false;
  }
  return true;
};

const useCardCvcInput = (initialValue: string) => {
  const { value, onChange } = useInput(initialValue);

  const handleCvcNumberChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { target } = e;

      if (!validateCvcNumber(target.value)) return;

      onChange(e);
    },
    [value]
  );

  return {
    cvcNumber: value,
    onCvcNumberChange: handleCvcNumberChange,
  };
};

export default useCardCvcInput;
