import { useState } from "react";
import { CARD_OWNER_NAME } from "../constants/card";

export default function CardOwnerNameInput({
  className,
  type,
  placeholder,
  maxLength,
}) {
  const [inputValue, setInputValue] = useState("");

  function handleChange() {
    setInputValue(inputValue);
  }

  // TODO : 유효성 검사
  // 숫자 입력 불가능
  // 문자열 maxlength 제어
  function isValidValue(data) {
    if (inputValue.length >= CARD_OWNER_NAME.MAX_LENGTH) return false;
    return true;
  }
  function handleKeyDown({ key }) {
    const data = key;
    console.log(inputValue.length, CARD_OWNER_NAME.MAX_LENGTH);
    if (!isValidValue(data)) return;
  }
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      defaultValue={inputValue}
      maxLength={maxLength}
    ></input>
  );
}
