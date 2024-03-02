import { RefObject } from "react";
import BasicInput from "../../../components/input/BasicInput";

interface SecurityCodeInputProps {
  securityCodeRef: RefObject<HTMLInputElement>;
}

export default function SecurityCodeInput({
  securityCodeRef,
}: SecurityCodeInputProps) {
  return (
    <BasicInput
      label="보안 코드(CVC/CVV)"
      inputRef={securityCodeRef}
      type="password"
      maxLength={3}
    />
  );
}
