import { ChangeEvent, useCallback } from "react";

import { OVER_CARD_OWNER_NAME_MAX_LENGTH } from "@/constants/alertMessages";
import { CARD_OWNER_NAME_MAX_LENGTH } from "@/constants/variables";
import useInput from "@/hooks/useInput";

const useCardOwnerInput = (initialValue: string) => {
  const { value, onChange } = useInput(initialValue);

  const handleCardOwnerNameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { target } = e;

      if (!(target instanceof HTMLInputElement)) return;

      if (target.value.length > CARD_OWNER_NAME_MAX_LENGTH) {
        alert(OVER_CARD_OWNER_NAME_MAX_LENGTH);
        return;
      }

      onChange(target.value);
    },
    [value]
  );

  return {
    cardOwnerName: value,
    onCardOwnerNameChange: handleCardOwnerNameChange,
  };
};

export default useCardOwnerInput;
