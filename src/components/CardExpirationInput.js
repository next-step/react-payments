// import { useState, useRef } from "react";
import { CARD_EXPIRATION } from "../constants/card";
import Span from "./Span";
import useCardExpiration from "../hooks/useCardExpiration";

export default function CardExpirationInput() {
  const [inputValue, onChange] = useCardExpiration();

  // TODO : nextsibling auto focus & key 값 제어 (useRef)
  // const dataId = useRef(0);

  return (
    <div className="input-container">
      <Span className="input-title">만료일</Span>
      <div className="input-box w-50">
        {inputValue.map((number, index) => {
          return (
            <input
              className="input-basic card-expiration"
              type="text"
              placeholder={index == 0 ? "MM" : "YY"}
              key={number}
              onKeyDown={onChange}
              onChange={onChange}
              defaultValue={number}
              maxLength={CARD_EXPIRATION.MAX_LENGTH}
            ></input>
          );
        })}
      </div>
    </div>
  );
}
