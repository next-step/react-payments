import { ChangeEvent, useCallback, useMemo } from "react";

import { CARD_VALIDATION_ERROR_MESSAGES } from "@/constants/messages/error";
import { CARD_INPUT_VARIABLES } from "@/constants/variables";
import { checkValidator, isNumber } from "@/helper";
import useInput from "@/hooks/useInput";
import { ValidationError } from "@/services/errors";
import { ValidationResult } from "@/types";

export type CardNumber = {
  [K in "num1" | "num2" | "num3" | "num4"]: string;
};

const validateCardNumberInput = (value: string): ValidationResult => {
  if (!isNumber(value)) {
    return {
      success: false,
      error: new ValidationError(CARD_VALIDATION_ERROR_MESSAGES.ONLY_NUMBER),
    };
  }

  return {
    success: true,
  };
};

const useCardNumberInput = (initialValue: CardNumber) => {
  const { value, onChange } = useInput(initialValue);

  const handleNumberChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { target } = e;

      checkValidator(
        target.value,
        validateCardNumberInput,
        onChange.bind(this, e)
      );
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
