import { InputType } from "./constants";

export type CardData = {
  cardName?: string;
  cardNumber?: string;
  expired?: string;
  userName?: string;
  alias?: string;
};

export type InputTypeAttribute = keyof typeof InputType;
