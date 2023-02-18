import { useState } from "react";

export default function useSecurityCode() {
  const [inputValue, setInputValue] = useState("");

  function isValidSecurityCode(value) {
    const pattern_num = /[0-9]/;
    if (pattern_num.test(value)) return true;
    if (value === "Backspace" || value === "Tab" || value == "Meta")
      return true;
    else return false;
  }

  function handleKeyDown(event) {
    const { key } = event;
    const { value } = event.target;
    if (!isValidSecurityCode(key)) {
      alert("숫자만 입력 가능합니다.");
      event.preventDefault();
      return false;
    }
    setInputValue(value);
  }

  return [inputValue, handleKeyDown];
}
