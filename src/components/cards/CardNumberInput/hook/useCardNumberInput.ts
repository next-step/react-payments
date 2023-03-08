import { ChangeEvent, useCallback, useMemo } from "react";

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

const useCardNumberInput = (initialValue: CardNumber) => {
  const { value, onChange } = useInput(initialValue);

  const handleNumberChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { target } = e;

      const { error } = tryCatch(() => validateCardNumberInput(target.value));

      if (!error) onChange(e);
    },
    [value]
  );

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
    isValidCardNumber,
    onCardNumberChange: handleNumberChange,
  };
};

export default useCardNumberInput;
