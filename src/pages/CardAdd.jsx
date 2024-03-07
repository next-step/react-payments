import { useState } from "react";
import { Link } from "react-router-dom";
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
import Button from "../components/atomic-design-pattern/atom/Button";
import InputContainer from "../components/atomic-design-pattern/organism/InputContainer";
import InputTitle from "../components/atomic-design-pattern/atom/InputTitle";
import InputGroup from "../components/atomic-design-pattern/molecule/InputGroup";

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
        <InputContainer>
          <InputTitle>카드 번호</InputTitle>
          <CardNumberInput
            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
          />
        </InputContainer>
        {/* 만료일 */}
        <InputContainer>
          <InputTitle>만료일</InputTitle>
          <ExpirationDateInput
            expirationDate={expirationDate}
            setExpirationDate={setExpirationDate}
          />
        </InputContainer>
        {/* 카드 소유자 이름 */}
        <InputContainer>
          <InputGroup>
            <InputTitle>카드 소유자 이름(선택)</InputTitle>
            <InputTitle>
              {cardOwnerName.length} / {CARD_OWNER_NAME_MAX_LENGTH}
            </InputTitle>
          </InputGroup>

          <CardOwnerNameInput
            cardOwnerName={cardOwnerName}
            setCardOwnerName={setCardOwnerName}
          />
        </InputContainer>
        {/* 보안 코드 */}
        <InputContainer>
          <InputTitle>보안코드(CVC/CVV)</InputTitle>
          <SecurityCodeInput
            securityCode={securityCode}
            setSecurityCode={setSecurityCode}
          />
        </InputContainer>
        {/* 카드 비밀번호 */}
        <InputContainer>
          <InputTitle>카드 비밀번호</InputTitle>
          <PasswordInput password={password} setPassword={setPassword} />
        </InputContainer>
        <div className="button-box">
          <Button>다음</Button>
        </div>
      </div>
    </div>
  );
}
