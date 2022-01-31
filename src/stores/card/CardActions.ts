import { CardExpiration, CardNumber, CardType } from "../../@types";
import CardActionType from "./CardActionType";
import { makeActionCreator } from "../../utils/storeUtills";
import type { ActionTypeMap } from "../../utils/storeUtills";

interface SetCardNamePaylaod {
  cardName: string;
}

interface SetCardTypePayload {
  cardType: CardType;
}

interface SetCardNumberPayload {
  cardNumber: CardNumber;
}

interface SetCardExpirationPaylaod {
  cardExpiration: Partial<CardExpiration>;
}

interface SetCardUserName {
  cardUserName: string;
}

interface SetCardSecurityCode {
  cardSecurityCode: string;
}

interface SetCardPassword {
  cardPassword: string;
}

const cardActions = {
  setCardName: makeActionCreator(CardActionType.SET_CARD_NAME)<SetCardNamePaylaod>(),
  setCardType: makeActionCreator(CardActionType.SET_CARD_TYPE)<SetCardTypePayload>(),
  setCardNumber: makeActionCreator(CardActionType.SET_CARD_NUMBER)<SetCardNumberPayload>(),
  setCardExpiration: makeActionCreator(CardActionType.SET_CARD_EXPIRATION)<SetCardExpirationPaylaod>(),
  setCardUserName: makeActionCreator(CardActionType.SET_CARD_USER_NAME)<SetCardUserName>(),
  setCardSecurityCode: makeActionCreator(CardActionType.SET_CARD_SECURITY_CODE)<SetCardSecurityCode>(),
  setCardPassword: makeActionCreator(CardActionType.SET_CARD_PASSWORD)<SetCardPassword>(),
} as const;

type ActionTypeOfCardAction = ActionTypeMap<typeof cardActions>;
type UnionActionTypeOfCardAction = ActionTypeOfCardAction[keyof ActionTypeOfCardAction];

export default cardActions;
export type { UnionActionTypeOfCardAction };
