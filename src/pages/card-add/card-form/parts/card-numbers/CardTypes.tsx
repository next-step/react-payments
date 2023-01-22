import { useCallback, useEffect, useMemo, useState } from "react";
import { CardTypeItems, TCardNumber } from "../../../../../domain";
import { useCardStateContext } from "../../../providers";
import CardType from "./CardType";

interface IProps {
  onSelect: (pattern?: [TCardNumber, TCardNumber]) => void;
}

export default function CardTypes({ onSelect }: IProps) {
  const groups = useMemo(() => {
    return [CardTypeItems.slice(0, 4), CardTypeItems.slice(4, 8)];
  }, []);
  const { cardState, changeCardState } = useCardStateContext();

  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (selected !== "") {
      return;
    }
    const [first, second] = cardState.numbers || [];
    const selectedType = CardTypeItems.find(({ pattern }) => {
      return pattern[0] === first && pattern[1] === second;
    });
    setSelected(selectedType?.label || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardState.numbers]);

  const handleSelect = useCallback(
    (label: string) => {
      setSelected(label);
      const numbers = CardTypeItems.find(
        (item) => item.label === label
      )?.pattern;
      changeCardState({
        numbers,
      });
      onSelect(numbers);
    },
    [changeCardState, onSelect]
  );

  return (
    <>
      {groups.map((group, index) => (
        <div key={index} className="flex-center">
          {group.map(({ label, colorStyle }) => (
            <CardType
              key={label}
              label={label}
              colorStyle={colorStyle}
              selected={selected === label}
              select={handleSelect}
            />
          ))}
        </div>
      ))}
    </>
  );
}
