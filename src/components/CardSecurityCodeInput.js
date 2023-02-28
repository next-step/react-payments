import { CARD_SECURITY_CODE } from "../constants/card";

export default function CardSecurityCodeInput({cardSecurityCode, onChange}) {
  return (
    <div className="input-container">
      <span className="input-title">보안코드(CVC/CVV)</span>
      <input
        className="input-basic w-25 card-cvc-code"
        type="password"
        onChange={onChange}
        value={cardSecurityCode}
        maxLength={CARD_SECURITY_CODE.MAX_LENGTH}
      ></input>
    </div>
  );
}
