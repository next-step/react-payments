import { createContext, useMemo, useState } from "react";
import {
  FIRST_NUMBER,
  FOURTH_NUMBER,
  SECOND_NUMBER,
  THIRD_NUMBER,
} from "../../src/constants/cardNumber";
import { MONTH, YEAR } from "../../src/constants/expirationDate";
export const CardContext = createContext();

const initalCardState = {
  cardNumber: {
    [FIRST_NUMBER]: "",
    [SECOND_NUMBER]: "",
    [THIRD_NUMBER]: "",
    [FOURTH_NUMBER]: "",
  },
  cardOwnerName: "",
  expirationDate: { [MONTH]: "", [YEAR]: "" },
  password: { [FIRST_NUMBER]: "", [SECOND_NUMBER]: "" },
  securityCode: "",
};

export const CardStateProvider = ({ children }) => {
  const [cardState, setCardState] = useState(initalCardState);

  const resetCardState = () => {
    setCardState(initalCardState);
  };

  const value = useMemo(
    () => ({ cardState, setCardState, resetCardState }),
    [cardState, setCardState]
  );

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};
