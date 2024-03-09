import { FormEvent, useMemo, useRef, useState } from "react";
import CardNumberInput from "./CardNumberInput";
import CardExpiredDateInput from "./CardExpiredDateInput";
import CardSecurityCodeInput from "./CardSecurityCodeInput";
import CardHolderNameInput from "./CardHolderNameInput";
import CardPasswordInput from "./CardPasswordInput";
import useCardNumberInput from "../hooks/useCardNumberInput";

const CARN_NUMBER_LENGTH = 16;

export default function AddCardForm() {
  const [cardNumber, setCardNumber] = useState<string>("");

  const [cardExpiredDate, setCardExpiredDate] = useState<string>("");
  const [cardHolderName, setCardHolderName] = useState<string>("");
  const [cardSecurityCode, setCardSecurityCode] = useState<string>("");
  const [cardPassword, setCardPassword] = useState<string>("");

  const { toMaskedCardNumber } = useCardNumberInput();

  const displayedCardNumber = useMemo(
    () => toMaskedCardNumber(cardNumber),
    [cardNumber, toMaskedCardNumber]
  );

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const lastInputKey = value.slice(value.length - 1);
    console.log(value.length);
    console.log(displayedCardNumber.length);
    if (cardNumber.length === CARN_NUMBER_LENGTH) return;
    if (value.length > displayedCardNumber.length) {
      if (isNaN(Number(lastInputKey))) return;
      setCardNumber((prev) => prev + lastInputKey);
      return;
    }
    setCardNumber((prev) => prev.slice(0, cardNumber.length - 1));
  };

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
        cardExpiredDate={cardExpiredDate}
        setCardExpiredDate={setCardExpiredDate}
      />
      <CardHolderNameInput
        cardHolderName={cardHolderName}
        setCardHolderName={setCardHolderName}
      />
      {/* <CardSecurityCodeInput cardSecurityCodeRef={cardSecurityCodeRef} />
      <CardPasswordInput
        firstLetterRef={firstLetterOfPasswordRef}
        secondLetterRef={secondLetterOfPasswordRef}
      /> */}
      <button type="submit">다음</button>
    </form>
  );
}
