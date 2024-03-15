import { useContext } from "react";

import Card from "../components/Card";
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
import { CardStorage } from "../util/cardStorage";

export default function CardAdd({ onList, onNext }) {
  const { cardState } = useContext(CardContext);
  const {
    cardNumber,
    expirationDate,
    securityCode,
    cardOwnerName,
    password,
    alias,
  } = cardState;

  // 카드 번호 16자리
  const isCardNumberValidate =
    Object.values(cardNumber).reduce((total, nowValue) => {
      return total + nowValue.length;
    }, 0) === 16;

  // 만료일 2자리 + 2자리
  const isExpirationDateValidate =
    Object.values(expirationDate).reduce((total, nowValue) => {
      return total + nowValue.length;
    }, 0) === 4;

  // 보안코드 3자리
  const isSecurityCodeValidate = securityCode.length === 3;
  // 카드 비밀번호 2자리
  const isPasswordValidate =
    Object.values(password).reduce((total, nowValue) => {
      return total + nowValue.length;
    }, 0) === 2;

  // 다음 버튼 보여줄지
  const isShowNextButton =
    isCardNumberValidate &&
    isExpirationDateValidate &&
    isSecurityCodeValidate &&
    isPasswordValidate;


  const onClickNextBtn = (event) => {
    event.preventDefault();
    CardStorage.addCard(cardState);
    onNext();
  };


  return (
    <form>
      <h2 className="page-title">
        <Button variant="link" onClick={onList}>
          {"<"}
        </Button>
        <span className="ml-10">카드 추가</span>
      </h2>
      {/* 카드 */}
      <Card
        alias={alias}
        cardNumber={cardNumber}
        expirationDateMM={expirationDate[MONTH]}
        expirationDateYY={expirationDate[YEAR]}
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
        <CardOwnerNameInput />
      </InputContainer>
      {/* 보안 코드 */}
      <InputContainer>
        <InputTitle>보안코드(CVC/CVV)</InputTitle>
        <SecurityCodeInput />
      </InputContainer>
      {/* 카드 비밀번호 */}
      <InputContainer>
        <InputTitle>카드 비밀번호</InputTitle>
        <PasswordInput />
      </InputContainer>
      {isShowNextButton && (
        <div className="button-box">
          <Button variant="link" onClick={onClickNextBtn}>
            다음
          </Button>
        </div>
      )}
    </form>
  );
}
