import { useState } from "react";
import { CARD_EXPIRATION } from "../constants/card";

export default function CardExpirationInput({
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
    // TODO : 월(1~12) & 일(1~31)
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
