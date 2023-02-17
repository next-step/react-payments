import { useState, useRef } from "react";
import { CARD_PASSWORD } from "../constants/card";
import Span from "./Span";

export default function CardPasswordInput({
  className,
  type,
  placeholder,
  maxLength,
}) {
  // TODO : inputValue가 개별 input 태그에 들어가있음. 상위 상태와 개별 상태 구분 필요
  // TODO : disabled 선택적으로 주기
  // TODO : 배열 값 불변성 유지 - spread operator
  const [inputValue, setInputValue] = useState([null, null, null, null]);
  const dataId = useRef(0); // TODO : nextsibling auto focus & key 값 제어 (useRef)

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
  }

  function handleChange() {
    setInputValue([...inputValue]);
  }

  return (
    <div className="input-container">
      <Span className="input-title">카드 비밀번호</Span>
      {inputValue.map((number, index) => {
        return (
          <input
            className={
              "input-basic w-15 card-password" +
              (index > 1 ? " input-disabled" : null)
            }
            type="password"
            key={dataId}
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            defaultValue={number}
            maxLength={CARD_PASSWORD.MAX_LENGTH}
            disabled={index > 1 ? true : false}
          ></input>
        );
      })}
    </div>
  );
}
