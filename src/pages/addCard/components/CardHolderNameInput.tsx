import { Input, InputProps } from "../../../components/input/Input";

const MAX_CARD_HOLDER_NAME_LENGTH = 30;

interface CardHolderNameInputProps {
  value: string;
  onChange: InputProps["onChange"];
}

export default function CardHolderNameInput({
  value,
  onChange,
}: CardHolderNameInputProps) {
  return (
    <Input.Wrapper>
      <Input
        variant="basic"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        onChange={onChange}
        value={value}
        maxLength={MAX_CARD_HOLDER_NAME_LENGTH}
        label={
          <Input.Label label="카드 소유자 이름(선택)">
            {`${value.length}/${MAX_CARD_HOLDER_NAME_LENGTH}`}
          </Input.Label>
        }
      />
    </Input.Wrapper>
  );
}
