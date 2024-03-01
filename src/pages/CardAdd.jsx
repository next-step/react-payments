import { useState, useRef } from "react";
import {
  getHpyenAddedNumberSting,
  getNumberString,
  isNumericString,
  isValidateMonth,
} from "../util/regExp";

export default function CardAdd() {
  // 카드 번호
  const [cardNumber, setCardNumber] = useState("");

  // 만료일(MM)
  const expirationMMRef = useRef(null);
  const [expirationMM, setExpirationMM] = useState("");
  // 만료일(YY)
  const expirationYYRef = useRef(null);
  const [expirationYY, setExpirationYY] = useState("");

  // 카드 번호
  const handleCardNumberInput = (event) => {
    const onlyNumberCardValue = getNumberString(event.target.value);
    const cardNumber16Digits = onlyNumberCardValue.slice(0, 16);
    const hypenAddedCardNumber16Digits =
      getHpyenAddedNumberSting(cardNumber16Digits);
    setCardNumber(hypenAddedCardNumber16Digits);

    if (cardNumber16Digits.length === 16) {
      expirationMMRef.current.focus();
    }
  };

  // 만료일
  const handleExpirationMMInput = (event) => {
    const nowExpirationMM = event.target.value;

    if (nowExpirationMM === "") {
      setExpirationMM("");
      return;
    }

    if (!isNumericString(nowExpirationMM)) {
      alert("숫자만 입력해주세요!");
      return;
    }

    if (nowExpirationMM.length >= 2 && !isValidateMonth(nowExpirationMM)) {
      alert("유효한 월을 입력해주세요!");
      return;
    }

    if (nowExpirationMM.length === 2) {
      expirationYYRef.current.focus();
    }

    setExpirationMM(nowExpirationMM);
  };

  const handleExpirationYYInput = (event) => {
    const nowExpirationYY = event.target.value;
    if (nowExpirationYY.length === 2) {
      console.log("YY 길이 2개");
    }
    setExpirationYY(nowExpirationYY);
  };

  return (
    <div className="root">
      <div className="app">
        <h2 className="page-title">{"<"} 카드 추가</h2>
        {/* 카드 */}
        <div className="card-box">
          <div className="empty-card">
            <div className="card-top"></div>
            <div className="card-middle">
              <div className="small-card__chip"></div>
            </div>
            <div className="card-bottom">
              <div className="card-bottom_info">
                <span className="card-text">NAME</span>
                <span className="card-text">MM / YY</span>
              </div>
            </div>
          </div>
        </div>
        {/* 카드 번호 */}
        <div className="input-container">
          <span className="input-title">카드 번호</span>
          <div className="input-box">
            <input
              value={cardNumber}
              onChange={handleCardNumberInput}
              className="input-basic"
              type="text"
            />
          </div>
        </div>
        {/* 만료일 */}
        <div className="input-container">
          <span className="input-title">만료일</span>
          <div className="input-box w-50">
            <input
              value={expirationMM}
              onChange={handleExpirationMMInput}
              ref={expirationMMRef}
              className="input-basic"
              type="text"
              placeholder="MM"
            />
            <input
              value={expirationYY}
              onChange={handleExpirationYYInput}
              ref={expirationYYRef}
              className="input-basic"
              type="text"
              placeholder="YY"
            />
          </div>
        </div>
        {/* 카드 소유자 이름 */}
        <div className="input-container">
          <span className="input-title">카드 소유자 이름(선택)</span>
          <input
            type="text"
            className="input-basic"
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          />
        </div>
        {/* 보안 코드 */}
        <div className="input-container">
          <span className="input-title">보안코드(CVC/CVV)</span>
          <input className="input-basic w-25" type="password" />
        </div>
        {/* 카드 비밀번호 */}
        <div className="input-container">
          <span className="input-title">카드 비밀번호</span>
          <input className="input-basic w-15" type="password" />
          <input className="input-basic w-15" type="password" />
          <input className="input-basic w-15" type="password" />
          <input className="input-basic w-15" type="password" />
        </div>
        <div className="button-box">
          <span className="button-text">다음</span>
        </div>
      </div>
    </div>
  );
}
