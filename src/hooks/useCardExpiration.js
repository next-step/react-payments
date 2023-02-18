import { useState } from "react";

export default function useCardExpiration() {
  const [inputValue, setInputValue] = useState([null, null]);

  function isValidExpiration(value) {
    const pattern_num = /[0-9]/;
    if (pattern_num.test(value)) return true;
    if (value === "Backspace" || value === "Tab" || value == "Meta")
      return true;
    else return false;
  }

  function handleKeyDown(event) {
    const { key } = event;
    if (!isValidExpiration(key)) {
      alert("숫자만 입력 가능합니다");
      event.preventDefault();
      return false;
    }
  }

  function handleChange(event) {
    const { value } = event.target;

    // TODO : inputValue 갱신 안되는 버그
    console.log(event.target, inputValue, value);

    // TODO : 월(1~12) & 일(1~31)
    if (inputValue[0] == event.target) {
      if (inputValue[0] > 12) {
        alert("만료 월은 1~12 사이 값만 입력 가능합니다.");
        event.preventDefault();
        return false;
      }
    } else {
      if (inputValue[1] > 31) {
        alert("만료 일은 1~31 사이 값만 입력 가능합니다.");
        event.preventDefault();
        return false;
      }
    }
    setInputValue([...inputValue]);
  }

  return [inputValue, handleKeyDown, handleChange];
}
