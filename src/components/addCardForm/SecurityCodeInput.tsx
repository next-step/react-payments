import { DigitRegex, InputType, MaxLength } from "@common/constants";
import useInput, { IUseInputState } from "@hooks/useInput";
import { useEffect } from "react";
import { OnChangeInputState } from "./AddCardForm";

interface SecurityCodeInputProps {
  onChangeInputState?: OnChangeInputState;
}

const SecurityCodeInput = (props: SecurityCodeInputProps) => {
  const securityCodeInputState = useInput({
    inputRegex: DigitRegex,
    validator: (val) => val.length === MaxLength.CardSecurityCodeInput,
    type: InputType.password,
  });

  useEffect(() => {
    props?.onChangeInputState?.call(null, {
      value: securityCodeInputState.value,
      displayValue: "*".repeat(securityCodeInputState.value.length),
      isValid: securityCodeInputState.isValid,
      name: SecurityCodeInput.name,
    });
  }, [securityCodeInputState.value]);

  return (
    <div className="input-container">
      <span className="input-title">보안코드(CVC/CVV)</span>
      <input
        className="input-basic w-25"
        type={securityCodeInputState.type}
        maxLength={MaxLength.CardSecurityCodeInput}
        value={securityCodeInputState.value}
        onChange={securityCodeInputState.onChange}
      />
    </div>
  );
};

export default SecurityCodeInput;
