import { createContext, useState, ReactNode } from "react";
import { CardInfoType } from "../type/CardInfoType";
import { useContext } from "react";

export const RegisteredCardsContext = createContext<{
  cards: CardInfoType[];
  handleCard: (card: CardInfoType) => void;
  handleDeleteCard: (card: CardInfoType[]) => void;
}>({
  cards: [],
  handleCard: () => {},
  handleDeleteCard: () => {},
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

  const handleDeleteRegisteredCards = (cards: CardInfoType[]) => {
    setRegisteredCards([...cards]);
  };

  return (
    <RegisteredCardsContext.Provider
      value={{
        cards: registeredCards,
        handleCard: handleRegisteredCards,
        handleDeleteCard: handleDeleteRegisteredCards,
      }}>
      {children}
    </RegisteredCardsContext.Provider>
  );
};

export const useRegisteredCards = () => {
  const context = useContext(RegisteredCardsContext);
  if (context === undefined) {
    throw new Error(
      "useRegisteredCards must be used within a RegisteredCardsProvider"
    );
  }
  return context;
};
