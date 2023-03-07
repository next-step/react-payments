import { ActionType } from "pages/payments/modules/payments/PaymentsActionType";
import PaymentsReducer, {
  defaultValue,
  DefaultValueState,
} from "pages/payments/modules/payments/PaymentsReducer";
import { createContext, Dispatch, useContext, useReducer } from "react";

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

export const usePaymentsState = () => {
  const context = useContext(PaymentsStateContext);
  if (!context) {
    throw new Error(
      "usePaymentsState는 PaymentsProvider 안에서만 사용 가능합니다."
    );
  }
  return context;
};
export const usePaymentsDispatch = () => {
  const context = useContext(PaymentsDispatchContext);
  if (!context) {
    throw new Error(
      "usePaymentsDispatch는 PaymentsProvider 안에서만 사용 가능합니다."
    );
  }
  return context;
};
