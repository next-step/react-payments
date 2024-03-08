import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { FIRST_NUMBER, SECOND_NUMBER } from "../constants/cardNumber";
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
import { CardContext } from "../../providers/CardState/CardStateProvider";

export default function CardAdd({ onNext }) {
  const { cardState } = useContext(CardContext);
  console.log(cardState);
  // 카드 번호

  // 만료일

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
    <>
      <h2 className="page-title">
        <Link to="/" className="button-basic">
          {"<"}
        </Link>
        <span className="ml-10">카드 추가</span>
      </h2>

      {/* 카드 */}
      <Card
        alias={"카드 별칭"}
        cardNumber={cardState.cardNumber}
        expirationDateMM={cardState.expirationDate[MONTH]}
        expirationDateYY={cardState.expirationDate[YEAR]}
        cardOwnerName={cardOwnerName}
      />

      {/* 카드 번호 */}
      <InputContainer>
        <InputTitle>카드 번호</InputTitle>
        <CardNumberInput />
      </InputContainer>
      {/* 만료일 */}
      <InputContainer>
        <InputTitle>만료일</InputTitle>
        <ExpirationDateInput />
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
        <Button onClick={onNext}>다음</Button>
      </div>
    </>
  );
}
