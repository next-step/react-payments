import { ChangeEvent, useCallback } from "react";

import { CARD_VALIDATION_ERROR_MESSAGES } from "@/constants/alertMessages";
import { isNumber } from "@/helper";
import useInput from "@/hooks/useInput";

export type CardPassword = {
  password1: string;
  password2: string;
};

const validateCardPassword = (value: string) => {
  if (!isNumber(value)) {
    alert(CARD_VALIDATION_ERROR_MESSAGES.ONLY_NUMBER);
    return false;
  }
  return true;
};

const useCardPasswordInput = (initialValue: CardPassword) => {
  const { value, onChange } = useInput(initialValue);

  const handleCardPasswordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { target } = e;

      if (!validateCardPassword(target.value)) return;

      onChange(e);
    },
    [value]
  );

  return {
    cardPassword: value,
    onCardPasswordChange: handleCardPasswordChange,
  };
};

export default useCardPasswordInput;
