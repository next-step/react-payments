import { createContext, useContext } from "react";
import { CardNumber, ExpirationDate } from "./Provider";

type PaymentsContext = {
  cardNumbers: CardNumber;
  cardExpiration: ExpirationDate;
  cardOwnerName: string;
  cvc: string;
  password: string[];
  isModalOpen: boolean;
  handleChangeCardNumber: (input: CardNumber) => void;
  handleChangeExpirationDate: (name: string, value: string) => void;
  handleCardOwner: (input: string) => void;
  handleCvc: (input: string) => void;
  handlePassword: (input: string[]) => void;
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
