import { ChangeEvent, useCallback } from "react";

import { isNumber } from "@/components/helper";
import { CVC_NUMBER_MAX_LENGTH } from "@/constants/variables";
import useInput from "@/hooks/useInput";

const useCardCvcInput = (initialValue: string) => {
  const { value, onChange } = useInput(initialValue);

  const handleCvcNumberChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { target } = e;

      if (!(target instanceof HTMLInputElement)) return;

      console.log(isNumber(target.value));

      if (target.value && !isNumber(target.value)) return;

      if (target.value.length > CVC_NUMBER_MAX_LENGTH) return;

      onChange(target.value);
    },
    [value]
  );

  return {
    cvcNumber: value,
    onCvcNumberChange: handleCvcNumberChange,
  };
};

export default useCardCvcInput;
