import { useState } from "react";

export default function useCardPassword() {
  // TODO : inputValue가 개별 input 태그에 들어가있음. 상위 상태와 개별 상태 구분 필요
  // TODO : disabled 선택적으로 주기
  // TODO : 배열 값 불변성 유지 - spread operator
  const [inputValue, setInputValue] = useState([null, null, null, null]);

  function isValidPassword(value) {
    const pattern_num = /[0-9]/;
    if (pattern_num.test(value)) return true;
    if (value === "Backspace" || value === "Tab" || value == "Meta")
      return true;
  }

  function handleKeyDown(event) {
    const { key } = event;
    if (!isValidPassword(key)) {
      alert("숫자만 입력 가능합니다");
      event.preventDefault();
      return false;
    }
    setInputValue([...inputValue]);
  }

  return [inputValue, handleKeyDown];
}
