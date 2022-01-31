import { createContext, useReducer } from "react";
import CardReducer from "./CardReducer";
import type { Card, CardNumber, StoreContextValue, StoreProps } from "../../@types";
import { UnionActionTypeOfCardAction } from "./CardActions";

const CardStoreContext = createContext<StoreContextValue<Card, UnionActionTypeOfCardAction>>(
  {} as StoreContextValue<Card, UnionActionTypeOfCardAction>
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

const CardStore = ({ children }: StoreProps) => {
  const [state, dispatch] = useReducer(CardReducer, initialState);

  return <CardStoreContext.Provider value={{ state, dispatch }}>{children}</CardStoreContext.Provider>;
};

export default CardStore;
export { CardStoreContext };
