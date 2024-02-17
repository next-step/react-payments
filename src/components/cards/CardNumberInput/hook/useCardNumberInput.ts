import { ChangeEvent, FocusEvent, useCallback, useMemo } from "react";

import { CARD_VALIDATION_ERROR_MESSAGES } from "@/constants/messages/error";
import { CARD_INPUT_VARIABLES } from "@/constants/variables";
import { isNumber, tryCatch } from "@/helper";
import { useInput } from "@/hooks";
import { ValidationError } from "@/services/errors";

export type CardNumber = {
  [K in "num1" | "num2" | "num3" | "num4"]: string;
};

const validateCardNumberInput = (value: string) => {
  if (!isNumber(value)) {
    throw new ValidationError({
      name: "INPUT_VALIDATION_ERROR",
      message: CARD_VALIDATION_ERROR_MESSAGES.ONLY_NUMBER,
    });
  }
};

const isCardNumberFieldFilled = (cardNumber: CardNumber) => {
  return !Object.entries(cardNumber).some(
    ([_, number]) =>
      number.length < CARD_INPUT_VARIABLES.PARTIAL_NUMBER_MAX_LENGTH
  );
};

const useCardNumberInput = (initialValue: CardNumber) => {
  const { value, onChange, error, setError } = useInput(initialValue);

  const handleNumberChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { target } = e;

      const { error } = tryCatch(() => {
        setError("");
        validateCardNumberInput(target.value);
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

  const handleNumberInputBlur = useCallback(() => {
    if (!isCardNumberFieldFilled(value)) {
      tryCatch(() => {
        throw new ValidationError({
          name: "INPUT_VALIDATION_ERROR",
          message: CARD_VALIDATION_ERROR_MESSAGES.REQUIRED,
        });
      }, setError);
    }
  }, [value]);

  const isValidCardNumber = useMemo(
    () =>
      !Object.entries(value).some(
        ([_, value]) =>
          value.length < CARD_INPUT_VARIABLES.PARTIAL_NUMBER_MAX_LENGTH
      ),
    [value]
  );

  return {
    cardNumber: value,
    cardNumberError: error,
    isValidCardNumber,
    onCardNumberChange: handleNumberChange,
    onCardNumberInputBlur: handleNumberInputBlur,
  };
};

export default useCardNumberInput;
