export type NewCardInfo = {
  id?: string;
  name?: string;
  number?: string;
  cvc?: string;
  expiry?: string;
  password1?: string;
  password2?: string;
  title?: string;
  backgroundColor?: string;
  nickname?: string;
};

export const ADD_CARD_INFO = "ADD_CARD_INFO";
type AddCardInfo = { type: typeof ADD_CARD_INFO; newCardInfo: NewCardInfo };

export const ADD_CARD = "ADD_CARD";
type AddCArd = {
  type: typeof ADD_CARD;
  nickname?: string;
};

export const EDIT_CARD = "EDIT_CARD";
type EditCard = {
  type: typeof EDIT_CARD;
  nickname?: string;
};

export const DELETE_CARD = "DELETE_CARD";
type DeleteCard = {
  type: typeof DELETE_CARD;
  id?: string;
};

export type SelectedCardInfo = Exclude<NewCardInfo, null | undefined> | null;
export const SET_SELECTED_CARD = "SET_SELECTED_CARD";
type SetSelectedCard = {
  type: typeof SET_SELECTED_CARD;
  selectedCard: SelectedCardInfo;
};

export type ActionType =
  | AddCardInfo
  | AddCArd
  | EditCard
  | DeleteCard
  | SetSelectedCard;
