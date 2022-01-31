import { Dispatch, ReactNode, Reducer } from "react";

interface StoreProps {
  children: ReactNode;
}

interface StoreContextValue<State, Action> {
  state: State;
  dispatch: Dispatch<Action>;
}

export { StoreProps, StoreContextValue };
