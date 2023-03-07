export const CARD_INFO = {
  NUMBER: "number",
  NAME: "name",
  EXPIRY: "expiry",
  NICKNAME: "nickname",
  CVC: "cvc",
  FIRST_PASSWORD: "firstPassword",
  SECOND_PASSWORD: "secondPassword",
  BACKGROUND_COLOR: "backgroundColor",
};

export const VALIDATION_LIST = [
  CARD_INFO.NUMBER,
  CARD_INFO.EXPIRY,
  CARD_INFO.CVC,
  CARD_INFO.FIRST_PASSWORD,
  CARD_INFO.SECOND_PASSWORD,
];

export const TYPE = "type";
export const TYPE_SELECT = "select";
export const TYPE_COMPLETED = "completed";

export const STEP = {
  SHOW_CARD_LIST: "/",
  REGISTER_CARD: "/card-form",
  SELECT_CARD_COMPANY: `/card-form?type=${TYPE_SELECT}`,
  REGISTER_CARD_COMPLETED: `/card-form?type=${TYPE_COMPLETED}`,
  ADD_CARD_NICKNAME: "/card-completed",
};
