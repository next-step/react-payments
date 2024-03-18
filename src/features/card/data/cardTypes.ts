export interface CardType {
  id: number;
  type: string;
  color: string;
}

export const CARD_TYPE_LIST: CardType[] = [
  { id: 1, type: "포코 카드", color: "red" },
  { id: 2, type: "준 카드", color: "blue" },
  { id: 3, type: "현석 카드", color: "green" },
  { id: 4, type: "윤호 카드", color: "violet" },
  { id: 5, type: "환오 카드", color: "gradient" },
  { id: 6, type: "태은 카드", color: "pink" },
  { id: 7, type: "준일 카드", color: "orange" },
  { id: 8, type: "은규 카드", color: "yellow" },
];
