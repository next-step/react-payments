import { useContext, useState } from "react";
import { CardContext } from "../contexts/PaymentsCardContext";

export const usePasswordFirstTwoDigits = () => {
  const { passwordFirstTwoDigits, setPasswordFirstTwoDigits } =
    useContext(CardContext);
  const [firstDigit, setFirstDigit] = useState(
    passwordFirstTwoDigits ? passwordFirstTwoDigits[0] : ""
  );
  const [secondDigit, setSecondDigit] = useState(
    passwordFirstTwoDigits ? passwordFirstTwoDigits[1] : ""
  );

  const handleFirstDigitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setFirstDigit(newValue);
    setPasswordFirstTwoDigits(
      newValue +
        (passwordFirstTwoDigits.length > 1 ? passwordFirstTwoDigits[1] : "")
    );
  };

  const handleSecondDigitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSecondDigit(newValue);
    setPasswordFirstTwoDigits(
      (passwordFirstTwoDigits.length > 0 ? passwordFirstTwoDigits[0] : "") +
        newValue
    );
  };

  return {
    firstDigit,
    secondDigit,
    handleFirstDigitChange,
    handleSecondDigitChange,
  };
};
