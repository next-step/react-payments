import { createContext, useState } from "react";
import { CardType } from "../types/common";

type ComponentProps = {
  children: JSX.Element | JSX.Element[] | string;
};

type ContextProps = {
  card: CardType;
  setCard: Function;
};

const initCard: CardType = {
  cardNumber: {
    0: "",
    1: "",
    2: "",
    3: "",
  },
  expiredDate: {
    month: "",
    year: "",
  },
  userName: "",
  code: 0,
  password: {
    1: "",
    2: "",
  },
  bankId: "",
  cardAlias: "",
};

export const CardContext = createContext<ContextProps | null>({
  card: initCard,
  setCard: () => {},
});

function CardProvider({ children }: ComponentProps) {
  const [card, setCard] = useState<CardType>(initCard);

  return (
    <CardContext.Provider value={{ card, setCard }}>
      {children}
    </CardContext.Provider>
  );
}

export default CardProvider;
