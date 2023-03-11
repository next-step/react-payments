import { ChangeEvent, useCallback, useMemo } from "react";

import { CARD_VALIDATION_ERROR_MESSAGES } from "@/constants/messages/error";
import { CARD_INPUT_VARIABLES } from "@/constants/variables";
import { isNumber, tryCatch } from "@/helper";
import { useInput } from "@/hooks";
import { ValidationError } from "@/services/errors";

export type CardPassword = {
  password1: string;
  password2: string;
};

const validateCardPassword = (value: string) => {
  if (!isNumber(value)) {
    throw new ValidationError({
      name: "INPUT_VALIDATION_ERROR",
      message: CARD_VALIDATION_ERROR_MESSAGES.ONLY_NUMBER,
    });
  }
};

const isAllCardPasswordFieldFilles = (cardPassword: CardPassword) => {
  return !Object.entries(cardPassword).some(([_, value]) => value.length === 0);
};

const useCardPasswordInput = (initialValue: CardPassword) => {
  const { value, error, onChange, setError } = useInput(initialValue);

  const handleCardPasswordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { target } = e;

      const { error } = tryCatch(() => {
        setError("");
        validateCardPassword(target.value);
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

  const handleCardPasswordInputBlur = useCallback(() => {
    if (!isAllCardPasswordFieldFilles(value)) {
      tryCatch(() => {
        throw new ValidationError({
          name: "INPUT_VALIDATION_ERROR",
          message: CARD_VALIDATION_ERROR_MESSAGES.REQUIRED,
        });
      }, setError);
    }
  }, [value]);

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
    cardPasswordError: error,
    isPasswordValid,
    onCardPasswordChange: handleCardPasswordChange,
    onCardPasswordInputBlur: handleCardPasswordInputBlur,
  };
};

export default useCardPasswordInput;
