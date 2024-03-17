import { ChangeEvent } from "react";

import { CardContext } from "../../../App";

import Input from "common/components/input";

import { MAX_CARD_OWNER_LENGTH } from "features/card/data/constants";

export default function InputCardOwner() {
  const cardState = CardContext.useSelector((state) => state.context.card);
  const cardActionRef = CardContext.useActorRef();

  const handleCardOwnerChange = (e: ChangeEvent<HTMLInputElement>) => {
    cardActionRef.send({ type: "SET_CARD_OWNER", value: e.target.value });
  };

  return (
    <Input.Container>
      <div className="input-labe-limit-tracker-container">
        <Input.Label>카드 소유자 이름(선택)</Input.Label>
        <Input.LimitTracker
          current={cardState.cardOwner.length}
          limit={MAX_CARD_OWNER_LENGTH}
        />
      </div>
      <Input.Basic
        type="text"
        value={cardState.cardOwner}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        maxLength={MAX_CARD_OWNER_LENGTH}
        onChange={handleCardOwnerChange}
      />
    </Input.Container>
  );
}
