import classnames from "classnames";
import { useCallback } from "react";

interface IProps {
  selected: boolean;
  select: (label: string) => void;
  label: string;
  colorStyle: string;
}

export default function CardType({
  label,
  colorStyle,
  selected,
  select,
}: IProps) {
  const handleSelect = useCallback(() => {
    select(label);
  }, [label, select]);

  return (
    <div className="modal-item-container">
      <div
        className={classnames("modal-item-dot", {
          selected,
        })}
        style={{ backgroundColor: colorStyle }}
        onClick={handleSelect}
      />
      <span className="modal-item-name">{label}</span>
    </div>
  );
}
