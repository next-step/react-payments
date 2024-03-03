import { createContext, useReducer, useContext, ReactElement } from "react";
import { CardInfoType } from "../type/CardInfoType";
import { ActionType } from "../type/ActionType";

const initialCardInfo: CardInfoType = {
  cardNumber: {
    section1: null,
    section2: null,
    section3: null,
    section4: null,
  },
  expiryDate: {
    MM: null,
    YY: null,
  },
  cardOwnerName: "",
  securityCode: null,
  cardPassword: {
    section1: null,
    section2: null,
    section3: null,
    section4: null,
  },
};

const CardContext = createContext<{
  state: CardInfoType;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: initialCardInfo,
  dispatch: () => null,
});

const cardReducer = (state: CardInfoType, action: ActionType) => {
  switch (action.type) {
    case "SET_CARD_INFO":
      console.log("Updated state:", {
        ...state,
        [action.payload.key]: action.payload.value,
      });
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const CardProvider = ({
  children,
}: {
  children: ReactElement | null;
}) => {
  const [state, dispatch] = useReducer(cardReducer, {
    cardNumber: {
      section1: null,
      section2: null,
      section3: null,
      section4: null,
    },
    expiryDate: {
      MM: null,
      YY: null,
    },
    cardOwnerName: "",
    securityCode: null,
    cardPassword: {
      section1: null,
      section2: null,
      section3: null,
      section4: null,
    },
  });

  return (
    <CardContext.Provider value={{ state, dispatch }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCardInfo = () => useContext(CardContext);
