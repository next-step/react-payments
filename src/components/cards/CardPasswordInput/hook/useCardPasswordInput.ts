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
      message: CARD_VALIDATION_ERROR_MESSAGES.INVALID_OWNER_NAME_LENGTH,
    });
  }
};

const useCardPasswordInput = (initialValue: CardPassword) => {
  const { value, onChange } = useInput(initialValue);

  const handleCardPasswordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { target } = e;

      const { error } = tryCatch(() => validateCardPassword(target.value));

      if (!error) onChange(e);
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
