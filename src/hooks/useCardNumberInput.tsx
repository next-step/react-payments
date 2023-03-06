import { useContext, useState } from "react";
import { CardContext } from "../contexts/PaymentsCardContext";

export const useCardNumberInput = (initialCardNumber: string) => {
  const { setCardNumber } = useContext(CardContext);

  const [cardNumber, setCardNumberState] = useState<string>(initialCardNumber);

  const [inputValues, setInputValues] = useState<string[]>([
    cardNumber.slice(0, 4),
    cardNumber.slice(4, 8),
    cardNumber.slice(8, 12),
    cardNumber.slice(12, 16),
  ]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = event.target;
    const newValue = value.replace(/[^\d]/g, "");
    const newInputValues = [...inputValues];
    newInputValues[index] = newValue;

    setInputValues(newInputValues);
    const newCardNumber = newInputValues.join("");
    setCardNumberState(newCardNumber);
    setCardNumber(newCardNumber);
  };

  return {
    inputValues,
    handleChange,
  };
};
