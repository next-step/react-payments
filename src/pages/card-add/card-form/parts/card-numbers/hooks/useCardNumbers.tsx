import { useCallback, useState } from "react";
import { useCardStateContext } from "../../../../providers";
import { useFocusHandler, useInputRefs } from "../../../hooks";
import CardBrands from "../CardBrands";
import { isCardNumber, TCardNumber } from "../../../../../../domain";
import { useModal } from "../../../../hooks";

const REF_SIZE = 4;
export default function useCardNumbers() {
  const refs = useInputRefs(REF_SIZE);
  const createFocusHandler = useFocusHandler();
  const { changeCardState } = useCardStateContext();
  const [showedModal, setShowedModal] = useState(false);

  const { showModal, closeModal } = useModal(() => (
    <CardBrands onSelect={handleSelectCardBrand} />
  ));

  const handleSelectCardBrand = useCallback(
    (pattern?: [TCardNumber, TCardNumber]) => {
      const [$first, $second, $third] = refs;
      if ($first.current && $second.current && $third.current) {
        $first.current.value = pattern?.[0] || "";
        $second.current.value = pattern?.[1] || "";
        $third.current.focus();
      }
      closeModal();
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [closeModal]
  );

  const handleInputNumber = useCallback(() => {
    closeModal();
    const numbers = refs
      .map((ref) => ref.current?.value)
      .filter((value): value is string => Boolean(value));

    changeCardState({ numbers });

    if (!showedModal && numbers.slice(0, 2).filter(isCardNumber).length === 2) {
      showModal();
      setShowedModal(true);
    }
  }, [changeCardState, closeModal, refs, showModal, showedModal]);

  return {
    refs,
    handleInputNumber,
    createFocusHandler,
  };
}
