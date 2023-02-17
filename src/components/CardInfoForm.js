import CardNumberInput from "./CardNumberInput";
import CardPasswordInput from "./CardPasswordInput";
import CardExpirationInput from "./CardExpirationInput";
import CardOwnerNameInput from "./CardOwnerNameInput";
import CardSecurityCodeInput from "./CardSecurityCodeInput";
import Span from "./Span";

export default function CardInfoForm() {
  return (
    <>
      <CardNumberInput></CardNumberInput>
      <CardExpirationInput></CardExpirationInput>
      <CardOwnerNameInput></CardOwnerNameInput>
      <CardSecurityCodeInput></CardSecurityCodeInput>
      <CardPasswordInput />
      <div className="button-box">
        <Span className="button-text">다음</Span>
      </div>
    </>
  );
}
