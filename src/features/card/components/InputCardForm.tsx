import { ChangeEvent } from "react";

import Input from "common/components/input";
import {
  formattedCardExpireDate,
  formattedCardNumber,
} from "common/utils/inputFormat";

import { CardInfo } from "pages/AddCard";

interface InputCardFormProps extends CardInfo {
  onCardInfoChange: (key: keyof CardInfo, value: string) => void;
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
      <Input.Text
        label="카드 번호"
        value={cardNumber}
        maxLength={19}
        onChange={handleCardNumberChange}
      />
      <Input.Text
        label="만료일"
        value={expireDate}
        placeholder="MM/YY"
        maxLength={5}
        onChange={handleCardExpireDateChange}
      />
      <Input.Text
        label="카드 소유자 이름(선택)"
        value={cardOwner}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        maxLength={30}
        onChange={handleCardOwnerChange}
      />
      <Input.Password
        label="보안코드 (CVC/CVV)"
        value={cvc}
        maxLength={3}
        onChange={handleCardSecurityCodeChange}
      />
      <Input.Password
        label="카드 비밀번호"
        value={password}
        onChange={handleCardPasswordChange}
      />
    </>
  );
}
