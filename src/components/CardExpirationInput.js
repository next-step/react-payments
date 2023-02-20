// import { useState, useRef } from "react";
import { CARD_EXPIRATION } from "../constants/card";
import Span from "./Span";
import useCardExpiration from "../hooks/useCardExpiration";

export default function CardExpirationInput() {
  const [expiration, handleExpiration] = useCardExpiration();

  // TODO : nextsibling auto focus & key 값 제어 (useRef)
  // const dataId = useRef(0);

  return (
    <div className="input-container">
      <Span className="input-title">만료일</Span>
      <div className="input-box w-50">
        {["month", "year"].map((name, index) => {
          return (
            <input
              className="input-basic card-expiration"
              type="text"
              name={name}
              placeholder={index == 0 ? "MM" : "YY"}
              key={index}
              onChange={handleExpiration}
              value={expiration[name]}
              maxLength={CARD_EXPIRATION.MAX_LENGTH}
            ></input>
          );
        })}
      </div>
    </div>
  );
}
