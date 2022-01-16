export const RoutePath = {
  CardList: "/",
  AddCard: "add-card",
  AddCardComplete: "add-card-complete",
} as const;

export const CardType = {
  big: "big",
  small: "small",
  new: "new",
} as const;

export type CardData = {
  cardName: string;
  cardNumber: string;
  expired: string;
  userName: string;
  alias: string;
};
