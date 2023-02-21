import { ChangeEvent, useCallback } from "react";

import { CARD_VALIDATION_ERROR_MESSAGES } from "@/constants/alertMessages";
import { CARD_INPUT_VARIABLES } from "@/constants/variables";
import { isNumber } from "@/helper";
import useInput from "@/hooks/useInput";

export type CardExpireDate = {
  month: string;
  year: string;
};

const validateCardExpireDateInput = (element: HTMLInputElement) => {
  const { value, id } = element;

  if (!isNumber(value)) {
    alert(CARD_VALIDATION_ERROR_MESSAGES.ONLY_NUMBER);
    return false;
  }

  if (id === "month") {
    const expireMonth = parseInt(value);

    if (
      value.length === CARD_INPUT_VARIABLES.DATE_MAX_LENGTH &&
      (expireMonth < CARD_INPUT_VARIABLES.MIN_MONTH ||
        expireMonth > CARD_INPUT_VARIABLES.MAX_MONTH)
    ) {
      alert(CARD_VALIDATION_ERROR_MESSAGES.MONTH_RANGE);
      return false;
    }
  }

  return true;
};

const useCardExpireDateInput = (initialValue: CardExpireDate) => {
  const { value, onChange } = useInput(initialValue);

  const handleCardExpireDateChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { target } = e;

      if (!validateCardExpireDateInput(target)) return;

      onChange(e);
    },
    [value]
  );

  return {
    cardExpireDate: value,
    onCardExpireDateChange: handleCardExpireDateChange,
  };
};

export default useCardExpireDateInput;
