import { useContext } from "react";
import { KeyboardContext } from "../components/KeyboardProvider";
function useKeyboardContext() {
  const keyboardContext = useContext(KeyboardContext);

  if (!keyboardContext) {
    alert("keyboard context 누락");
    throw Error("keyboard context 필수값 누락");
  }

  const { isOpen, setIsOpen } = keyboardContext;

  return { isOpen, setIsOpen };
}

export default useKeyboardContext;
