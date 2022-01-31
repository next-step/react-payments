import { InputFieldName, InputType, MaxLength } from "@common/constants";
import { UseFormRegister } from "@hooks/useForm";

interface SecurityCodeInputProps {
  register?: UseFormRegister;
}

const securityCodePattern = `\\d{${MaxLength.CardSecurityCodeInput}}`;
const invalidMessage = `input SecurityCode format, digit ${MaxLength.CardSecurityCodeInput}`;

const SecurityCodeInput = ({ register }: SecurityCodeInputProps) => {
  return (
    <div className="input-container">
      <span className="input-title">보안코드(CVC/CVV)</span>
      <input
        className="input-basic w-25"
        type={InputType.password}
        maxLength={MaxLength.CardSecurityCodeInput}
        {...register?.(InputFieldName.SecurityCode, {
          pattern: securityCodePattern,
          required: true,
          invalidMessage,
        })}
      />
    </div>
  );
};

export default SecurityCodeInput;
