import { useState } from "react";

export default function useCardNumber() {
  const [inputValue, setInputValue] = useState([null, null, null, null]);

  function isValidCardNumber(value) {
    const pattern_num = /[0-9]/;
    const pattern_spc = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자

    if (value === "Backspace" || value === "Tab") return true;
    if (pattern_spc.test(value) || pattern_num.test(value)) return true;
    return false;
  }

  function handleKeyDown(event) {
    const { key } = event;
    if (!isValidCardNumber(key)) {
      alert("숫자만 입력 가능합니다");
      event.preventDefault();
      return false;
    }
    setInputValue([...inputValue]);

    // TODO : inputValue 상태 갱신 안되는중
    // console.log(inputValue);
  }

  return [inputValue, handleKeyDown];
}
