import { useState } from "react";
import { CARD_PASSWORD } from "../constants/card";

export default function CardPasswordInput({
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
    // TODO : nextsibling auto focus (useRef)
    // if (inputValue.length >= CARD_PASSWORD.MAX_LENGTH) return false;
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
