import { ChangeEvent, useCallback, useMemo } from "react";

import { CARD_VALIDATION_ERROR_MESSAGES } from "@/constants/messages/error";
import { CARD_INPUT_VARIABLES } from "@/constants/variables";
import { checkValidator, isNumber } from "@/helper";
import useInput from "@/hooks/useInput";
import { ValidationError } from "@/services/errors";
import { ValidationResult } from "@/types";

export type CardPassword = {
  password1: string;
  password2: string;
};

const validateCardPassword = (value: string): ValidationResult => {
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

const useCardPasswordInput = (initialValue: CardPassword) => {
  const { value, onChange } = useInput(initialValue);

  const handleCardPasswordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { target } = e;

      checkValidator(
        target.value,
        validateCardPassword,
        onChange.bind(this, e)
      );
    },
    [value]
  );

  const isPasswordValid = useMemo(
    () =>
      !Object.entries(value).some(
        ([_, password]) =>
          password.length < CARD_INPUT_VARIABLES.PARTIAL_PASSWORD_MAX_LENGTH
      ),
    [value]
  );

  return {
    cardPassword: value,
    isPasswordValid,
    onCardPasswordChange: handleCardPasswordChange,
  };
};

export default useCardPasswordInput;
