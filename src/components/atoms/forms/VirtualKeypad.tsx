import { CSSProperties, MouseEventHandler, useCallback } from "react";
import { shuffle } from "../../../utils";
import Button from "./Button";

interface IProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onDelete?: () => void;
}

const DELETE_KEY = "Delete";
const BLANK = "";
const KEYPAD_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const VIRTUAL_KEYPAD_STYLE: CSSProperties = {
  padding: "10px",
  display: "grid",
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "repeat(4, 1fr)",
} as const;

const getSortedKeypadValues = () =>
  shuffle(KEYPAD_VALUES).concat([BLANK, DELETE_KEY]).map(String);

export default function VirtualKeypad({ onClick, onDelete }: IProps) {
  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      const { value } = event.currentTarget;
      if (value === BLANK) {
        return;
      }
      if (value === DELETE_KEY) {
        onDelete?.();
        return;
      }
      onClick?.(event);
    },
    [onClick, onDelete]
  );

  return (
    <div style={VIRTUAL_KEYPAD_STYLE}>
      {getSortedKeypadValues().map((value, key) => (
        <Button key={key} type="keypad" value={value} onClick={handleClick}>
          {value}
        </Button>
      ))}
    </div>
  );
}
