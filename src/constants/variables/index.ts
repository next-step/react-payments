export const CARD_INPUT_VARIABLES = {
  NUMBER_MAX_LENGTH: 16,
  PARTIAL_NUMBER_MAX_LENGTH: 4,
  DATE_MAX_LENGTH: 2,
  MAX_MONTH: 12,
  MIN_MONTH: 1,
  OWNER_NAME_MAX_LENGTH: 30,
  CVC_NUMBER_MAX_LENGTH: 3,
  PARTIAL_PASSWORD_MAX_LENGTH: 1,
  CARD_NAME_MAX_LENGTH: 10,
};

export const CARD_NAMES = [
  { name: "포코 카드", color: "#E24141" },
  { name: "준 카드", color: "#547CE4" },
  { name: "현석 카드", color: "#73BC6D" },
  { name: "윤호 카드", color: "#DE59B9" },
  { name: "환오 카드", color: "#94DACD" },
  { name: "태은 카드", color: "#E76E9A" },
  { name: "준일 카드", color: "#F37D3B" },
  { name: "은규 카드", color: "#FBCD58" },
];

export type CardName = { name: string; color: string };
