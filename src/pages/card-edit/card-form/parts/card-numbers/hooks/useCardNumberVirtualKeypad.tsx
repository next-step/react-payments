import { useVirtualKeypad } from "../../../hooks";

const MAX_SIZE = 4;
export default function useCardNumberVirtualKeypad(onInput: () => void) {
  return useVirtualKeypad({
    maxSize: MAX_SIZE,
    onDeleteKeypad: onInput,
    onClickKeypad: onInput,
  });
}
