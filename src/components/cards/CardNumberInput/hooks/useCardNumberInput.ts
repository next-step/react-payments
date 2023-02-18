import { KeyboardEvent, useCallback, useRef } from "react";

import { isNumber } from "@/components/helper";
import {
  INPUT_ONLY_NUMBER,
  OVER_CARD_NUMBER_MAX_LENGTH,
} from "@/constants/alertMessages";
import { CARD_NUMBER_MAX_LENGTH } from "@/constants/variables";
import useInput from "@/hooks/useInput";

const cardNumberFormatter = (cardNumber: string) => {
  return (
    cardNumber
      .match(/[0-9•]{1,4}/g)
      ?.map((number, idx) => {
        if (idx <= 1) {
          return number;
        } else {
          return number.replaceAll(/[0-9]/g, "•");
        }
      })
      .join("-") ?? ""
  );
};

const useCardNumberInput = (initialValue: string) => {
  const { value, onChange } = useInput(initialValue);
  const originalCardNumber = useRef(initialValue);

  const handleNumberKeydown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      const { key } = e;

      if (["Backspace", "Tab", "Shift"].includes(key)) {
        if (key === "Backspace") {
          const currentNumber = originalCardNumber.current;
          originalCardNumber.current = currentNumber.substring(
            0,
            currentNumber.length - 1
          );
        }
      } else {
        if (!isNumber(key) && key !== "Backspace") {
          alert(INPUT_ONLY_NUMBER);
          return;
        }

        if (originalCardNumber.current.length >= CARD_NUMBER_MAX_LENGTH) {
          alert(OVER_CARD_NUMBER_MAX_LENGTH);
          return;
        }

        originalCardNumber.current += key;
      }

      onChange(cardNumberFormatter(originalCardNumber.current));
    },
    [value]
  );

  return {
    cardNumber: value,
    onCardNumberChange: handleNumberKeydown,
  };
};

export default useCardNumberInput;
