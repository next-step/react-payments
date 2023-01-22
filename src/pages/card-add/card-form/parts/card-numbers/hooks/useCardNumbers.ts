import { useCallback } from "react";
import { useCardStateContext } from "../../../../providers";
import { useFocusHandler, useInputRefs } from "../../../hooks";

const REF_SIZE = 4;
export default function useCardNumbers() {
  const refs = useInputRefs(REF_SIZE);
  const createFocusHandler = useFocusHandler();
  const { changeCardState } = useCardStateContext();

  const handleInputNumber = useCallback(() => {
    changeCardState({
      numbers: refs
        .map((ref) => ref.current?.value)
        .filter((value): value is string => Boolean(value)),
    });
  }, [changeCardState, refs]);

  return {
    refs,
    handleInputNumber,
    createFocusHandler,
  };
}
