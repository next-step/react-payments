import Input, { InputProps } from "../../../components/input/Input";
import InputTitle from "../../../components/input/InputTitle";

interface CardExpiredDateInputProps {
  value: string;
  onChange: InputProps["onChange"];
}

export default function CardExpiredDateInput({
  value,
  onChange,
}: CardExpiredDateInputProps) {
  return (
    <Input
      variant="basic"
      value={value}
      onChange={onChange}
      placeholder="MM/YY"
    >
      <InputTitle label="만료일" />
    </Input>
  );
}
