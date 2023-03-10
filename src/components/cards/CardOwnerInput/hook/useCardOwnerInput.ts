import { ChangeEvent, useCallback, useMemo } from "react";

import { CARD_VALIDATION_ERROR_MESSAGES } from "@/constants/messages/error";
import { CARD_INPUT_VARIABLES } from "@/constants/variables";
import { tryCatch } from "@/helper";
import { useInput } from "@/hooks";
import { ValidationError } from "@/services/errors";

type CardOwnerInput = {
  ownerName: string;
};

const validateCardOwnerName = (value: string) => {
  if (value.length > CARD_INPUT_VARIABLES.OWNER_NAME_MAX_LENGTH) {
    throw new ValidationError({
      name: "INPUT_VALIDATION_ERROR",
      message: CARD_VALIDATION_ERROR_MESSAGES.INVALID_OWNER_NAME_LENGTH,
    });
  }
};

const isAllCardOwnerFieldFilled = (cardOwner: CardOwnerInput) =>
  cardOwner.ownerName.length;

const useCardOwnerInput = (initialValue: CardOwnerInput) => {
  const { value, error, onChange, setError } = useInput(initialValue);

  const handleCardOwnerNameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { target } = e;

      tryCatch(() => validateCardOwnerName(target.value), setError);

      onChange(e);
    },
    [value]
  );

  const handleCardOwnerInputBlur = useCallback(() => {
    if (!isAllCardOwnerFieldFilled(value)) {
      tryCatch(() => {
        throw new ValidationError({
          name: "INPUT_VALIDATION_ERROR",
          message: CARD_VALIDATION_ERROR_MESSAGES.REQUIRED,
        });
      }, setError);
    }
  }, [value]);

  const isValidOwnerName = useMemo(
    () =>
      value.ownerName.length <= CARD_INPUT_VARIABLES.OWNER_NAME_MAX_LENGTH &&
      value.ownerName.length > 0,
    [value]
  );

  return {
    cardOwnerName: value,
    cardOwnerError: error,
    isValidOwnerName,
    onCardOwnerNameChange: handleCardOwnerNameChange,
    onCardOwnerInputBlur: handleCardOwnerInputBlur,
  };
};

export default useCardOwnerInput;
