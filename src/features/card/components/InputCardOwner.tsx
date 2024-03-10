import { ChangeEvent } from "react";

import Input from "common/components/input";

import { CardInfo } from "features/card/types/card.type";
import { MAX_CARD_OWNER_LENGTH } from "features/card/data/constants";

interface InputCardOwnerProps {
  cardInfo: CardInfo;
  onChangeCardInfo: (field: keyof CardInfo, value: string) => void;
}

export default function InputCardOwner({
  cardInfo,
  onChangeCardInfo,
}: InputCardOwnerProps) {
  const { cardOwner } = cardInfo;

  const handleCardOwnerChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeCardInfo("cardOwner", e.target.value);
  };

  return (
    <Input.Container>
      <div className="input-labe-limit-tracker-container">
        <Input.Label>카드 소유자 이름(선택)</Input.Label>
        <Input.LimitTracker
          current={cardOwner.length}
          limit={MAX_CARD_OWNER_LENGTH}
        />
      </div>
      <Input.Basic
        type="text"
        value={cardOwner}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        maxLength={MAX_CARD_OWNER_LENGTH}
        onChange={handleCardOwnerChange}
      />
    </Input.Container>
  );
}
