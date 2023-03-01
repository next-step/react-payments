import { createContext, useContext } from "react";
import { CardCompany, CardNumber, Card, ExpirationDate, CardPassword } from "./type";

type PaymentsContext = {
  cardNumbers: CardNumber;
  cardExpiration: ExpirationDate;
  cardOwnerName: string;
  cvc: string;
  password: CardPassword;
  isModalOpen: boolean;
  cardCompany: CardCompany;
  cards: Card[],
  handleChangeCardNumber: (payload: CardNumber) => void;
  handleChangeExpirationDate: (name: string, value: string) => void;
  handleCardOwner: (payload: string) => void;
  handleCvc: (payload: string) => void;
  handlePassword: (payload: CardPassword) => void;
  handleCardCompany: (payload: CardCompany) => void;
  handleCardSubmit: (payload: Card) => void
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
const PaymentsContext = createContext<PaymentsContext | null>(null);

export default PaymentsContext;

export const usePayments = () => {
  const context = useContext(PaymentsContext);
  if (!context) {
    throw new Error("usePayments must ne used within a PaymentsProvider");
  }

  return context;
};
