// import { useState, useRef } from "react";
import { CARD_EXPIRATION } from "../constants/card";
import Span from "./Span";

export default function CardExpirationInput({cardExpiration, onChange}) {
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
              onChange={onChange}
              value={cardExpiration[name]}
              maxLength={CARD_EXPIRATION.MAX_LENGTH}
            ></input>
          );
        })}
      </div>
    </div>
  );
}
