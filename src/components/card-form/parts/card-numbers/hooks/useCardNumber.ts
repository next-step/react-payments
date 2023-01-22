import { ChangeEvent, useCallback } from "react";
import { isCardNumber } from "../../../../../domain";
import { useFocusNext, useNumberInput } from "../../../hooks";

const MAX_LENGTH = 4;

interface IProps {
  focusNext: () => void;
  onInput: () => void;
}

export default function useCardNumber({ focusNext, onInput }: IProps) {
  const isValid = useCallback((value: string) => {
    return isCardNumber(value) && value.length === MAX_LENGTH;
  }, []);

  const [$cardNumber, { handleInput, invalid }] = useNumberInput({
    valueLength: MAX_LENGTH,
    isValid,
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
