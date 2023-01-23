import { CSSProperties, MouseEventHandler, useCallback } from "react";
import Button from "./Button";

interface IProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] as const;

const VIRTUAL_KEYPAD_STYLE: CSSProperties = {
  padding: "10px",
  display: "grid",
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "repeat(4, 1fr)",
} as const;

export default function VirtualKeypad({ onClick }: IProps) {
  const getSortedNumbers = useCallback(
    () => [...numbers, "", ""].sort(() => Math.random() - 0.5),
    []
  );

  return (
    <div style={VIRTUAL_KEYPAD_STYLE}>
      {getSortedNumbers().map((number, key) => (
        <Button key={key} type="keypad" value={key} onClick={onClick}>
          {number}
        </Button>
      ))}
    </div>
  );
}
