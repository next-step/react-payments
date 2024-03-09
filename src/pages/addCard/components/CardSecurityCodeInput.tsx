import Input, { InputProps } from "../../../components/input/Input";
import InputTitle from "../../../components/input/InputTitle";

const MAX_CARD_SECURITY_CODE_LENGTH = 3;

interface CardSecurityCodeInputProps {
  value: string;
  onChange: InputProps["onChange"];
}

export default function CardSecurityCodeInput({
  value,
  onChange,
}: CardSecurityCodeInputProps) {
  return (
    <Input
      variant="basic"
      type="password"
      value={value}
      onChange={onChange}
      maxLength={MAX_CARD_SECURITY_CODE_LENGTH}
    >
      <InputTitle label="보안 코드(CVC/CVV)" />
    </Input>
  );
}
