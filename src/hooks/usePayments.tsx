import { useState } from "react";
import { CardInput } from "../components/common/Card/card.type";
import { CardListType } from "../types/payments";

const defaultCardInfo = {
  title: "클린카드",
  number1: "1111",
  number2: "2222",
  number3: "3333",
  number4: "4444",
  name: "YUJO",
  month: "12",
  year: "23",
  nickname: "법인카드",
  cvc: "123",
  password1: "1",
  password2: "2",
  password3: "3",
  password4: "4",
};

export const usePayments = () => {
  const [step, setStep] = useState<number>(0);
  const [newCardInfo, setNewCardInfo] = useState<CardInput>({});
  const [cardList, setCardList] = useState<CardListType[]>([defaultCardInfo]);

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;

    let copiedNewCardInfo: CardInput = { ...newCardInfo };
    if (newCardInfo[id as keyof CardInput]) {
      copiedNewCardInfo = {
        ...newCardInfo,
        [id]: newCardInfo[id as keyof CardInput] + value,
      };
    } else {
      copiedNewCardInfo[id as keyof CardInput] = value;
    }

    setNewCardInfo(copiedNewCardInfo);
  };

  const handleCardAddClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCardList((prev) => ({ ...prev, newCardInfo }));
    setNewCardInfo({});
  };

  return {
    step,
    setStep,
    cardList,
    newCardInfo,
    handleCardInputChange,
    handleCardAddClick,
  };
};
