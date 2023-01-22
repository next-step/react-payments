import { useCallback } from "react";
import { useCardFormContext } from "../../../providers";
import { isCardNumber } from "../../../../../domain";
import { useFocusHandler, useInputRefs } from "../../../hooks";

const REF_SIZE = 4;
export default function useCardNumbers() {
  const refs = useInputRefs(REF_SIZE);
  const createFocusHandler = useFocusHandler();
  const { changeCardState } = useCardFormContext();

  const handleInputNumber = useCallback(() => {
    const numbers = refs.map((ref) => ref.current?.value).filter(isCardNumber);

    changeCardState({ numbers });
  }, [changeCardState, refs]);

  return {
    refs,
    handleInputNumber,
    createFocusHandler,
  };
}
