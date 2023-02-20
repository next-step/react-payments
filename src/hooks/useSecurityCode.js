import { useState } from "react";

export default function useSecurityCode() {
  const [securityCode, setSecurityCode] = useState("");

  function isNumber(value) {
    return !isNaN(Number(value));
  }

  function isValidSecurityCode(value) {
    if(isNumber(value)) return true;
    return false;
  }

  function handleSecurityCode(event) {
    const { value } = event.target;
    if (!isValidSecurityCode(value)) {
      alert("숫자만 입력 가능합니다.");
      return false;
    }
    setSecurityCode(value);
  }

  return [securityCode, handleSecurityCode];
}
