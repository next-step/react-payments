import { ChangeEvent } from "react";

interface InputCardNameProps {
  cardName: string;
  onChangeCardName: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputCardName({
  cardName,
  onChangeCardName,
}: InputCardNameProps) {
  return (
    <div className="input-container flex-center w-100">
      <input
        className="input-underline w-75"
        type="text"
        value={cardName}
        placeholder="카드의 별칭을 입력해주세요."
        maxLength={10}
        onChange={onChangeCardName}
      />
    </div>
  );
}
