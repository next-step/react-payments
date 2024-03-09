import { FormEvent, useState } from "react";
import CardNumberInput from "./CardNumberInput";
import CardExpiredDateInput from "./CardExpiredDateInput";
import CardSecurityCodeInput from "./CardSecurityCodeInput";
import CardHolderNameInput from "./CardHolderNameInput";
import CardPasswordInput from "./CardPasswordInput";
import useCardNumberInput from "../hooks/useCardNumberInput";
import useCardExpiredDateInput from "../hooks/useCardExpiredDateInput";

export default function AddCardForm() {
  const {
    cardNumber,
    displayedCardNumber,
    handleChange: handleCardNumberChange,
  } = useCardNumberInput();

  const {
    cardExpiredDate,
    displayedExpiredDate,
    handleChange: handleCardExpiredDateChange,
  } = useCardExpiredDateInput();

  const [cardHolderName, setCardHolderName] = useState<string>("");
  const [cardSecurityCode, setCardSecurityCode] = useState<string>("");
  const [cardPassword, setCardPassword] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardNumberInput
        value={displayedCardNumber}
        onChange={handleCardNumberChange}
      />
      <CardExpiredDateInput
        value={displayedExpiredDate}
        onChange={handleCardExpiredDateChange}
      />
      {/* <CardHolderNameInput
        cardHolderName={cardHolderName}
        setCardHolderName={setCardHolderName}
      /> */}
      {/* <CardSecurityCodeInput cardSecurityCodeRef={cardSecurityCodeRef} />
      <CardPasswordInput
        firstLetterRef={firstLetterOfPasswordRef}
        secondLetterRef={secondLetterOfPasswordRef}
      /> */}
      <button type="submit">다음</button>
    </form>
  );
}
