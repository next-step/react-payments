import { createContext, useReducer } from "react";

import { UnionActionTypeOfCardListAction } from "./cardListActions";
import cardListReducer from "./cardListReducer";
import type { CardMap, StoreContextValue, StoreProps } from "../../@types";

const CardListStoreContext = createContext<StoreContextValue<CardMap, UnionActionTypeOfCardListAction>>(
  {} as StoreContextValue<CardMap, UnionActionTypeOfCardListAction>
);

const initialState: CardMap = {};

const CardListStore = ({ children }: StoreProps) => {
  const [state, dispatch] = useReducer(cardListReducer, initialState);

  return <CardListStoreContext.Provider value={{ state, dispatch }}>{children}</CardListStoreContext.Provider>;
};

export default CardListStore;
export { CardListStoreContext };
