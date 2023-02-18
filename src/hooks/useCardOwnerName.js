import { useState } from "react";
import { CARD_OWNER_NAME } from "../constants/card";

export default function useCardOwnerName() {
  const [inputValue, setInputValue] = useState("");

  // TODO : 입력값 유효성 검사 시 state 갱신이 안되는 오류
  // function isValidOwnerName(value) {
  //   const pattern_num = /[0-9]/; // 숫자
  //   const pattern_spc = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자
  //   if (pattern_spc.test(value) || pattern_num.test(value)) return false;
  //   if (value === "Backspace" || value === "Tab" || value == "Meta")
  //     return true;
  //   return true;
  // }
  // function handleKeyDown(event) {
  //   const { key } = event;
  //   if (!isValidOwnerName(key)) {
  //     alert("특수문자 및 숫자는 입력이 불가능합니다.");
  //     event.preventDefault();
  //     return false;
  //   }
  // }

  function isValidInputValue(value) {
    if (value.length > CARD_OWNER_NAME.MAX_LENGTH) return false;
    return true;
  }

  function handleChange(event) {
    // const { key } = event;
    const { value } = event.target;
    // console.log(inputValue, value); // TODO : 왜 inputValue값과 targetValue 값이 다르지?
    if (isValidInputValue(value)) setInputValue(value);
  }

  return [inputValue, handleChange];
}
