import React, { ChangeEvent, useRef } from "react";

import { CardContext } from "../../../App";

import Input from "common/components/input";

import { CardInfo } from "features/card/types/card.type";
import { MAX_CARD_NUMBER_FIELD_LENGTH } from "features/card/data/constants";

const CARD_NUMBER_FIELD: (keyof CardInfo)[] = [
  "cardNumber1",
  "cardNumber2",
  "cardNumber3",
  "cardNumber4",
];

export default function InputCardNumber() {
  const cardState = CardContext.useSelector((state) => state.context.card);
  const cardActionRef = CardContext.useActorRef();

  const inputRefs = useRef<(HTMLElement | null)[]>([]);

  const handleCardNumberChange =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const currentField = CARD_NUMBER_FIELD[index];

      cardActionRef.send({
        type: "SET_CARD_INFO",
        field: currentField,
        value: e.target.value,
      });

      if (
        e.target.value.length === MAX_CARD_NUMBER_FIELD_LENGTH &&
        index < CARD_NUMBER_FIELD.length - 1
      ) {
        inputRefs.current[index + 1]?.focus();
      }
    };

  return (
    <Input.Container>
      <Input.Label>카드 번호</Input.Label>
      <Input.Box>
        {CARD_NUMBER_FIELD.map((field, index) => (
          <React.Fragment key={field}>
            <Input.Basic
              ref={(el) => (inputRefs.current[index] = el)}
              type={index < 2 ? "text" : "password"}
              value={cardState[field]}
              maxLength={MAX_CARD_NUMBER_FIELD_LENGTH}
              onChange={handleCardNumberChange(index)}
            />
            {index < CARD_NUMBER_FIELD.length - 1 ? <div>-</div> : null}
          </React.Fragment>
        ))}
      </Input.Box>
    </Input.Container>
  );
}
