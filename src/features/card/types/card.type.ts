import { Dispatch, SetStateAction } from "react";

export interface CardInfo {
  cardName: string;
  cardNumber1: string;
  cardNumber2: string;
  cardNumber3: string;
  cardNumber4: string;
  expireDate: string;
  cardOwner: string;
  cvc: string;
  firstPassword: string;
  secondPassword: string;
}

export type CardInputContextType = {
  cardInfo: CardInfo;
  setCardInfo: Dispatch<SetStateAction<CardInfo>>;
  handleCardInfoChange: (key: keyof CardInfo, value: string) => void;
};
