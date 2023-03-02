export const ADD_CARD_INFO = "ADD_CARD_INFO";
type AddCardInfo = { type: typeof ADD_CARD_INFO };

export const ADD_CARD_TYPE = "ADD_CARD_TYPE";
type AddCardType = {
  type: typeof ADD_CARD_TYPE;
  title: string;
  backgroundColor: string;
};

export const ADD_CARD_NICKNAME = "ADD_CARD_NICKNAME";
type AddCardNickname = {
  type: typeof ADD_CARD_NICKNAME;
  nickname: string;
};

export const ADD_CARD = "ADD_CARD";
type AddCArd = {
  type: typeof ADD_CARD;
};

export const CLEAR_CARD_INFO = "CLEAR_CARD_INFO";
type ClearCardInfo = { type: typeof CLEAR_CARD_INFO };

export type ActionType =
  | AddCardInfo
  | AddCardType
  | AddCardNickname
  | AddCArd
  | ClearCardInfo;
