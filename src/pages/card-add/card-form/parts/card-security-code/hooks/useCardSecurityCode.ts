import { ChangeEvent, useCallback } from "react";
import { useFocusNext, useNumberInput } from "../../../hooks";
import { isSecurityCode } from "../../../../../../domain";
import { useCardStateContext } from "../../../../providers";

const MAX_LENGTH = 3;

export default function useCardSecurityCode(focusNext: () => void) {
  const { changeCardState } = useCardStateContext();
  const [$ref, { invalid, handleInput }] = useNumberInput({
    valueLength: MAX_LENGTH,
    isValid: isSecurityCode,
  });

  const handleInputSecurityCode = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      handleInput(event);
      changeCardState({ securityCode: event.target.value });
    },
    [changeCardState, handleInput]
  );

  useFocusNext({ invalid, focusNext });

  return [$ref, { invalid, handleInput: handleInputSecurityCode }] as const;
}
