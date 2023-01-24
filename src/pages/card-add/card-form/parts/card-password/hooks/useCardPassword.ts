import { ChangeEvent, useCallback } from "react";
import { useFocusNext, useNumberInput } from "../../../hooks";
import { isSingleNumber } from "../../../../../../domain";
import { useCardStateContext } from "../../../../../../providers";

const MAX_LENGTH = 1;
export default function useCardPassword() {
  const { changeCardState } = useCardStateContext();
  const [$first, firstProps] = useNumberInput({
    valueLength: MAX_LENGTH,
    isValid: isSingleNumber,
  });

  const [$second, secondProps] = useNumberInput({
    valueLength: MAX_LENGTH,
    isValid: isSingleNumber,
  });

  useFocusNext({
    invalid: firstProps.invalid,
    focusNext: () => $second.current?.focus(),
  });

  const updatePassword = useCallback(
    () =>
      changeCardState({
        password: `${$first.current?.value || ""}${
          $second.current?.value || ""
        }`,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleInputFirstPassword = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      firstProps.handleInput(event);
      updatePassword();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleInputSecondPassword = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      secondProps.handleInput(event);
      updatePassword();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return {
    refs: [$first, $second],
    updatePassword,
    firstProps: {
      invalid: firstProps.invalid,
      handleInput: handleInputFirstPassword,
    },
    secondProps: {
      invalid: secondProps.invalid,
      handleInput: handleInputSecondPassword,
    },
  } as const;
}
