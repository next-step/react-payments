import { useRef, useState } from "react";
import CardNumberInput from "./CardNumberInput";
import CardExpiredDateInput from "./CardExpiredDateInput";
import CardSecurityCodeInput from "./CardSecurityCodeInput";
import CardHolderNameInput from "./CardHolderNameInput";

export default function AddCardForm() {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardExpiredDate, setCardExpiredDate] = useState<string>("");
  const [cardHolderName, setCardHolderName] = useState<string>("");
  const cardSecurityCodeRef = useRef<HTMLInputElement>(null);

  return (
    <form>
      <CardNumberInput cardNumber={cardNumber} setCardNumber={setCardNumber} />
      <CardExpiredDateInput
        cardExpiredDate={cardExpiredDate}
        setCardExpiredDate={setCardExpiredDate}
      />
      <CardHolderNameInput
        cardHolderName={cardHolderName}
        setCardHolderName={setCardHolderName}
      />
      <CardSecurityCodeInput cardSecurityCodeRef={cardSecurityCodeRef} />
      <button
        type="button"
        onClick={() => {
          console.log("securityCodeRef", cardSecurityCodeRef.current?.value);
        }}
      >
        버튼
      </button>
    </form>
  );
}
