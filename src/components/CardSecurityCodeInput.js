import { useState } from "react";
import { CARD_SECURITY_CODE } from "../constants/card";

export default function CardSecurityCodeInput({
  className,
  type,
  placeholder,
  maxLength,
}) {
  const [inputValue, setInputValue] = useState("");

  function handleChange() {
    setInputValue(inputValue);
  }
  function isValidValue(data) {
    if (isNaN(parseInt(data))) return false;
    return true;
  }
  function handleKeyDown({ key }) {
    const data = key;
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
