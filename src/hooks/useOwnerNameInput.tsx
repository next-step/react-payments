import { useContext } from "react";
import { CardContext } from "../contexts/PaymentsCardContext";

export const useOwnerNameInput = () => {
  const { ownerName, setOwnerName } = useContext(CardContext);

  const handleOwnerNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = event.target.value
      .replace(/[^a-zA-Z\s]/g, "")
      .replace(/[^\w\s]/gi, "")
      .toUpperCase();
    setOwnerName(newValue);
  };

  return { ownerName, handleOwnerNameChange };
};
