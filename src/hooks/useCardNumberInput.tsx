import { useContext } from "react";
import { CardContext } from "../contexts/PaymentsCardContext";

export const useCardNumberInput = () => {
  const { cardNumber, setCardNumber } = useContext(CardContext);

  const cardNumbers = [
    cardNumber.slice(0, 4),
    cardNumber.slice(4, 8),
    cardNumber.slice(8, 12),
    cardNumber.slice(12, 16),
  ];

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = event.target;
    const newCardNumbers = [...cardNumbers];
    newCardNumbers[index] = value.replace(/[^\d]/g, "");
    setCardNumber(newCardNumbers.join(""));
  };

  return {
    cardNumbers,
    handleChange,
  };
};
