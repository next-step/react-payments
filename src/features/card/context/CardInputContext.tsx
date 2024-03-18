import { createContext, useState } from "react";

import { CardInfo, CardInputContextType } from "features/card/types/card.type";

export const CardInfoContext = createContext<CardInputContextType | null>(null);

interface CardInfoProviderProps {
  children: React.ReactNode;
}

export default function CardInfoProvider({ children }: CardInfoProviderProps) {
  const [cardInfo, setCardInfo] = useState({
    cardName: "",
    cardNumber1: "",
    cardNumber2: "",
    cardNumber3: "",
    cardNumber4: "",
    expireDate: "",
    cardOwner: "",
    cvc: "",
    firstPassword: "",
    secondPassword: "",
  });

  const handleCardInfoChange = (key: keyof CardInfo, value: string) => {
    setCardInfo((prevCardInfo) => ({ ...prevCardInfo, [key]: value }));
  };

  return (
    <CardInfoContext.Provider
      value={{ cardInfo, setCardInfo, handleCardInfoChange }}
    >
      {children}
    </CardInfoContext.Provider>
  );
}
