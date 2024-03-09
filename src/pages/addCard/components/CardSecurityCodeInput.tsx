import { Input, InputProps } from "../../../components/input/Input";
import { SlQuestion } from "react-icons/sl";

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
    <Input.Wrapper>
      <Input
        variant="basic"
        type="password"
        value={value}
        onChange={onChange}
        maxLength={MAX_CARD_SECURITY_CODE_LENGTH}
        label={<Input.Label label="보안 코드(CVC/CVV)" />}
      >
        <SlQuestion size={28} style={{ paddingLeft: 8 }} />
      </Input>
    </Input.Wrapper>
  );
}
