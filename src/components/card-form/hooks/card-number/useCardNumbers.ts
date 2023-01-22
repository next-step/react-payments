import { useCallback } from "react";
import { useCardFormFocus } from "../card-form-focus";
import { useCardFormContext } from "../../providers";
import { isCardNumber } from "../../../../domain";

const REF_SIZE = 4;
export default function useCardNumbers() {
  const { refs, createFocusHandler } = useCardFormFocus(REF_SIZE);
  const { changeCardState } = useCardFormContext();

  const handleInputNumber = useCallback(() => {
    const numbers = refs.map((ref) => ref.current?.value).filter(isCardNumber);

    changeCardState({ numbers });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeCardState]);

  return {
    refs,
    handleInputNumber,
    createFocusHandler,
  };
}
