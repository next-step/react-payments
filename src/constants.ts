import { Card } from "./domains/RegisterPage/CardRegister/types";

export const initialCards: Card[] = [
  {
    cardType: "윤호",
    cardNumber: {
      firstNumber: "1234",
      secondNumber: "4321",
      thirdNumber: "2121",
      fourthNumber: "1111",
    },
    holderName: "SUM",
    expiration: { month: "12", year: "12" },
  },
  {
    cardType: "은규",
    cardNumber: {
      firstNumber: "2222",
      secondNumber: "2222",
      thirdNumber: "2222",
      fourthNumber: "2222",
    },
    holderName: "KYU",
    expiration: { month: "11", year: "11" },
  },
];
