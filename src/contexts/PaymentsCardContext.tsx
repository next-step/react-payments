import React, { createContext, useState } from "react";

type CardContextType = {
  cardNumber: string;
  ownerName: string;
  expirationDate: string;
  securityCode: string;
  passwordFirstTwoDigits: string;
  setCardNumber: (cardNumber: string) => void;
  setOwnerName: (ownerName: string) => void;
  setExpirationDate: (expirationDate: string) => void;
  setSecurityCode: (securityCode: string) => void;
  setPasswordFirstTwoDigits: (passwordFirstTwoDigits: string) => void;
};

export const CardContext = createContext<CardContextType>({
  cardNumber: "",
  ownerName: "",
  expirationDate: "",
  securityCode: "",
  passwordFirstTwoDigits: "",
  setCardNumber: () => {},
  setOwnerName: () => {},
  setExpirationDate: () => {},
  setSecurityCode: () => {},
  setPasswordFirstTwoDigits: () => {},
});

export const CardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cardNumber, setCardNumber] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [passwordFirstTwoDigits, setPasswordFirstTwoDigits] = useState("");

  const contextValue: CardContextType = {
    cardNumber,
    ownerName,
    expirationDate,
    securityCode,
    passwordFirstTwoDigits,
    setCardNumber,
    setOwnerName,
    setExpirationDate,
    setSecurityCode,
    setPasswordFirstTwoDigits,
  };

  return (
    <CardContext.Provider value={contextValue}>{children}</CardContext.Provider>
  );
};
