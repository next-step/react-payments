import { MaxLength } from "@common/constants";
import { IUseInputState } from "@hooks/useInput";

interface SecurityCodeInputProps {
  securityCodeInputState: IUseInputState;
}

const SecurityCodeInput = ({
  securityCodeInputState,
}: SecurityCodeInputProps) => {
  return (
    <div className="input-container">
      <span className="input-title">보안코드(CVC/CVV)</span>
      <input
        className="input-basic w-25"
        type="password"
        maxLength={MaxLength.CardSecurityCodeInput}
        value={securityCodeInputState.value}
        onChange={securityCodeInputState.onChange}
      />
    </div>
  );
};

export default SecurityCodeInput;
