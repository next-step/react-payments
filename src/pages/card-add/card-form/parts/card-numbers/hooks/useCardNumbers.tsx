import { useCallback, useState } from "react";
import { useCardStateContext } from "../../../../providers";
import { useFocusHandler, useInputRefs } from "../../../hooks";
import useModal from "../../../../hooks/useModal";
import CardTypes from "../CardTypes";
import { isCardNumber, TCardNumber } from "../../../../../../domain";

const REF_SIZE = 4;
export default function useCardNumbers() {
  const refs = useInputRefs(REF_SIZE);
  const createFocusHandler = useFocusHandler();
  const { changeCardState } = useCardStateContext();
  const [showedModal, setShowedModal] = useState(false);

  const handleSelectCardType = useCallback(
    (pattern?: [TCardNumber, TCardNumber]) => {
      const [$first, $second] = refs;
      if ($first.current && $second.current) {
        $first.current.value = pattern?.[0] || "";
        $second.current.value = pattern?.[1] || "";
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const { showModal } = useModal(() => (
    <CardTypes onSelect={handleSelectCardType} />
  ));

  const handleInputNumber = useCallback(() => {
    const numbers = refs
      .map((ref) => ref.current?.value)
      .filter((value): value is string => Boolean(value));

    changeCardState({ numbers });

    if (!showedModal && numbers.slice(0, 2).filter(isCardNumber).length === 2) {
      showModal();
      setShowedModal(true);
    }
  }, [changeCardState, refs, showModal, showedModal]);

  return {
    refs,
    handleInputNumber,
    createFocusHandler,
  };
}
