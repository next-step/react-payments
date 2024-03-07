import { ChangeEvent, useRef } from "react";

import Input from "common/components/input";
import { formattedCardExpireDate, formattedCardNumber } from "features/card/utils/inputFormat";
import { CardInfo } from "features/card/types/card.type";

interface InputCardFormProps extends CardInfo {
  onCardInfoChange: (key: keyof CardInfo, value: string) => void;
}

export default function InputCardForm({
  cardNumber,
  cardOwner,
  expireDate,
  cvc,
  firstPassword,
  secondPassword,
  onCardInfoChange,
}: InputCardFormProps) {
  const firstPasswordRef = useRef<HTMLInputElement>(null);
  const secondPasswordRef = useRef<HTMLInputElement>(null);

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
    onCardInfoChange("cvc", formattedCardNumber(e.target.value));
  };

  const handleFirstPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    onCardInfoChange("firstPassword", e.target.value);

    if (e.target.value) {
      secondPasswordRef.current?.focus();
    }
  };

  const handleSecondPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    onCardInfoChange("secondPassword", e.target.value);
  };

  return (
    <>
      <Input.Container>
        <Input.Label>카드 번호</Input.Label>
        <Input.Box>
          <Input.Basic type="text" value={cardNumber} maxLength={4} onChange={handleCardNumberChange} />
          <Input.Basic type="text" value={cardNumber} maxLength={4} />
          <Input.Basic type="password" value={cardNumber} maxLength={4} />
          <Input.Basic type="password" value={cardNumber} maxLength={4} />
        </Input.Box>
      </Input.Container>
      <Input.Container>
        <Input.Label>만료일</Input.Label>
        <Input.Box className="input-box w-50">
          <Input.Basic
            type="text"
            value={expireDate}
            maxLength={5}
            placeholder="MM / YY"
            onChange={handleCardExpireDateChange}
          />
        </Input.Box>
      </Input.Container>
      <Input.Container>
        <Input.Label>카드 소유자 이름(선택)</Input.Label>
        <Input.Basic
          type="text"
          value={cardOwner}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          maxLength={30}
          onChange={handleCardOwnerChange}
        />
      </Input.Container>
      <Input.Container>
        <Input.Label>보안코드 (CVC/CVV)</Input.Label>
        <Input.Basic
          type="password"
          value={cvc}
          className="input-basic w-25"
          maxLength={3}
          onChange={handleCardSecurityCodeChange}
        />
      </Input.Container>
      <Input.Container>
        <Input.Label>카드 비밀번호</Input.Label>
        <Input.Box className="gap8">
          <Input.Basic
            type="password"
            ref={firstPasswordRef}
            value={firstPassword}
            maxLength={1}
            className="input-basic w-15"
            onChange={handleFirstPasswordChange}
          />
          <Input.Basic
            type="password"
            ref={secondPasswordRef}
            value={secondPassword}
            maxLength={1}
            className="input-basic w-15"
            onChange={handleSecondPasswordChange}
          />
          <Input.Basic type="password" value="*" className="input-basic w-15" readOnly />
          <Input.Basic type="password" value="*" className="input-basic w-15" readOnly />
        </Input.Box>
      </Input.Container>
    </>
  );
}
