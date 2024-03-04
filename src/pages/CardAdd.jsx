import { useState } from "react";
import { Link } from "react-router-dom";
import CardBox from "../components/CardBox";
import Card from "../components/Card";
import {
  FIRST_NUMBER,
  FOURTH_NUMBER,
  SECOND_NUMBER,
  THIRD_NUMBER,
} from "../constants/cardNumber";
import CardNumberInput from "../components/card-add/CardNumberInput";
import { MONTH, YEAR } from "../constants/expirationDate";
import ExpirationDateInput from "../components/card-add/ExpirationDateInput";

export default function CardAdd() {
  // 카드번호
  const [cardNumber, setCardNumber] = useState({
    [FIRST_NUMBER]: "",
    [SECOND_NUMBER]: "",
    [THIRD_NUMBER]: "",
    [FOURTH_NUMBER]: "",
  });

  // 만료일
  const [expirationDate, setExpirationDate] = useState({
    [MONTH]: "",
    [YEAR]: "",
  });

  return (
    <div className="root">
      <div className="app">
        <h2 className="page-title">
          <Link to="/" className="button-basic">
            {"<"}
          </Link>
          <span className="ml-10">카드 추가</span>
        </h2>

        {/* 카드 */}
        <CardBox>
          <Card
            alias={"카드 별칭"}
            cardNumber={cardNumber}
            expirationDate={expirationDate}
          />
        </CardBox>

        {/* 카드 번호 */}
        <div className="input-container">
          <span className="input-title">카드 번호</span>
          <CardNumberInput
            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
          />
        </div>
        {/* 만료일 */}
        <div className="input-container">
          <span className="input-title">만료일</span>
          <ExpirationDateInput
            expirationDate={expirationDate}
            setExpirationDate={setExpirationDate}
          />
        </div>
        {/* 카드 소유자 이름 */}
        <div className="input-container">
          <span className="input-title">카드 소유자 이름(선택)</span>
          <input
            defaultValue=""
            type="text"
            className="input-basic"
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          />
        </div>
        {/* 보안 코드 */}
        <div className="input-container">
          <span className="input-title">보안코드(CVC/CVV)</span>
          <input className="input-basic w-25" type="text" />
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
