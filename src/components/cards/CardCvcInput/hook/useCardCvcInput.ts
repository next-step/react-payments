import { ChangeEvent, useCallback, useMemo } from "react";

import { CARD_VALIDATION_ERROR_MESSAGES } from "@/constants/messages/error";
import { CARD_INPUT_VARIABLES } from "@/constants/variables";
import { isNumber, tryCatch } from "@/helper";
import { useInput } from "@/hooks";
import { ValidationError } from "@/services/errors";

type CardCvc = {
  cvc: string;
};

const validateCvcNumber = (value: string) => {
  if (!isNumber(value)) {
    throw new ValidationError({
      name: "INPUT_VALIDATION_ERROR",
      message: CARD_VALIDATION_ERROR_MESSAGES.INVALID_MONTH_RANGE,
    });
  }
};

const useCardCvcInput = (initialValue: CardCvc) => {
  const { value, onChange } = useInput(initialValue);

  const handleCvcNumberChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { target } = e;

      const { error } = tryCatch(() => validateCvcNumber(target.value));

      if (!error) onChange(e);
    },
    [value]
  );

  const isValidCvcNumber = useMemo(
    () => value.cvc.length === CARD_INPUT_VARIABLES.CVC_NUMBER_MAX_LENGTH,
    [value]
  );

  return {
    cvcNumber: value,
    isValidCvcNumber,
    onCvcNumberChange: handleCvcNumberChange,
  };
};

export default useCardCvcInput;
