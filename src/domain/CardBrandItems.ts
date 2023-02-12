import { TCardBrandLabels, TCardNumber } from "./types";

interface ICardBrand {
  label: TCardBrandLabels;
  pattern: [TCardNumber, TCardNumber];
  colorStyle: string;
}

const CardBrandItems: ICardBrand[] = [
  {
    label: "포코",
    pattern: ["1111", "1111"],
    colorStyle: "#E24141",
  },
  {
    label: "준",
    pattern: ["2222", "2222"],
    colorStyle: "#547CE4",
  },
  {
    label: "공원",
    pattern: ["3333", "3333"],
    colorStyle: "#73BC6D",
  },
  {
    label: "브랜",
    pattern: ["4444", "4444"],
    colorStyle: "#DE59B9",
  },
  {
    label: "로이드",
    pattern: ["1212", "1212"],
    colorStyle: "#94DACD",
  },
  {
    label: "도비",
    pattern: ["2323", "2323"],
    colorStyle: "#E76E9A",
  },
  {
    label: "콜린",
    pattern: ["1313", "1313"],
    colorStyle: "#F37D3B",
  },
  {
    label: "썬",
    pattern: ["1414", "1414"],
    colorStyle: "#FBCD58",
  },
];

export function splitGroupCardBrands(size: number) {
  const groupCount = Math.ceil(CardBrandItems.length / size);
  return Array.from({ length: groupCount }).map((_, key) => {
    const start = key * size;
    const end = start + size;
    return CardBrandItems.slice(start, end);
  });
}

export function findCardBrandByLabel(label: string) {
  return CardBrandItems.find((item) => item.label === label);
}

export function findCardBrandByPattern([first, second]: string[]) {
  return CardBrandItems.find(({ pattern }) => {
    return pattern[0] === first && pattern[1] === second;
  });
}

export default CardBrandItems;
