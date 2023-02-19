import { ChangeEvent, createContext, useContext } from "react";

type PaymentsContext = {
  cardNumbers: string[];
  nextElement: {
    current: HTMLInputElement[];
  };
  handleCardNumberInput: (
    index: number
  ) => (e: ChangeEvent<HTMLInputElement>) => void;
  expirationDate: string[];
  handleExpirationDateInput: (
    index: number
  ) => (e: ChangeEvent<HTMLInputElement>) => void;
  cardOwnerName: string;
  handleCardOwnerInput: (e: ChangeEvent<HTMLInputElement>) => void;
  cvc: string;
  handleCvcInput: (e: ChangeEvent<HTMLInputElement>) => void;
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
