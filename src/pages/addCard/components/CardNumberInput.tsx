import { Input, InputProps } from "../../../components/ui-kit/Input";

interface CardNumberInputProps {
  value: string;
  onChange: InputProps["onChange"];
}

export default function CardNumberInput({
  value,
  onChange,
}: CardNumberInputProps) {
  return (
    <Input.Wrapper>
      <Input
        variant="basic"
        value={value}
        onChange={onChange}
        label={<Input.Label label="카드번호" />}
      />
    </Input.Wrapper>
  );
}
