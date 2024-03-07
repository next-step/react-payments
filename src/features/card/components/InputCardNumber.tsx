import { ChangeEvent, useRef } from "react";

import Input from "common/components/input";

import { CardInfo, CardInputContextType } from "features/card/types/card.type";
import { MAX_CARD_NUMBER_FIELD_LENGTH } from "features/card/data/constants";

interface InputCardNumberProps
  extends Pick<CardInputContextType, "cardInfo" | "handleCardInfoChange"> {}

const CARD_NUMBER_FIELD: (keyof CardInfo)[] = [
  "cardNumber1",
  "cardNumber2",
  "cardNumber3",
  "cardNumber4",
];

export default function InputCardNumber({
  cardInfo,
  handleCardInfoChange,
}: InputCardNumberProps) {
  const inputRefs = useRef<(HTMLElement | null)[]>([]);

  const handleCardNumberChange =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const currentField = CARD_NUMBER_FIELD[index];

      handleCardInfoChange(currentField, e.target.value);

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
          <>
            <Input.Basic
              key={field}
              ref={(el) => (inputRefs.current[index] = el)}
              type={index < 2 ? "text" : "password"}
              value={cardInfo[field]}
              maxLength={MAX_CARD_NUMBER_FIELD_LENGTH}
              onChange={handleCardNumberChange(index)}
            />
            {index < CARD_NUMBER_FIELD.length - 1 ? <div>-</div> : null}
          </>
        ))}
      </Input.Box>
    </Input.Container>
  );
}
