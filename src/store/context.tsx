import { ChangeEvent, createContext } from "react";

type PaymentsContext = {
  cardNumbers: string[];
  setCardNumberByIndex: (index: number) => (e: ChangeEvent<HTMLInputElement>) => void;
};

const PaymentsContext = createContext<PaymentsContext | null>(null);

export default PaymentsContext;
