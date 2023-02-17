import { useState, useRef } from "react";
import { CARD_EXPIRATION } from "../constants/card";
import Span from "./Span";

// TODO : placeholder
// TODO : 월(1~12) & 일(1~31)
export default function CardExpirationInput({
  className,
  type,
  placeholder,
  maxLength,
}) {
  const [inputValue, setInputValue] = useState([null, null]);
  const dataId = useRef(0); // TODO : nextsibling auto focus & key 값 제어 (useRef)

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
    console.log(inputValue);
    if (inputValue[0] == event.target) {
      if (inputValue > 12) {
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

  return (
    <div className="input-container">
      <Span className="input-title">만료일</Span>
      <div className="input-box w-50">
        {inputValue.map((number, index) => {
          return (
            <input
              className="input-basic card-expiration"
              type="text"
              key={dataId}
              onKeyDown={handleKeyDown}
              onChange={handleChange}
              defaultValue={number}
              maxLength={CARD_EXPIRATION.MAX_LENGTH}
            ></input>
          );
        })}
      </div>
    </div>
  );
}
