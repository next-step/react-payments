import { ChangeEvent, useRef } from "react";

import { CardContext } from "../../../App";

import Input from "common/components/input";

import { CardInfo } from "features/card/types/card.type";
import { MAX_CARD_PASSWORD_FIELD_LENGTH } from "features/card/data/constants";

const CARD_PASSWORD_FIELD: (keyof CardInfo)[] = [
  "firstPassword",
  "secondPassword",
];

export default function InputCardPassword() {
  const inputRefs = useRef<(HTMLElement | null)[]>([]);

  const cardState = CardContext.useSelector((state) => state.context.card);
  const cardActionRef = CardContext.useActorRef();

  const handleCardPasswordChange =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const currentField = CARD_PASSWORD_FIELD[index];

      cardActionRef.send({
        type: "SET_CARD_PASSWORD",
        field: currentField,
        value: e.target.value,
      });

      if (
        e.target.value.length === MAX_CARD_PASSWORD_FIELD_LENGTH &&
        index < CARD_PASSWORD_FIELD.length - 1
      ) {
        inputRefs.current[index + 1]?.focus();
      }
    };

  return (
    <Input.Container>
      <Input.Label>카드 비밀번호</Input.Label>
      <Input.Box className="gap8">
        {CARD_PASSWORD_FIELD.map((field, index) => (
          <Input.Basic
            key={field}
            ref={(el) => (inputRefs.current[index] = el)}
            type="password"
            value={cardState[field]}
            maxLength={MAX_CARD_PASSWORD_FIELD_LENGTH}
            className="input-basic w-15"
            onChange={handleCardPasswordChange(index)}
          />
        ))}
        <Input.Basic
          type="password"
          value="*"
          className="input-basic w-15"
          readOnly
        />
        <Input.Basic
          type="password"
          value="*"
          className="input-basic w-15"
          readOnly
        />
      </Input.Box>
    </Input.Container>
  );
}
