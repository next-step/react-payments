import { useState } from "react";
import { CARD_OWNER_NAME } from "../constants/card";
import Span from "./Span";

// TODO : inputValue 상태명이 명시적인가?
// TODO : 유효성 검사 함수명이 너무 비슷하진 않은지
// TODO : 현재 입력 자릿수와 최대 입력 자릿수 위치 조정
// TODO : state를 컴포넌트 내부로 가져와도 되나? 의미가 있는걸까?
export default function CardOwnerNameInput({ type, placeholder, maxLength }) {
  const [inputValue, setInputValue] = useState("");

  function isValidOwnerName(value) {
    const pattern_num = /[0-9]/; // 숫자
    const pattern_spc = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자
    if (pattern_spc.test(value) || pattern_num.test(value)) return false;
    if (value === "Backspace" || value === "Tab" || value == "Meta")
      return true;
    return true;
  }
  function handleKeyDown(event) {
    const { key } = event;
    if (!isValidOwnerName(key)) {
      alert("특수문자 및 숫자는 입력이 불가능합니다.");
      event.preventDefault();
      return false;
    }
  }
  function handleChange({ target }) {
    const { value } = target;
    if (isValidInputValue(value)) setInputValue(value);
    // console.log(inputValue, target.value); // TODO : 왜 inputValue값과 targetValue 값이 다르지?
  }

  function isValidInputValue(value) {
    if (value.length > CARD_OWNER_NAME.MAX_LENGTH) return false;
    return true;
  }

  return (
    <div className="input-container">
      <Span className="input-title">
        카드 소유자 이름(선택)
        {"    "}
        {inputValue.length} {" / "}
        {CARD_OWNER_NAME.MAX_LENGTH}
      </Span>
      <input
        className="input-basic card-owner-name"
        type="text"
        placeholder={CARD_OWNER_NAME.PLACEHOLDER}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        defaultValue={inputValue}
        maxLength={CARD_OWNER_NAME.MAX_LENGTH}
      ></input>
    </div>
  );
}
