import { CardSize, CardSizeContent, CardType } from "../@types";

const CARD_COLOR: { [K in CardType]: string } = {
  NONE: "#D2D2D2",
  POCO: "#E24141",
  JUN: "#547CE4",
  GONG_WON: "#73BC6D",
  BRAN: "#DE59B9",
  LLOYD: "#94DACD",
  DOBY: "#E76E9A",
  COLIN: "#F37D3B",
  SUN: "#FBCD58",
};

const CARD_NAME: { [K in CardType]: string } = {
  NONE: "",
  POCO: "포코카드",
  JUN: "준카드",
  GONG_WON: "공원카드",
  BRAN: "브랜카드",
  LLOYD: "로이드카드",
  DOBY: "도비카드",
  COLIN: "콜린카드",
  SUN: "썬카드",
};

const CARD_SIZE: { [K in CardSize]: CardSizeContent } = {
  SMALL: {
    WIDTH: "208px",
    HEIGHT: "130px",
    PADDING: "14px",
    CHIP_WIDTH: "40px",
    CHIP_HEIGHT: "26px",
    FONT_SIZE: " 15px",
  },
  BIG: {
    WIDTH: "290px",
    HEIGHT: "180px",
    PADDING: "18px",
    CHIP_WIDTH: "55px",
    CHIP_HEIGHT: "36px",
    FONT_SIZE: "19px",
  },
};

const MAX_CARD_NUMBER_LENGTH = 4;
const MAX_CARD_EXPIRATION_VALUE_LENGTH = 2;
const MAX_CARD_SECURITY_CODE_LENGTH = 3;

export {
  CARD_COLOR,
  CARD_SIZE,
  CARD_NAME,
  MAX_CARD_NUMBER_LENGTH,
  MAX_CARD_EXPIRATION_VALUE_LENGTH,
  MAX_CARD_SECURITY_CODE_LENGTH,
};
