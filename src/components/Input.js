import { useState, useRef } from "react";
import { CARD_NUMBER } from "../constants/card";

export default function Input({ className, type, placeholder, maxLength }) {
  const [inputValue, setInputValue] = useState("");

  // TODO : 카드번호, 만료일, 보안코드, 카드 비밀번호, 카드 소유자이름 구분
  // TODO : Input 컴포넌트로 통합?

  function handleChange() {
    setInputValue(inputValue);
  }
  function isValidValue(data) {
    return true;
  }
  function handleKeyDown({ key }) {
    const data = key;
    if (!isValidValue(data)) return;
    // console.log(className, data, inputValue);
  }
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      maxLength={maxLength}
    ></input>
  );
}
