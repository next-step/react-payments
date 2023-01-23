import { useCallback, useState } from "react";
import { useCardStateContext } from "../../../../providers";
import { useFocusHandler, useInputRefs } from "../../../hooks";
import CardBrands from "../CardBrands";
import { TCardNumber } from "../../../../../../domain";
import { useModal } from "../../../../hooks";

const REF_SIZE = 4;
export default function useCardNumbers() {
  const refs = useInputRefs(REF_SIZE);
  const [$first, $second, $third, $fourth] = refs;
  const createFocusHandler = useFocusHandler();
  const { changeCardState } = useCardStateContext();
  const [showedModal, setShowedModal] = useState(false);

  const { showModal, closeModal } = useModal(() => (
    <CardBrands onSelect={handleSelectCardBrand} />
  ));

  const focusSecond = createFocusHandler($second);
  const focusThird = createFocusHandler($third);
  const focusFourth = createFocusHandler($fourth);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const blurSecond = useCallback(() => $second.current?.blur(), []);

  const blurOrFocusThird = useCallback(() => {
    if (!showedModal) {
      blurSecond();
      showModal({ onClose: () => focusThird() });
      setShowedModal(true);
    } else {
      focusThird();
    }
  }, [showedModal, blurSecond, showModal, focusThird]);

  const handleSelectCardBrand = useCallback(
    (pattern?: [TCardNumber, TCardNumber]) => {
      if ($first.current && $second.current) {
        $first.current.value = pattern?.[0] || "";
        $second.current.value = pattern?.[1] || "";
      }
      closeModal();
      focusThird();
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [closeModal, focusThird]
  );

  const handleInputNumber = useCallback(() => {
    const numbers = refs.map((ref) => ref.current?.value || "");

    changeCardState({ numbers });
  }, [changeCardState, refs]);

  return {
    refs,
    handleInputNumber,
    focusHandlers: [focusSecond, blurOrFocusThird, focusFourth],
  };
}
