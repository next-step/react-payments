import Input, { InputProps } from "../../../components/input/Input";
import InputTitle from "../../../components/input/InputTitle";

interface CardNumberInputProps {
  value: string;
  onChange: InputProps["onChange"];
}

export default function CardNumberInput({
  value,
  onChange,
}: CardNumberInputProps) {
  return (
    <Input label="카드 번호" value={value} onChange={onChange}>
      <InputTitle label="카드번호" />
    </Input>
  );
}
