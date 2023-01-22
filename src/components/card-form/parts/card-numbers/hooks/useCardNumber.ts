import { ChangeEvent, useCallback } from "react";
import { isCardNumber } from "../../../../../domain";
import { useFocusNext, useNumberInput } from "../../../hooks";

const MAX_LENGTH = 4;

interface IProps {
  focusNext: () => void;
  onInput: () => void;
}

export default function useCardNumber({ focusNext, onInput }: IProps) {
  const [$cardNumber, { handleInput, invalid }] = useNumberInput({
    valueLength: MAX_LENGTH,
    isValid: isCardNumber,
  });

  const handleNumberInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      handleInput(event);
      onInput();
    },
    [handleInput, onInput]
  );

  useFocusNext({ invalid, focusNext });

  return {
    $cardNumber,
    handleNumberInput,
    invalid,
  };
}
