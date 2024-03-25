import { ChangeEvent } from "react";

import { CardContext } from "../../../App";

import Input from "common/components/input";

import { formattedCardExpireDate } from "features/card/utils/inputFormat";
import { MAX_CARD_EXPIRED_DATE_LENGTH } from "features/card/data/constants";

export default function InputCardExpiredDate() {
  const cardState = CardContext.useSelector((state) => state.context.card);
  const cardActionRef = CardContext.useActorRef();

  const handleCardExpireDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    cardActionRef.send({
      type: "SET_CARD_INFO",
      field: "expireDate",
      value: formattedCardExpireDate(e.target.value),
    });
  };

  return (
    <Input.Container>
      <Input.Label>만료일</Input.Label>
      <Input.Box className="input-box w-50">
        <Input.Basic
          type="text"
          value={cardState.expireDate}
          maxLength={MAX_CARD_EXPIRED_DATE_LENGTH}
          placeholder="MM / YY"
          onChange={handleCardExpireDateChange}
        />
      </Input.Box>
    </Input.Container>
  );
}
