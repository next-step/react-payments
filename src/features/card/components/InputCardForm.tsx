import { ChangeEvent } from "react";

import Input from "common/components/input";
import {
  formattedCardExpireDate,
  formattedCardNumber,
} from "common/utils/inputFormat";
import { CardInfo } from "common/types/card.type";

interface InputCardFormProps {
  onCardInfoChange: (key: keyof CardInfo, value: string) => void;
  cardNumber: string;
  cardOwner: string;
  expireDate: string;
  cvc: string;
  password: string;
}

export default function InputCardForm({
  cardNumber,
  cardOwner,
  expireDate,
  cvc,
  password,
  onCardInfoChange,
}: InputCardFormProps) {
  const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    onCardInfoChange("cardNumber", formattedCardNumber(e.target.value));
  };

  const handleCardExpireDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    onCardInfoChange("expireDate", formattedCardExpireDate(e.target.value));
  };

  const handleCardOwnerChange = (e: ChangeEvent<HTMLInputElement>) => {
    onCardInfoChange("cardOwner", e.target.value);
  };

  const handleCardSecurityCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    onCardInfoChange("cvc", e.target.value);
  };

  const handleCardPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    onCardInfoChange("password", e.target.value);
  };

  return (
    <>
      <Input.Container>
        <Input.Label>카드 번호</Input.Label>
        <Input.Box>
          <Input.Text
            value={cardNumber}
            maxLength={19}
            onChange={handleCardNumberChange}
          />
        </Input.Box>
      </Input.Container>
      <Input.Container>
        <Input.Label>만료일</Input.Label>
        <Input.Box className="input-box w-50">
          <Input.Text
            value={expireDate}
            maxLength={2}
            onChange={handleCardExpireDateChange}
          />
          <span>/</span>
          <Input.Text
            value={expireDate}
            maxLength={2}
            onChange={handleCardExpireDateChange}
          />
        </Input.Box>
      </Input.Container>
      <Input.Container>
        <Input.Label>카드 소유자 이름(선택)</Input.Label>
        <Input.Text
          value={cardOwner}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          maxLength={30}
          onChange={handleCardOwnerChange}
        />
      </Input.Container>
      <Input.Container>
        <Input.Label>보안코드 (CVC/CVV)</Input.Label>
        <Input.Password
          value={cvc}
          className="input-basic w-25"
          maxLength={3}
          onChange={handleCardSecurityCodeChange}
        />
      </Input.Container>
      <Input.Container>
        <Input.Label>카드 비밀번호</Input.Label>
        <Input.Box className="gap8">
          <Input.Password
            value={password}
            maxLength={1}
            className="input-basic w-15"
            onChange={handleCardPasswordChange}
          />
          <Input.Password
            value={password}
            maxLength={1}
            className="input-basic w-15"
            onChange={handleCardPasswordChange}
          />
          <Input.Password value="*" className="input-basic w-15" readOnly />
          <Input.Password value="*" className="input-basic w-15" readOnly />
        </Input.Box>
      </Input.Container>
    </>
  );
}
