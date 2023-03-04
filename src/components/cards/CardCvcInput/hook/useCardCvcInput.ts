import { ChangeEvent, useCallback, useMemo } from "react";

import { CARD_VALIDATION_ERROR_MESSAGES } from "@/constants/messages/error";
import { CARD_INPUT_VARIABLES } from "@/constants/variables";
import { checkValidator, isNumber } from "@/helper";
import { useInput } from "@/hooks";
import { ValidationError } from "@/services/errors";
import type { ValidationResult } from "@/types";

type CardCvc = {
  cvc: string;
};

const validateCvcNumber = (value: string): ValidationResult => {
  if (!isNumber(value)) {
    return {
      success: false,
      error: new ValidationError(CARD_VALIDATION_ERROR_MESSAGES.ONLY_NUMBER),
    };
  }
  return { success: true };
};

const useCardCvcInput = (initialValue: CardCvc) => {
  const { value, onChange } = useInput(initialValue);

  const handleCvcNumberChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { target } = e;
      checkValidator(target.value, validateCvcNumber, onChange.bind(this, e));
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
