import { CARD_SECURITY_CODE } from "../constants/card";
import Span from "./Span";
import useSecurityCode from "../hooks/useSecurityCode";

export default function CardSecurityCodeInput() {
  const [securityCode, handleSecurityCode] = useSecurityCode();

  return (
    <div className="input-container">
      <Span className="input-title">보안코드(CVC/CVV)</Span>
      <input
        className="input-basic w-25 card-cvc-code"
        type="password"
        onChange={handleSecurityCode}
        value={securityCode}
        maxLength={CARD_SECURITY_CODE.MAX_LENGTH}
      ></input>
    </div>
  );
}
