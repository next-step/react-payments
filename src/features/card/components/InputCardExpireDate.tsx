import { ChangeEvent } from "react";

import Input from "common/components/input";

import { formattedCardExpireDate } from "features/card/utils/inputFormat";
import { CardInfo } from "features/card/types/card.type";
import { MAX_CARD_EXPIRED_DATE_LENGTH } from "features/card/data/constants";

interface InputCardExpiredDateProps {
  cardInfo: CardInfo;
  onChangeCardInfo: (field: keyof CardInfo, value: string) => void;
}

export default function InputCardExpiredDate({
  cardInfo,
  onChangeCardInfo,
}: InputCardExpiredDateProps) {
  const { expireDate } = cardInfo;

  const handleCardExpireDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeCardInfo("expireDate", formattedCardExpireDate(e.target.value));
  };

  return (
    <Input.Container>
      <Input.Label>만료일</Input.Label>
      <Input.Box className="input-box w-50">
        <Input.Basic
          type="text"
          value={expireDate}
          maxLength={MAX_CARD_EXPIRED_DATE_LENGTH}
          placeholder="MM / YY"
          onChange={handleCardExpireDateChange}
        />
      </Input.Box>
    </Input.Container>
  );
}
