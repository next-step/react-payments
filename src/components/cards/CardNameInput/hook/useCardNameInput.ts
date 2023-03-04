import { ChangeEvent, useCallback } from "react";

import { CARD_VALIDATION_ERROR_MESSAGES } from "@/constants/messages/error";
import { CARD_INPUT_VARIABLES } from "@/constants/variables";
import { checkValidator } from "@/helper";
import { useInput } from "@/hooks";
import { ValidationError } from "@/services/errors";
import { ValidationResult } from "@/types";

export type CardName = {
  cardName: string;
};

const validateCardNameInput = (value: string): ValidationResult => {
  if (value.length >= CARD_INPUT_VARIABLES.CARD_NAME_MAX_LENGTH) {
    return {
      success: false,
      error: new ValidationError(
        CARD_VALIDATION_ERROR_MESSAGES.INVALID_CARD_NAME_LENGTH
      ),
    };
  }
  return { success: true };
};

const useCardNameInput = (initialState: CardName) => {
  const { value, onChange } = useInput(initialState);

  const handleCardNameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { target } = e;

      checkValidator(
        target.value,
        validateCardNameInput,
        onChange.bind(this, e)
      );
    },
    [value]
  );

  return {
    cardName: value,
    onCardNameChange: handleCardNameChange,
  };
};

export default useCardNameInput;
