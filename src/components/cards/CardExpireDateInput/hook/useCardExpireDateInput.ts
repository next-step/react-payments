import { ChangeEvent, useCallback, useMemo } from "react";

import { CARD_VALIDATION_ERROR_MESSAGES } from "@/constants/messages/error";
import { CARD_INPUT_VARIABLES } from "@/constants/variables";
import { checkValidator, isNumber } from "@/helper";
import useInput from "@/hooks/useInput";
import { ValidationError } from "@/services/errors";
import { ValidationResult } from "@/types";

export type CardExpireDate = {
  month: string;
  year: string;
};

const validateCardExpireDateInput = (
  element: HTMLInputElement
): ValidationResult => {
  const { value, id } = element;

  if (!isNumber(value)) {
    return {
      success: false,
      error: new ValidationError(CARD_VALIDATION_ERROR_MESSAGES.ONLY_NUMBER),
    };
  }

  if (id === "month") {
    const expireMonth = parseInt(value);

    if (
      value.length === CARD_INPUT_VARIABLES.DATE_MAX_LENGTH &&
      (expireMonth < CARD_INPUT_VARIABLES.MIN_MONTH ||
        expireMonth > CARD_INPUT_VARIABLES.MAX_MONTH)
    ) {
      return {
        success: false,
        error: new ValidationError(CARD_VALIDATION_ERROR_MESSAGES.MONTH_RANGE),
      };
    }
  }

  return {
    success: true,
  };
};

const useCardExpireDateInput = (initialValue: CardExpireDate) => {
  const { value, onChange } = useInput(initialValue);

  const handleCardExpireDateChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { target } = e;

      checkValidator(
        target,
        validateCardExpireDateInput,
        onChange.bind(this, e)
      );
    },
    [value]
  );

  const isValidExpireDate = useMemo(
    () =>
      value.month.length === CARD_INPUT_VARIABLES.DATE_MAX_LENGTH &&
      value.year.length === CARD_INPUT_VARIABLES.DATE_MAX_LENGTH,
    [value]
  );

  return {
    cardExpireDate: value,
    isValidExpireDate,
    onCardExpireDateChange: handleCardExpireDateChange,
  };
};

export default useCardExpireDateInput;
