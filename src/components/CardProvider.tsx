import { createContext, useMemo, useState } from "react";
import { initCard } from "../constants/bank";
import { CardType } from "../types/common";
import { formatCardNumber, getBankColor, getBankName } from "../utils/format";

type ComponentProps = {
  children: JSX.Element | JSX.Element[] | string;
};

type ContextProps = {
  card: CardType;
  setCard: Function;
  formattedCardNumber: string;
  bankName: string;
  color: string;
};

export const CardContext = createContext<ContextProps | null>(null);

function CardProvider({ children }: ComponentProps) {
  const [card, setCard] = useState<CardType>(initCard);

  const formattedCardNumber = useMemo(() => {
    return formatCardNumber(card.cardNumber);
  }, [card.cardNumber]);
  const color = useMemo(() => {
    return getBankColor(card.bankId);
  }, [card.bankId]);
  const bankName = useMemo(() => {
    return getBankName(card.bankId);
  }, [card.bankId]);

  return (
    <CardContext.Provider
      value={{ card, setCard, formattedCardNumber, color, bankName }}
    >
      {children}
    </CardContext.Provider>
  );
}

export default CardProvider;
