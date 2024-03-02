import { RefObject } from "react";
import Label from "../../../components/input/Label";
import Input from "../../../components/input/Input";

const MAX_CARD_PASSWORD_LETTER_LENGTH = 1;
const MASKED_CARD_PASSWORD_LETTER = "*";

interface CardPasswordInputProps {
  firstLetterRef: RefObject<HTMLInputElement>;
  secondLetterRef: RefObject<HTMLInputElement>;
}

export default function CardPasswordInput({
  firstLetterRef,
  secondLetterRef,
}: CardPasswordInputProps) {
  return (
    <div className="input-container">
      <Label label="카드 비밀번호" />
      <div className="input-box">
        {[firstLetterRef, secondLetterRef].map((ref, index) => (
          <Input
            key={`${Date()}-${index}`}
            style="basic"
            inputRef={ref}
            maxLength={MAX_CARD_PASSWORD_LETTER_LENGTH}
            type="password"
          />
        ))}
        {Array(2)
          .fill(MASKED_CARD_PASSWORD_LETTER)
          .map((letter, index) => (
            <Input
              key={`${Date()}-${index}`}
              style="empty"
              value={letter}
              maxLength={MAX_CARD_PASSWORD_LETTER_LENGTH}
              type="password"
              readOnly
            />
          ))}
      </div>
    </div>
  );
}
