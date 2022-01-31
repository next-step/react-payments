import { createContext, useReducer } from "react";
import pendingCardReducer from "./pendingCardReducer";
import type { Card, CardNumber, StoreContextValue, StoreProps } from "../../@types";
import { UnionActionTypeOfPendingCardAction } from "./pendingCardActions";

const PendingCardStoreContext = createContext<StoreContextValue<Card, UnionActionTypeOfPendingCardAction>>(
  {} as StoreContextValue<Card, UnionActionTypeOfPendingCardAction>
);

const initialCardNumber: CardNumber = ["", "", "", ""];
const initialState: Card = {
  cardName: "",
  cardType: "NONE",
  cardNumber: initialCardNumber,
  cardExpiration: { month: "", year: "" },
  cardUserName: "",
  cardSecurityCode: "",
  cardPassword: "",
};

const PendingCardStore = ({ children }: StoreProps) => {
  const [state, dispatch] = useReducer(pendingCardReducer, initialState);

  return <PendingCardStoreContext.Provider value={{ state, dispatch }}>{children}</PendingCardStoreContext.Provider>;
};

export default PendingCardStore;
export { PendingCardStoreContext };
