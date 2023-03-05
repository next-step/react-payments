import React, { createContext, useState } from "react";

type CardContextType = {
  cardNumber: string;
  ownerName: string;
  expirationDate: string;
  setCardNumber: (cardNumber: string) => void;
  setOwnerName: (ownerName: string) => void;
  setExpirationDate: (expirationDate: string) => void;
};

export const CardContext = createContext<CardContextType>({
  cardNumber: "",
  ownerName: "",
  expirationDate: "",
  setCardNumber: () => {},
  setOwnerName: () => {},
  setExpirationDate: () => {},
});

export const CardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cardNumber, setCardNumber] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [expirationDate, setExpirationDate] = useState("");

  const contextValue: CardContextType = {
    cardNumber,
    ownerName,
    expirationDate,
    setCardNumber,
    setOwnerName,
    setExpirationDate,
  };

  return (
    <CardContext.Provider value={contextValue}>{children}</CardContext.Provider>
  );
};
