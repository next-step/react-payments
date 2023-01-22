import { useCallback } from "react";
import { useCardFormContext } from "../../../providers";
import { isCardNumber } from "../../../../../domain";
import { useRefsWithFocusHandler } from "../../../hooks";

const REF_SIZE = 4;
export default function useCardNumbers() {
  const { refs, createFocusHandler } = useRefsWithFocusHandler(REF_SIZE);
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
