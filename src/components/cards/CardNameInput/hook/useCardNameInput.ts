import { ChangeEvent, useCallback } from "react";

import { CARD_VALIDATION_ERROR_MESSAGES } from "@/constants/messages/error";
import { CARD_INPUT_VARIABLES } from "@/constants/variables";
import { tryCatch } from "@/helper";
import { useInput } from "@/hooks";
import { ValidationError } from "@/services/errors";

export type CardName = {
  cardName: string;
};

const validateCardNameInput = (value: string) => {
  if (value.length >= CARD_INPUT_VARIABLES.CARD_NAME_MAX_LENGTH) {
    throw new ValidationError({
      name: "INPUT_VALIDATION_ERROR",
      message: CARD_VALIDATION_ERROR_MESSAGES.INVALID_CARD_NAME_LENGTH,
    });
  }
};

const useCardNameInput = (initialState: CardName) => {
  const { value, onChange } = useInput(initialState);

  const handleCardNameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { target } = e;

      const { error } = tryCatch(() => validateCardNameInput(target.value));

      if (!error) onChange(e);
    },
    [value]
  );

  return {
    cardName: value,
    onCardNameChange: handleCardNameChange,
  };
};

export default useCardNameInput;
