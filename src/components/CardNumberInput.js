import { useState } from "react";

export default function CardNumberInput({
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
    // if (inputValue.length >= CARD_OWNER_NAME.MAX_LENGTH) {
    // TODO : nextsibling auto focus (useRef)
    // }
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
