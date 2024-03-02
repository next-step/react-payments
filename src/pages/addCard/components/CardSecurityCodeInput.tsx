import { RefObject } from "react";
import BasicInput from "../../../components/input/BasicInput";

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
      maxLength={3}
    />
  );
}
