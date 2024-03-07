import { ChangeEvent, useRef } from "react";

import Input from "common/components/input";

import { CardInfo } from "features/card/types/card.type";
import { MAX_CARD_PASSWORD_FIELD_LENGTH } from "features/card/data/constants";

interface InputCardPasswordProps {
  cardInfo: CardInfo;
  onChangeCardInfo: (field: keyof CardInfo, value: string) => void;
}

const CARD_PASSWORD_FIELD: (keyof CardInfo)[] = [
  "firstPassword",
  "secondPassword",
];

export default function InputCardPassword({
  cardInfo,
  onChangeCardInfo,
}: InputCardPasswordProps) {
  const inputRefs = useRef<(HTMLElement | null)[]>([]);

  const handleCardPasswordChange =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const currentField = CARD_PASSWORD_FIELD[index];

      onChangeCardInfo(currentField, e.target.value);

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
            value={cardInfo[field]}
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
