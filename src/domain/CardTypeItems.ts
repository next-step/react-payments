import { TCardNumber, TCardTypes } from "./types";

interface ICardTypeItem {
  label: `${TCardTypes} 카드`;
  pattern: [TCardNumber, TCardNumber];
  colorStyle: string;
}

const CardTypeItems: ICardTypeItem[] = [
  {
    label: "포코 카드",
    pattern: ["1111", "1111"],
    colorStyle: "#E24141",
  },
  {
    label: "준 카드",
    pattern: ["2222", "2222"],
    colorStyle: "#547CE4",
  },
  {
    label: "공원 카드",
    pattern: ["3333", "3333"],
    colorStyle: "#73BC6D",
  },
  {
    label: "브랜 카드",
    pattern: ["4444", "4444"],
    colorStyle: "#DE59B9",
  },
  {
    label: "로이드 카드",
    pattern: ["1212", "1212"],
    colorStyle: "#94DACD",
  },
  {
    label: "도비 카드",
    pattern: ["2323", "2323"],
    colorStyle: "#E76E9A",
  },
  {
    label: "콜린 카드",
    pattern: ["1313", "1313"],
    colorStyle: "#F37D3B",
  },
  {
    label: "썬 카드",
    pattern: ["1414", "1414"],
    colorStyle: "#FBCD58",
  },
];

export default CardTypeItems;
