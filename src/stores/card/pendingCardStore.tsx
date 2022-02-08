import { createContext, useReducer } from "react";
import pendingCardReducer from "./pendingCardReducer";
import type { CardNumber, PendingCard, StoreContextValue, StoreProps } from "../../@types";
import { UnionActionTypeOfPendingCardAction } from "./pendingCardActions";

const PendingCardStoreContext = createContext<StoreContextValue<PendingCard, UnionActionTypeOfPendingCardAction>>(
  {} as StoreContextValue<PendingCard, UnionActionTypeOfPendingCardAction>
);

const initialCardNumber: CardNumber = ["", "", "", ""];
const initialState: PendingCard = {
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
