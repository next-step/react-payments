import { Reducer } from "react";
import { Card } from "../../@types";
import CardActionType from "./CardActionType";
import type { UnionActionTypeOfCardAction } from "./CardActions";

const CardReducer: Reducer<Card, UnionActionTypeOfCardAction> = (state, action) => {
  switch (action.type) {
    case CardActionType.SET_CARD_NAME:
      return {
        ...state,
        cardName: action.payload.cardName,
      };
    case CardActionType.SET_CARD_TYPE:
      return {
        ...state,
        cardType: action.payload.cardType,
      };
    case CardActionType.SET_CARD_NUMBER:
      return {
        ...state,
        cardNumber: [...action.payload.cardNumber],
      };
    case CardActionType.SET_CARD_EXPIRATION:
      return {
        ...state,
        cardExpiration: {
          ...state.cardExpiration,
          ...action.payload.cardExpiration,
        },
      };
    case CardActionType.SET_CARD_USER_NAME:
      return {
        ...state,
        cardUserName: action.payload.cardUserName,
      };
    case CardActionType.SET_CARD_SECURITY_CODE:
      return {
        ...state,
        cardSecurityCode: action.payload.cardSecurityCode,
      };
    case CardActionType.SET_CARD_PASSWORD:
      return {
        ...state,
        cardPassword: action.payload.cardPassword,
      };
    default:
      return state;
  }
};

export default CardReducer;
