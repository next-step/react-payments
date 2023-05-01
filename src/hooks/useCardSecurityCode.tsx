import { useContext } from "react";
import { CardContext } from "../contexts/PaymentsCardContext";

export const useCardSecurityCode = () => {
  const { securityCode, setSecurityCode } = useContext(CardContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.replace(/[^\d]/g, "").slice(0, 3);
    setSecurityCode(newValue);
  };

  return { securityCode, handleChange };
};
