import { useRef, useState } from "react";
import CardNumberInput from "./CardNumberInput";
import ExpiredDateInput from "./ExpiredDateInput";
import SecurityCodeInput from "./SecurityCodeInput";

export default function AddCardForm() {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expiredDate, setExpiredDate] = useState<string>("");
  const securityCodeRef = useRef<HTMLInputElement>(null);

  return (
    <form>
      <CardNumberInput cardNumber={cardNumber} setCardNumber={setCardNumber} />
      <ExpiredDateInput
        expiredDate={expiredDate}
        setExpiredDate={setExpiredDate}
      />
      <SecurityCodeInput securityCodeRef={securityCodeRef} />
      <button
        type="button"
        onClick={() => {
          console.log("securityCodeRef", securityCodeRef.current?.value);
        }}
      >
        버튼
      </button>
    </form>
  );
}
