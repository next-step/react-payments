import { useCallback, useEffect, useMemo, useState } from "react";
import {
  findCardBrandByLabel,
  findCardBrandByPattern,
  splitGroupCardBrands,
  TCardNumber,
} from "../../../../../../domain";
import { useCardStateContext } from "../../../../../../providers";

export default function useCardBrands(
  onSelect: (pattern?: [TCardNumber, TCardNumber]) => void
) {
  const { cardState, changeCardState } = useCardStateContext();
  const groups = useMemo(() => splitGroupCardBrands(4), []);
  const [brandLabel, setBrandLabel] = useState("");

  const handleSelect = useCallback(
    (label: string) => {
      const numbers = findCardBrandByLabel(label)?.pattern;
      setBrandLabel(label);
      changeCardState({ numbers, brand: label });
      onSelect(numbers);
    },
    [changeCardState, onSelect]
  );

  useEffect(() => {
    if (brandLabel !== "") {
      return;
    }
    setBrandLabel(findCardBrandByPattern(cardState.numbers || [])?.label || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardState.numbers]);

  return {
    groups,
    selectedLabel: brandLabel,
    handleSelect,
  };
}
