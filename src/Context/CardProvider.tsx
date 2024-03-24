import { createContext, useReducer, useContext, ReactElement } from "react";
import { CardInfoType } from "../type/CardInfoType";
import { ActionType } from "../type/ActionType";

const initialCardInfo: CardInfoType = {
  cardNumber: {
    section1: "",
    section2: "",
    section3: "",
    section4: "",
  },
  expiryDate: { MM: "", YY: "" },
  cardOwnerName: "",
  securityCode: "",
  cardPassword: {
    section1: "",
    section2: "",
    section3: "",
    section4: "",
  },
  cardName: "",
  cardNickName: "",
  createdAt: "",
  key: "",
};

const CardContext = createContext<{
  state: CardInfoType;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: initialCardInfo,
  dispatch: () => null,
});

const cardReducer = (state: CardInfoType, action: ActionType): CardInfoType => {
  if (action.payload) {
    switch (action.type) {
      case "SET_CARD_INFO": {
        return {
          ...state,
          cardNumber: {
            ...state.cardNumber,
            [action.payload.key]: action.payload.value,
          },
        };
      }
      case "SET_EXPIRE_DATE": {
        return {
          ...state,
          expiryDate: {
            ...state.expiryDate,
            [action.payload.key]: action.payload.value,
          },
        };
      }
      case "SET_OWNER_NAME": {
        return {
          ...state,
          [action.payload.key]: action.payload.value,
        };
      }
      case "SET_SECURITY_CODE": {
        return {
          ...state,
          [action.payload.key]: action.payload.value,
        };
      }
      case "SET_CARD_PASSWORD": {
        return {
          ...state,
          cardPassword: {
            ...state.cardPassword,
            [action.payload.key]: action.payload.value,
          },
        };
      }
      case "SET_CARD_NAME": {
        return {
          ...state,
          [action.payload.key]: action.payload.value,
        };
      }
      case "SET_CARD_NICKNAME": {
        return {
          ...state,
          [action.payload.key]: action.payload.value,
        };
      }
      case "SET_CREATED_AT": {
        return {
          ...state,
          [action.payload.key]: action.payload.value,
        };
      }
      case "SET_KEY": {
        return {
          ...state,
          [action.payload.key]: action.payload.value,
        };
      }
      case "TOTAL": {
        return {
          ...(action.payload.value as CardInfoType),
        };
      }
    }
  } else {
    return {
      ...state,
      cardNumber: {
        section1: "",
        section2: "",
        section3: "",
        section4: "",
      },
      expiryDate: { MM: "", YY: "" },
      cardOwnerName: "",
      securityCode: "",
      cardPassword: {
        section1: "",
        section2: "",
        section3: "",
        section4: "",
      },
      cardName: "",
      cardNickName: "",
      createdAt: "",
      key: "",
    };
  }
  return state;
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
