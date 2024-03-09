import { Input, InputProps } from "../../../components/input/Input";

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
      width="40%"
      label={<Input.Label label="만료일" />}
    />
  );
}
