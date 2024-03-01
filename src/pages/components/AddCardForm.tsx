import { useState } from "react";
import CardNumberInput from "./CardNumberInput";

export default function AddCardForm() {
  const [cardNumber, setCardNumber] = useState<string>("");

  return (
    <form>
      <CardNumberInput cardNumber={cardNumber} setCardNumber={setCardNumber} />
    </form>
  );
}
