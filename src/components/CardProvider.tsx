import { createContext, useState } from "react";
import { Card } from "../types/common";

type ComponentProps = {
  children: JSX.Element | JSX.Element[] | string;
};

type ContextProps = {
  card: Card;
  setCard: Function;
};

const initCard: Card = {
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
};

export const CardContext = createContext<ContextProps | null>({
  card: initCard,
  setCard: () => {},
});

function CardProvider({ children }: ComponentProps) {
  const [card, setCard] = useState(initCard);
  // const { toggleModal, isModalOpen, bankId, setBankId } = useModalState();

  return (
    <CardContext.Provider value={{ card, setCard }}>
      {children}
    </CardContext.Provider>
  );
}

export default CardProvider;
