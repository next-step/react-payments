import { FormEvent, useRef, useState } from "react";
import CardNumberInput from "./CardNumberInput";
import CardExpiredDateInput from "./CardExpiredDateInput";
import CardSecurityCodeInput from "./CardSecurityCodeInput";
import CardHolderNameInput from "./CardHolderNameInput";
import CardPasswordInput from "./CardPasswordInput";

export default function AddCardForm() {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardExpiredDate, setCardExpiredDate] = useState<string>("");
  const [cardHolderName, setCardHolderName] = useState<string>("");
  const cardSecurityCodeRef = useRef<HTMLInputElement>(null);
  const firstLetterOfPasswordRef = useRef<HTMLInputElement>(null);
  const secondLetterOfPasswordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("cardNumber", cardNumber);
    console.log("cardExpiredDate", cardExpiredDate);
    console.log("cardHolderName", cardHolderName);
    console.log("securityCodeRef", cardSecurityCodeRef.current?.value);
    console.log(
      "firstLetterOfPasswordRef",
      firstLetterOfPasswordRef.current?.value
    );
    console.log(
      "secondLetterOfPasswordRef",
      secondLetterOfPasswordRef.current?.value
    );
  };
  return (
    <form onSubmit={handleSubmit}>
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
      <CardPasswordInput
        firstLetterRef={firstLetterOfPasswordRef}
        secondLetterRef={secondLetterOfPasswordRef}
      />
      <button type="submit">다음</button>
    </form>
  );
}
