import { Reducer } from "react";
import { PendingCard } from "../../@types";
import PendingCardActionType from "./pendingCardActionType";
import type { UnionActionTypeOfPendingCardAction } from "./pendingCardActions";

const pendingCardReducer: Reducer<PendingCard, UnionActionTypeOfPendingCardAction> = (state, action) => {
  switch (action.type) {
    case PendingCardActionType.SET_CARD_NAME:
      return {
        ...state,
        cardName: action.payload.cardName,
      };
    case PendingCardActionType.SET_CARD_TYPE:
      return {
        ...state,
        cardType: action.payload.cardType,
      };
    case PendingCardActionType.SET_CARD_NUMBER:
      return {
        ...state,
        cardNumber: [...action.payload.cardNumber],
      };
    case PendingCardActionType.SET_CARD_EXPIRATION:
      return {
        ...state,
        cardExpiration: {
          ...state.cardExpiration,
          ...action.payload.cardExpiration,
        },
      };
    case PendingCardActionType.SET_CARD_USER_NAME:
      return {
        ...state,
        cardUserName: action.payload.cardUserName,
      };
    case PendingCardActionType.SET_CARD_SECURITY_CODE:
      return {
        ...state,
        cardSecurityCode: action.payload.cardSecurityCode,
      };
    case PendingCardActionType.SET_CARD_PASSWORD:
      return {
        ...state,
        cardPassword: action.payload.cardPassword,
      };
    default:
      return state;
  }
};

export default pendingCardReducer;
