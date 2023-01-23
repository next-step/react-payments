import { useCallback, useEffect, useMemo, useState } from "react";
import {
  findCardBrandByLabel,
  findCardBrandByPattern,
  splitGroupCardBrands,
  TCardNumber,
} from "../../../../../../domain";
import { useCardStateContext } from "../../../../providers";

export default function useCardBrands(
  onSelect: (pattern?: [TCardNumber, TCardNumber]) => void
) {
  const { cardState, changeCardState } = useCardStateContext();
  const groups = useMemo(() => splitGroupCardBrands(4), []);
  const [selectedLabel, selectLabel] = useState("");

  const handleSelect = useCallback(
    (label: string) => {
      const numbers = findCardBrandByLabel(label)?.pattern;
      selectLabel(label);
      changeCardState({ numbers });
      onSelect(numbers);
    },
    [changeCardState, onSelect]
  );

  useEffect(() => {
    if (selectedLabel !== "") {
      return;
    }
    const { label = "" } =
      findCardBrandByPattern(cardState.numbers || []) || {};
    selectLabel(label);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardState.numbers]);

  return {
    groups,
    selectedLabel,
    handleSelect,
  };
}
