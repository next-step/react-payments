import { ChangeEvent, Dispatch, SetStateAction, useCallback } from "react";
import BasicInput from "../../../components/input/BasicInput";

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
    <BasicInput
      label="카드 소유자 이름(선택)"
      placeHolder="카드에 표시된 이름과 동일하게 입력하세요."
      onChange={handleChange}
      value={cardHolderName}
    />
  );
}
