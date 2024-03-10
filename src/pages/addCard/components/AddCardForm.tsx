import { FormEvent } from "react";
import useInput from "../../../hooks/useInput";
import useCardExpiredDateInput from "../hooks/useCardExpiredDateInput";
import useCardNumberInput from "../hooks/useCardNumberInput";
import CardExpiredDateInput from "./CardExpiredDateInput";
import CardHolderNameInput from "./CardHolderNameInput";
import CardNumberInput from "./CardNumberInput";
import CardPasswordInput from "./CardPasswordInput";
import CardSecurityCodeInput from "./CardSecurityCodeInput";
import { isNumber } from "../../../utils/validation";

export default function AddCardForm() {
  const {
    value: cardNumber,
    displayedValue: displayedCardNumber,
    handleChange: handleCardNumberChange,
  } = useCardNumberInput();

  const {
    value: cardExpiredDate,
    displayedValue: displayedExpiredDate,
    handleChange: handleCardExpiredDateChange,
  } = useCardExpiredDateInput();

  const { value: cardHolderName, handleChange: handleCardHolderNameChange } =
    useInput({});
  const {
    value: cardSecurityCode,
    handleChange: handleCardSecurityCodeChange,
  } = useInput({ validate: isNumber });

  const {
    value: firstCardPassword,
    handleChange: handleFirstCardPasswordChange,
  } = useInput({ validate: isNumber });

  const {
    value: secondCardPassword,
    handleChange: handleSecondCardPasswordChange,
  } = useInput({ validate: isNumber });

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
      <CardPasswordInput
        firstValue={firstCardPassword}
        secondValue={secondCardPassword}
        onFirstValueChange={handleFirstCardPasswordChange}
        onSecondValueChange={handleSecondCardPasswordChange}
      />
      <button type="submit">다음</button>
    </form>
  );
}
