import { useState } from "react";
import CardNumberInput from "./CardNumberInput";
import ExpiredDateInput from "./ExpiredDateInput";

export default function AddCardForm() {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expiredDate, setExpiredDate] = useState<string>("");

  return (
    <form>
      <CardNumberInput cardNumber={cardNumber} setCardNumber={setCardNumber} />
      <ExpiredDateInput
        expiredDate={expiredDate}
        setExpiredDate={setExpiredDate}
      />
    </form>
  );
}
