import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import PaymentsContext from "./context";

export type CardNumber = [string, string, string, string];
export type ExpirationDate = { month: string; year: string };

export const PaymentsProvider = ({ children }: PropsWithChildren) => {
  const [cardNumbers, setCardNumbers] = useState<CardNumber>(["", "", "", ""]);
  const [cardExpiration, setCardExpiration] = useState<ExpirationDate>({ month: "", year: "" });
  const [cardOwnerName, setCardOwnerName] = useState<string>("");
  const [password, setPassword] = useState<string[]>(["", ""]);
  const [cvc, setCvc] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleChangeCardNumber = useCallback((cardNumbers: CardNumber) => {
    setCardNumbers(cardNumbers);
  }, []);

  const handleChangeExpirationDate = useCallback((name: string, value: string) => {
    
    setCardExpiration((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, [])

  const handleCardOwner = useCallback((value: string) => {
    setCardOwnerName(value);
  }, []);

  const handleCvc = useCallback((value: string) => {
    setCvc(value);
  }, []);

  const handlePassword = useCallback((values: string[]) => {
    setPassword(values);
  }, []);

  useEffect(() => {
    const cardComp = cardNumbers.join("").length === 16;
    if (cardComp) {
      setIsModalOpen(true);
    }
  }, [cardNumbers, cardExpiration])

  const value = {
    cardNumbers,
    cardExpiration,
    cardOwnerName,
    cvc,
    password,
    isModalOpen,
    handleChangeCardNumber,
    handleChangeExpirationDate,
    handleCardOwner,
    handleCvc,
    handlePassword,
  };

  return (
    <PaymentsContext.Provider value={value}>
      {children}
    </PaymentsContext.Provider>
  );
};
