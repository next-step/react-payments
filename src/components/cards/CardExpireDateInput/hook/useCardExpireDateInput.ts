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

const isAllCardExpireDateFieldFilled = (cardExpireDate: CardExpireDate) => {
  return !Object.entries(cardExpireDate).some(
    ([_, number]) => number.length < CARD_INPUT_VARIABLES.DATE_MAX_LENGTH
  );
};

const useCardExpireDateInput = (initialValue: CardExpireDate) => {
  const { value, error, onChange, setError } = useInput(initialValue);

  const handleCardExpireDateChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { target } = e;

      const { error } = tryCatch(() => {
        setError("");
        validateCardExpireDateInput(target);
      }, setError);

      if (
        error instanceof ValidationError &&
        error.message === CARD_VALIDATION_ERROR_MESSAGES.ONLY_NUMBER
      ) {
        return;
      }

      onChange(e);
    },
    [value]
  );

  const handleCardExpireInputBlur = useCallback(() => {
    if (!isAllCardExpireDateFieldFilled(value)) {
      tryCatch(() => {
        throw new ValidationError({
          name: "INPUT_VALIDATION_ERROR",
          message: CARD_VALIDATION_ERROR_MESSAGES.REQUIRED,
        });
      }, setError);
    }
  }, [value]);

  const isValidExpireDate = useMemo(
    () =>
      value.month.length === CARD_INPUT_VARIABLES.DATE_MAX_LENGTH &&
      value.year.length === CARD_INPUT_VARIABLES.DATE_MAX_LENGTH,
    [value]
  );

  return {
    cardExpireDate: value,
    cardExpireDateError: error,
    isValidExpireDate,
    onCardExpireDateChange: handleCardExpireDateChange,
    onCardExpireDateInputBlur: handleCardExpireInputBlur,
  };
};

export default useCardExpireDateInput;
