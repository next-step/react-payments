import { ChangeEvent, useCallback } from "react";

import { CARD_VALIDATION_ERROR_MESSAGES } from "@/constants/alertMessages";
import { isNumber } from "@/helper";
import useInput from "@/hooks/useInput";

const validateCvcNumber = (value: string) => {
  if (!isNumber(value)) {
    alert(CARD_VALIDATION_ERROR_MESSAGES.ONLY_NUMBER);
    return false;
  }
  return true;
};

type CardCvc = {
  cvc: string;
};

const useCardCvcInput = (initialValue: CardCvc) => {
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
