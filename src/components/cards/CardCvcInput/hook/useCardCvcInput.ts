import { ChangeEvent, useCallback, useMemo } from "react";

import { CARD_VALIDATION_ERROR_MESSAGES } from "@/constants/messages/error";
import { CARD_INPUT_VARIABLES } from "@/constants/variables";
import { isNumber, tryCatch } from "@/helper";
import { useInput } from "@/hooks";
import { ValidationError } from "@/services/errors";

type CardCvc = {
  cvc: string;
};

const isCardCvcFieldFilled = (cardCvc: string) => {
  return (
    cardCvc && cardCvc.length >= CARD_INPUT_VARIABLES.CVC_NUMBER_MAX_LENGTH
  );
};

const validateCvcNumber = (value: string) => {
  if (!isNumber(value)) {
    throw new ValidationError({
      name: "INPUT_VALIDATION_ERROR",
      message: CARD_VALIDATION_ERROR_MESSAGES.ONLY_NUMBER,
    });
  }
};

const useCardCvcInput = (initialValue: CardCvc) => {
  const { value, error, onChange, setError } = useInput(initialValue);

  const handleCvcNumberChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { target } = e;

      const { error } = tryCatch(() => {
        setError("");
        validateCvcNumber(target.value);
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

  const handleCvcNumberInputBlur = useCallback(() => {
    if (!isCardCvcFieldFilled(value.cvc)) {
      tryCatch(() => {
        throw new ValidationError({
          name: "INPUT_VALIDATION_ERROR",
          message: CARD_VALIDATION_ERROR_MESSAGES.REQUIRED,
        });
      }, setError);
    }
  }, [value]);

  const isValidCvcNumber = useMemo(
    () => value.cvc.length === CARD_INPUT_VARIABLES.CVC_NUMBER_MAX_LENGTH,
    [value]
  );

  return {
    cvcNumber: value,
    cvcError: error,
    isValidCvcNumber,
    onCvcNumberChange: handleCvcNumberChange,
    onCvcNumberInputBlur: handleCvcNumberInputBlur,
  };
};

export default useCardCvcInput;
