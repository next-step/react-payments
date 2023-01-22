import { useCallback, useEffect, useMemo, useState } from "react";
import { TCardNumber } from "../../../../../../domain";
import { useCardStateContext } from "../../../../providers";
import {
  findCardTypeByLabel,
  findCardTypeByPattern,
  splitGroupCardTypes,
} from "../../../../../../domain/CardTypeItems";

export default function useCardTypes(
  onSelect: (pattern?: [TCardNumber, TCardNumber]) => void
) {
  const { cardState, changeCardState } = useCardStateContext();
  const groups = useMemo(() => splitGroupCardTypes(4), []);
  const [selectedLabel, selectLabel] = useState("");

  const handleSelect = useCallback(
    (label: string) => {
      const numbers = findCardTypeByLabel(label)?.pattern;
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
    const { label = "" } = findCardTypeByPattern(cardState.numbers || []) || {};
    selectLabel(label);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardState.numbers]);

  return {
    groups,
    selectedLabel,
    handleSelect,
  };
}
