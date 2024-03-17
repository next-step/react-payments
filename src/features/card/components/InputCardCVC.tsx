import { ChangeEvent } from "react";

import { CardContext } from "../../../App";

import Input from "common/components/input";

import { MAX_CARD_CVC_LENGTH } from "features/card/data/constants";

export default function InputCardCVC() {
  const cardState = CardContext.useSelector((state) => state.context.card);
  const cardActionRef = CardContext.useActorRef();

  const handleCardSecurityCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    cardActionRef.send({ type: "SET_CARD_CVC", value: e.target.value });
  };

  return (
    <Input.Container>
      <Input.Label>보안코드 (CVC/CVV)</Input.Label>
      <Input.Basic
        type="password"
        value={cardState.cvc}
        className="input-basic w-25"
        maxLength={MAX_CARD_CVC_LENGTH}
        onChange={handleCardSecurityCodeChange}
      />
    </Input.Container>
  );
}
