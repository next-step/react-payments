import { useState } from "react";
import { CARD_SECURITY_CODE } from "../constants/card";
import Span from "./Span";

// TODO : 마지막 입력값을 구분하기 위한 keydown, state 변경을 위한 onchange 구분은 불가피한건가?
export default function CardSecurityCodeInput({
  className,
  type,
  placeholder,
  maxLength,
}) {
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
    if (!isValidSecurityCode(key)) {
      alert("숫자만 입력 가능합니다.");
      event.preventDefault();
      return false;
    }
  }
  function handleChange(event) {
    const { value } = event.target;
    setInputValue(value);
  }
  return (
    <div className="input-container">
      <Span className="input-title">보안코드(CVC/CVV)</Span>
      <input
        className="input-basic w-25 card-cvc-code"
        type="password"
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        defaultValue={inputValue}
        maxLength={CARD_SECURITY_CODE.MAX_LENGTH}
      ></input>
    </div>
  );
}
