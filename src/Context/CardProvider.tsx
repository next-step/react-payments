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
  expiryDate: { MM: null, YY: null },
  cardOwnerName: "",
  securityCode: null,
  cardPassword: {
    section1: null,
    section2: null,
    section3: null,
    section4: null,
  },
  cardName: "",
  cardNickName: "",
};

const CardContext = createContext<{
  state: CardInfoType;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: initialCardInfo,
  dispatch: () => null,
});

const cardReducer = (state: CardInfoType, action: ActionType) => {
  console.log("check", state, action, {
    [action.payload.key]: action.payload.value,
  });
  switch (action.type) {
    case "SET_CARD_INFO":
      return {
        ...state,
        cardNumber: {
          ...state.cardNumber,
          [action.payload.key]: action.payload.value,
        },
      };
    case "SET_EXPIRE_DATE":
      return {
        ...state,
        expiryDate: {
          ...state.expiryDate,
          [action.payload.key]: action.payload.value,
        },
      };

    case "SET_OWNER_NAME":
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case "SET_SECURITY_CODE":
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };

    case "SET_CARD_PASSWORD":
      return {
        ...state,
        cardPassword: {
          ...state.cardPassword,
          [action.payload.key]: action.payload.value,
        },
      };
    case "SET_CARD_NAME":
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case "SET_CARD_NCIKNAME":
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
  const [state, dispatch] = useReducer(cardReducer, initialCardInfo);

  return (
    <CardContext.Provider value={{ state, dispatch }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCardInfo = () => useContext(CardContext);
