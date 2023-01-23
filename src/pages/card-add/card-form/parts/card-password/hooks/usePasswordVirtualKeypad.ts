import { useVirtualKeypad } from "../../../hooks";

const MAX_SIZE = 1;
export default function usePasswordVirtualKeypad(updatePassword: () => void) {
  return useVirtualKeypad({
    maxSize: MAX_SIZE,
    onClickKeypad: updatePassword,
    onDeleteKeypad: updatePassword,
  });
}
