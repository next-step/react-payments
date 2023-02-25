import { CardNumbers } from "../components/Form/CardNumber";
import { Date } from "../components/Form/ExpiredDate";
import { PasswordType } from "../components/Form/Password";

export enum Size {
  Big = "big",
  Small = "small",
  Medium = "medium",
}

export type Card = {
  cardNumbers: CardNumbers;
  expiredDate: Date;
  userName: string;
  code: number;
  password: PasswordType;
  bankId: string;
};
