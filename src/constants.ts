import { v4 } from "uuid";
import { Card } from "./domains/RegisterPage/CardRegister/types";

export const initialCards: Card[] = [
  {
    uuid: v4(),
    cardType: "윤호",
    cardNumber: {
      firstNumber: "1234",
      secondNumber: "4321",
      thirdNumber: "2121",
      fourthNumber: "1111",
    },
    cardHolder: "SUN",
    cvc: "111",
    holderName: "SUM",
    expiration: { month: "12", year: "12" },
    createdAt: new Date(),
  },
  {
    uuid: v4(),
    cardType: "은규",
    cardNumber: {
      firstNumber: "2222",
      secondNumber: "2222",
      thirdNumber: "2222",
      fourthNumber: "2222",
    },
    cardHolder: "SUN",
    cvc: "111",
    holderName: "KYU",
    expiration: { month: "11", year: "11" },
    createdAt: new Date(),
  },
];
