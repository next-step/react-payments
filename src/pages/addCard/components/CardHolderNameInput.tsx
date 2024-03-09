import { Dispatch, SetStateAction, useCallback } from "react";
import Input from "../../../components/input/Input";

const MAX_CARD_HOLDER_NAME_LENGTH = 30;

interface CardHolderNameInputProps {
  cardHolderName: string;
  setCardHolderName: Dispatch<SetStateAction<string>>;
}

export default function CardHolderNameInput({
  cardHolderName,
  setCardHolderName,
}: CardHolderNameInputProps) {
  const handleChange = useCallback(
    (value: string) => {
      setCardHolderName(value);
    },
    [setCardHolderName]
  );
  return (
    <Input
      label="카드 소유자 이름(선택)"
      placeholder="카드에 표시된 이름과 동일하게 입력하세요."
      // onChange={handleChange}
      value={cardHolderName}
      maxLength={MAX_CARD_HOLDER_NAME_LENGTH}
    >
      {`${cardHolderName.length}/${MAX_CARD_HOLDER_NAME_LENGTH}`}
    </Input>
  );
}
