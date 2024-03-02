import { RefObject } from "react";
import BasicInput from "../../../components/input/BasicInput";

const MAX_CARD_SECURITY_CODE_LENGTH = 3;

interface CardSecurityCodeInputProps {
  cardSecurityCodeRef: RefObject<HTMLInputElement>;
}

export default function CardSecurityCodeInput({
  cardSecurityCodeRef,
}: CardSecurityCodeInputProps) {
  return (
    <BasicInput
      label="보안 코드(CVC/CVV)"
      inputRef={cardSecurityCodeRef}
      type="password"
      maxLength={MAX_CARD_SECURITY_CODE_LENGTH}
    />
  );
}
