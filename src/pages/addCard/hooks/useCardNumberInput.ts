import { useCallback, useMemo, useState } from "react";
import { insertAtInterval, replaceTo } from "../../../utils/stringUtils";

const CARN_NUMBER_LENGTH = 16;
const CARD_NUMBER_HYPHEN_INTERVAL = 4;
const CARD_NUMBER_NOT_MASKED_LENGTH = 8;

export default function useCardNumberInput() {
  const [cardNumber, setCardNumber] = useState("");
  const toMaskedCardNumber = useCallback((value: string) => {
    const masked = replaceTo(
      value,
      "*",
      CARD_NUMBER_NOT_MASKED_LENGTH,
      value.length
    );
    return insertAtInterval(masked, "-", CARD_NUMBER_HYPHEN_INTERVAL);
  }, []);

  const displayedCardNumber = useMemo(
    () => toMaskedCardNumber(cardNumber),
    [cardNumber, toMaskedCardNumber]
  );

  const deleteCardNumber = useCallback(
    () => setCardNumber((prev) => prev.slice(0, cardNumber.length - 1)),
    [cardNumber]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const lastInputKey = value.slice(value.length - 1);

    const isBackspace = value.length < displayedCardNumber.length;
    if (isBackspace) {
      deleteCardNumber();
      return;
    }

    if (isNaN(Number(lastInputKey))) return;
    if (cardNumber.length === CARN_NUMBER_LENGTH) return;
    setCardNumber((prev) => prev + lastInputKey);
  };

  return { cardNumber, displayedCardNumber, handleChange };
}
