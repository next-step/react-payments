import { useState } from "react";
import { CardListType } from "../types/payments";

export const usePayments = () => {
  const [step, setStep] = useState<number>(0);
  const [cardList, setCardList] = useState<CardListType[]>([
    {
      title: "클린카드",
      number: "1111 - 2222 - 3333 - 4444",
      name: "YUJO",
      expiry: "12 / 23",
      nickname: "법인카드",
    },
  ]);

  return { step, setStep, cardList };
};
