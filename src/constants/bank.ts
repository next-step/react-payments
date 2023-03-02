import { CardType } from "../types/common";

export const BANKS = [
  {
    NAME: "강준카드",
    COLOR: "#e056fd",
    ID: "gang-jun",
  },
  {
    NAME: "보검카드",
    COLOR: "#badc58",
    ID: "bo-geom",
  },
  {
    NAME: "해인카드",
    COLOR: "#ffbe76",
    ID: "hae-in",
  },
  {
    NAME: "도현카드",
    COLOR: "#eb4d4b",
    ID: "do-hyun",
  },
  {
    NAME: "도환카드",
    COLOR: "#30336b",
    ID: "do-hwan",
  },
  {
    NAME: "진구카드",
    COLOR: "#22a6b3",
    ID: "jin-gu",
  },
  {
    NAME: "수혁카드",
    COLOR: "#535c68",
    ID: "soo-hyuk",
  },
  {
    NAME: "중기카드",
    COLOR: "#f9ca24",
    ID: "jung-ki",
  },
];

export const DEFAULT_BANK_COLOR = "#94dacd";

export const initCard: CardType = {
  cardNumber: {
    0: "",
    1: "",
    2: "",
    3: "",
  },
  expiredDate: {
    month: "",
    year: "",
  },
  userName: "",
  code: 0,
  password: {
    1: "",
    2: "",
  },
  bankId: "",
  cardAlias: "",
};
