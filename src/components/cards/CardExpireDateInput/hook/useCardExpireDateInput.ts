import { ChangeEvent, useCallback, useMemo } from "react";

import { CARD_VALIDATION_ERROR_MESSAGES } from "@/constants/messages/error";
import { CARD_INPUT_VARIABLES } from "@/constants/variables";
import { isNumber, tryCatch } from "@/helper";
import { useInput } from "@/hooks";
import { ValidationError } from "@/services/errors";

export type CardExpireDate = {
  month: string;
  year: string;
};

const validateCardExpireDateInput = (element: HTMLInputElement) => {
  const { value, id } = element;

  if (!isNumber(value)) {
    throw new ValidationError({
      name: "INPUT_VALIDATION_ERROR",
      message: CARD_VALIDATION_ERROR_MESSAGES.ONLY_NUMBER,
    });
  }

  if (id === "month") {
    const expireMonth = parseInt(value);

    if (
      value.length === CARD_INPUT_VARIABLES.DATE_MAX_LENGTH &&
      (expireMonth < CARD_INPUT_VARIABLES.MIN_MONTH ||
        expireMonth > CARD_INPUT_VARIABLES.MAX_MONTH)
    ) {
      throw new ValidationError({
        name: "INPUT_VALIDATION_ERROR",
        message: CARD_VALIDATION_ERROR_MESSAGES.INVALID_MONTH_RANGE,
      });
    }
  }
};

const useCardExpireDateInput = (initialValue: CardExpireDate) => {
  const { value, onChange } = useInput(initialValue);

  const handleCardExpireDateChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { target } = e;

      const { error } = tryCatch(() => validateCardExpireDateInput(target));

      if (!error) onChange(e);
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
