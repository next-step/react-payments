import { createContext, useState, useContext, ReactNode } from "react";
import { CardInfoType } from "../type/CardInfoType";

const RegisteredCardsContext = createContext<{
  cards: CardInfoType[];
  handleCard: (card: CardInfoType) => void;
}>({
  cards: [],
  handleCard: () => {},
});
export const RegisteredCardsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [registeredCards, setRegisteredCards] = useState<CardInfoType[]>([]);
  const handleRegisteredCards = (card: CardInfoType) => {
    setRegisteredCards([...registeredCards, card]);
  };
  return (
    <RegisteredCardsContext.Provider
      value={{ cards: registeredCards, handleCard: handleRegisteredCards }}>
      {children}
    </RegisteredCardsContext.Provider>
  );
};

export const useRegisteredCards = () => {
  const context = useContext(RegisteredCardsContext);
  if (!context) throw new Error("Cannot find RegisteredCardsProvider");
  return context;
};
