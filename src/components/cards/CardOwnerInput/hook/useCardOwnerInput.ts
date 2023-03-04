import { ChangeEvent, useCallback, useMemo } from "react";

import { CARD_VALIDATION_ERROR_MESSAGES } from "@/constants/messages/error";
import { CARD_INPUT_VARIABLES } from "@/constants/variables";
import { checkValidator } from "@/helper";
import { useInput } from "@/hooks";
import { ValidationError } from "@/services/errors";
import { ValidationResult } from "@/types";

type CardOwnerInput = {
  ownerName: string;
};

const validateCardOwnerName = (value: string): ValidationResult => {
  if (value.length > CARD_INPUT_VARIABLES.OWNER_NAME_MAX_LENGTH) {
    return {
      success: false,
      error: new ValidationError(
        CARD_VALIDATION_ERROR_MESSAGES.INVALID_OWNER_NAME_LENGTH
      ),
    };
  }

  return {
    success: true,
  };
};

const useCardOwnerInput = (initialValue: CardOwnerInput) => {
  const { value, onChange } = useInput(initialValue);

  const handleCardOwnerNameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { target } = e;

      checkValidator(
        target.value,
        validateCardOwnerName,
        onChange.bind(this, e)
      );
    },
    [value]
  );

  const isValidOwnerName = useMemo(
    () =>
      value.ownerName.length <= CARD_INPUT_VARIABLES.OWNER_NAME_MAX_LENGTH &&
      value.ownerName.length > 0,
    [value]
  );

  return {
    cardOwnerName: value,
    isValidOwnerName,
    onCardOwnerNameChange: handleCardOwnerNameChange,
  };
};

export default useCardOwnerInput;
