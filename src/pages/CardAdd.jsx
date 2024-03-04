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
import CardOwnerNameInput from "../components/card-add/CardOwnerInput";
import { CARD_OWNER_NAME_MAX_LENGTH } from "../constants/cardOwnerName";
import SecurityCodeInput from "../components/card-add/SecurityCodeInput";
import PasswordInput from "../components/card-add/PasswordInput";

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

  // 카드 소유자 이름(선택)
  const [cardOwnerName, setCardOwnerName] = useState("");

  // 보안코드
  const [securityCode, setSecurityCode] = useState("");

  // 카드 비밀번호
  const [password, setPassword] = useState({
    [FIRST_NUMBER]: "",
    [SECOND_NUMBER]: "",
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
        <Card
          alias={"카드 별칭"}
          cardNumber={cardNumber}
          expirationDateMM={expirationDate[MONTH]}
          expirationDateYY={expirationDate[YEAR]}
          cardOwnerName={cardOwnerName}
        />

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
          <div className="input-group">
            <span className="input-title">카드 소유자 이름(선택)</span>
            <span className="input-title">
              {cardOwnerName.length} / {CARD_OWNER_NAME_MAX_LENGTH}
            </span>
          </div>

          <CardOwnerNameInput
            cardOwnerName={cardOwnerName}
            setCardOwnerName={setCardOwnerName}
          />
        </div>
        {/* 보안 코드 */}
        <div className="input-container">
          <span className="input-title">보안코드(CVC/CVV)</span>
          <SecurityCodeInput
            securityCode={securityCode}
            setSecurityCode={setSecurityCode}
          />
        </div>
        {/* 카드 비밀번호 */}
        <div className="input-container">
          <span className="input-title">카드 비밀번호</span>
          <PasswordInput password={password} setPassword={setPassword} />
        </div>
        <div className="button-box">
          <Link to="/complete" className="button-basic">
            다음
          </Link>
        </div>
      </div>
    </div>
  );
}
