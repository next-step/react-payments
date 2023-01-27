import { useCallback } from "react";
import { useVirtualKeypad } from "../../../hooks";
import { useCardStateContext } from "../../../../../../providers";

const MAX_SIZE = 3;
export default function useCardSecurityVirtualKeypad() {
  const { changeCardState } = useCardStateContext();

  const handleChangeSecurity = useCallback(
    (value: string) => {
      changeCardState({ securityCode: value });
    },
    [changeCardState]
  );

  return useVirtualKeypad({
    maxSize: MAX_SIZE,
    onClickKeypad: handleChangeSecurity,
    onDeleteKeypad: handleChangeSecurity,
  });
}
