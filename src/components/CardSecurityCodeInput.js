import { useState } from "react";
import { CARD_SECURITY_CODE } from "../constants/card";
import Span from "./Span";
import useSecurityCode from "../hooks/useSecurityCode";

// TODO : 마지막 입력값을 구분하기 위한 keydown, state 변경을 위한 onchange 구분은 불가피한건가?
export default function CardSecurityCodeInput({
  className,
  type,
  placeholder,
  maxLength,
}) {
  const [inputValue, onChange] = useSecurityCode();

  return (
    <div className="input-container">
      <Span className="input-title">보안코드(CVC/CVV)</Span>
      <input
        className="input-basic w-25 card-cvc-code"
        type="password"
        onKeyDown={onChange}
        defaultValue={inputValue}
        maxLength={CARD_SECURITY_CODE.MAX_LENGTH}
      ></input>
    </div>
  );
}
