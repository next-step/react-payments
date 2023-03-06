import { useContext } from "react";
import { CardContext } from "../contexts/PaymentsCardContext";

export const useOwnerNameInput = () => {
  const { ownerName, setOwnerName } = useContext(CardContext);

  const handleOwnerNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const onlyAlphabetsAndSpaces = /[^a-zA-Z\s]/g;
    const newValue = event.target.value
      .replace(onlyAlphabetsAndSpaces, "")
      .toUpperCase();
    setOwnerName(newValue);
  };

  return { ownerName, handleOwnerNameChange };
};
