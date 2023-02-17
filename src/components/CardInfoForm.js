import CardNumberInput from "./CardNumberInput";
import CardPasswordInput from "./CardPasswordInput";
import CardExpirationInput from "./CardExpirationInput";
import CardOwnerNameInput from "./CardOwnerNameInput";
import CardSecurityCodeInput from "./CardSecurityCodeInput";

export default function CardInfoForm() {
  return (
    <>
      <CardNumberInput></CardNumberInput>
      <CardExpirationInput></CardExpirationInput>
      <CardOwnerNameInput></CardOwnerNameInput>
      <CardSecurityCodeInput></CardSecurityCodeInput>
      <CardPasswordInput />
    </>
  );
}
