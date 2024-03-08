import { ChangeEvent } from "react";

import Input from "common/components/input";

import { CardInfo } from "features/card/types/card.type";
import { MAX_CARD_CVC_LENGTH } from "features/card/data/constants";

interface InputCardCVCProps {
  cardInfo: CardInfo;
  onChangeCardInfo: (field: keyof CardInfo, value: string) => void;
}

export default function InputCardCVC({
  cardInfo,
  onChangeCardInfo,
}: InputCardCVCProps) {
  const { cvc } = cardInfo;

  const handleCardSecurityCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeCardInfo("cvc", e.target.value);
  };

  return (
    <Input.Container>
      <Input.Label>보안코드 (CVC/CVV)</Input.Label>
      <Input.Basic
        type="password"
        value={cvc}
        className="input-basic w-25"
        maxLength={MAX_CARD_CVC_LENGTH}
        onChange={handleCardSecurityCodeChange}
      />
    </Input.Container>
  );
}
