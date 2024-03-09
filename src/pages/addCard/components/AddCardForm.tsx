import { FormEvent, useState } from "react";
import CardNumberInput from "./CardNumberInput";
import CardExpiredDateInput from "./CardExpiredDateInput";
import CardSecurityCodeInput from "./CardSecurityCodeInput";
import CardHolderNameInput from "./CardHolderNameInput";
import CardPasswordInput from "./CardPasswordInput";
import useCardNumberInput from "../hooks/useCardNumberInput";
import useCardExpiredDateInput from "../hooks/useCardExpiredDateInput";
import useCardHolderNameInput from "../hooks/useCardHolderNameInput";
import useInput from "../hooks/useInput";
import useDisplayedInput from "../hooks/useDisplayedInput";

export default function AddCardForm() {
  const {
    value: cardNumber,
    displayedValue: displayedCardNumber,
    handleChange: handleCardNumberChange,
  } = useCardNumberInput();

  const {
    cardExpiredDate,
    displayedExpiredDate,
    handleChange: handleCardExpiredDateChange,
  } = useCardExpiredDateInput();

  const { value: cardHolderName, handleChange: handleCardHolderNameChange } =
    useInput();
  const {
    value: cardSecurityCode,
    handleChange: handleCardSecurityCodeChange,
  } = useInput();

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
      <CardHolderNameInput
        value={cardHolderName}
        onChange={handleCardHolderNameChange}
      />
      <CardSecurityCodeInput
        value={cardSecurityCode}
        onChange={handleCardSecurityCodeChange}
      />
      {/* <CardPasswordInput
        firstLetterRef={firstLetterOfPasswordRef}
        secondLetterRef={secondLetterOfPasswordRef}
      /> */}
      <button type="submit">다음</button>
    </form>
  );
}
