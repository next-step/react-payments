import { ChangeEvent, useCallback } from "react";

import { CARD_VALIDATION_ERROR_MESSAGES } from "@/constants/alertMessages";
import { CARD_INPUT_VARIABLES } from "@/constants/variables";
import useInput from "@/hooks/useInput";

type CardOwnerInput = {
  ownerName: string;
};

const validateCardOwnerName = (value: string) => {
  if (value.length > CARD_INPUT_VARIABLES.OWNER_NAME_MAX_LENGTH) {
    alert(CARD_VALIDATION_ERROR_MESSAGES.INVALID_OWNER_NAME_LENGTH);
    return false;
  }

  return true;
};

const useCardOwnerInput = (initialValue: CardOwnerInput) => {
  const { value, onChange } = useInput(initialValue);

  const handleCardOwnerNameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { target } = e;

      if (!validateCardOwnerName(target.value)) return;

      onChange(e);
    },
    [value]
  );

  return {
    cardOwnerName: value,
    onCardOwnerNameChange: handleCardOwnerNameChange,
  };
};

export default useCardOwnerInput;
