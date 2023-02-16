import CardNumberInput from "./CardNumberInput";
import CardPasswordInput from "./CardPasswordInput";
import CardExpirationInput from "./CardExpirationInput";
import CardOwnerNameInput from "./CardOwnerNameInput";
import CardSecurityCodeInput from "./CardSecurityCodeInput";
import Input from "./Input";
import Span from "./Span";

import {
  CARD_NUMBER,
  CARD_SECURITY_CODE,
  CARD_PASSWORD,
  CARD_EXPIRATION,
  CARD_OWNER_NAME,
} from "../constants/card";
export default function CardInfoForm() {
  return (
    <>
      <div className="input-container">
        <Span className="input-title">카드 번호</Span>
        <div className="input-box">
          <CardNumberInput
            className="input-basic card-number"
            type="text"
            maxLength={CARD_NUMBER.MAX_LENGTH}
          ></CardNumberInput>
          {"-"}
          <CardNumberInput
            className="input-basic card-number"
            type="text"
            maxLength={CARD_NUMBER.MAX_LENGTH}
          ></CardNumberInput>
          {"-"}
          <CardNumberInput
            className="input-basic card-number"
            type="password"
            maxLength={CARD_NUMBER.MAX_LENGTH}
          ></CardNumberInput>
          {"-"}
          <CardNumberInput
            className="input-basic card-number"
            type="password"
            maxLength={CARD_NUMBER.MAX_LENGTH}
          ></CardNumberInput>
        </div>
      </div>
      <div className="input-container">
        <Span className="input-title">만료일</Span>
        <div className="input-box w-50">
          <CardExpirationInput
            className="input-basic card-expiration-"
            type="text"
            placeholder="MM"
            maxLength={CARD_EXPIRATION.MAX_LENGTH}
          ></CardExpirationInput>
          {"/"}
          <CardExpirationInput
            className="input-basic card-expiration"
            type="text"
            placeholder="YY"
            maxLength={CARD_EXPIRATION.MAX_LENGTH}
          ></CardExpirationInput>
        </div>
      </div>
      <div className="input-container">
        <Span className="input-title">카드 소유자 이름(선택)</Span>
        <CardOwnerNameInput
          className="input-basic card-owner-name"
          type="text"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          maxLength={CARD_OWNER_NAME.MAX_LENGTH}
        ></CardOwnerNameInput>
      </div>
      <div className="input-container">
        <Span className="input-title">보안코드(CVC/CVV)</Span>
        <CardSecurityCodeInput
          className="input-basic w-25 card-cvc-code"
          type="password"
          maxLength={CARD_SECURITY_CODE.MAX_LENGTH}
        ></CardSecurityCodeInput>
      </div>
      <div className="input-container">
        <Span className="input-title">카드 비밀번호</Span>
        <CardPasswordInput
          className="input-basic w-15 card-password"
          type="password"
          maxLength={CARD_PASSWORD.MAX_LENGTH}
        ></CardPasswordInput>{" "}
        <CardPasswordInput
          className="input-basic w-15 card-password"
          type="password"
          maxLength={CARD_PASSWORD.MAX_LENGTH}
        ></CardPasswordInput>{" "}
        <CardPasswordInput
          className="input-basic w-15 card-password"
          type="password"
          maxLength={CARD_PASSWORD.MAX_LENGTH}
        ></CardPasswordInput>{" "}
        <CardPasswordInput
          className="input-basic w-15 card-password"
          type="password"
          maxLength={CARD_PASSWORD.MAX_LENGTH}
        ></CardPasswordInput>
      </div>
      <div className="button-box">
        <Span className="button-text">다음</Span>
      </div>
      {/* <AddedCard></AddedCard> */}
      {/* <CardList></CardList> */}
    </>
  );
}
