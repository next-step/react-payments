
import { createContext, Dispatch, useContext, useReducer } from "react";
import PaymentsReducer, { DefaultValueState, defaultValue } from "./reducer";
import { ActionType } from "./actionTypes";

export const PaymentsStateContext =
  createContext<DefaultValueState>(defaultValue);

type DispatchContext = Dispatch<ActionType>;
export const PaymentsDispatchContext = createContext<DispatchContext>(
  () => null
);

export const PaymentsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(PaymentsReducer, defaultValue);

  return (
    <PaymentsStateContext.Provider value={state}>
      <PaymentsDispatchContext.Provider value={dispatch}>
        {children}
      </PaymentsDispatchContext.Provider>
    </PaymentsStateContext.Provider>
  );
};

export const usePaymentsState = () => useContext(PaymentsStateContext);
export const usePaymentsDispatch = () => useContext(PaymentsDispatchContext);