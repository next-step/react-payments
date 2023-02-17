import { useState, useRef } from "react";
import { CARD_NUMBER } from "../constants/card";
import Span from "./Span";

// TODO : {"-"} 구분자 입력
export default function CardNumberInput({
  className,
  type,
  placeholder,
  maxLength,
}) {
  const [inputValue, setInputValue] = useState([null, null, null, null]);
  const dataId = useRef(0); // TODO : nextsibling auto focus & key 값 제어 (useRef)

  function isValidCardNumber(value) {
    const pattern_num = /[0-9]/;
    const pattern_spc = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자
    if (
      (pattern_spc.test(value) || pattern_num.test(value)) &&
      value !== "Backspace"
    )
      return true;
    else if (value === "Tab") return true;
    else return false;
  }

  function handleKeyDown(event) {
    const { key } = event;
    console.log(key);
    if (!isValidCardNumber(key)) {
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
      <Span className="input-title">카드 번호</Span>
      <div className="input-box">
        {inputValue.map((number, index) => {
          return (
            <input
              className="input-basic card-number"
              type="text"
              key={dataId}
              onKeyDown={handleKeyDown}
              onChange={handleChange}
              defaultValue={number}
              maxLength={CARD_NUMBER.MAX_LENGTH}
            ></input>
          );
        })}
      </div>
    </div>
  );
}
