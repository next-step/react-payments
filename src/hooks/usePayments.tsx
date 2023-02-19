import React, { useState } from "react";
import { CardInput } from "../components/common/Card/card.type";
import { cardInfo } from "../constants/Payments";
import { CardListType } from "../types/payments";
import { isNumber } from "../utils";

const defaultCardInfo = {
  title: "클린카드",
  number: "1111",
  name: "YUJO",
  month: "12",
  year: "23",
  nickname: "법인카드",
  cvc: "123",
  password1: "1",
  password2: "2",
  backgroundColor: "#94dacd",
};

const defaultNewCardInfo = {
  title: "",
  number: "",
  name: "",
  month: "",
  year: "",
  nickname: "",
  cvc: "",
  password1: "",
  password2: "",
};

export const usePayments = () => {
  const [step, setStep] = useState<number>(0);
  const [newCardInfo, setNewCardInfo] = useState<CardInput>(defaultNewCardInfo);
  const [cardList, setCardList] = useState<CardListType[]>([defaultCardInfo]);

  const validateInput = (input: string, id: string): boolean => {
    if (
      id === cardInfo.NUMBER ||
      id === cardInfo.MONTH ||
      id === cardInfo.YEAR ||
      id === cardInfo.CVC ||
      id === cardInfo.PASSWORD1 ||
      id === cardInfo.PASSWORD2
    ) {
      return isNumber(input);
    }
    return true;
  };

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;

    if (validateInput(value, id)) {
      let copiedNewCardInfo: CardInput = { ...newCardInfo };
      if (newCardInfo[id as keyof CardInput]) {
        copiedNewCardInfo = {
          ...newCardInfo,
          [id]: value,
        };
      } else {
        copiedNewCardInfo[id as keyof CardInput] = value;
      }

      setNewCardInfo(copiedNewCardInfo);
    }
  };

  const handleCardTypeClick = (e: React.MouseEvent<HTMLElement>) => {
    const event = e.target as HTMLDivElement;
    const { id, style } = event;

    setNewCardInfo((prev) => ({
      ...prev,
      title: id,
      backgroundColor: style.backgroundColor,
    }));
  };

  const handleCardAddClick = () => {
    setCardList((prev) => [...prev, { ...newCardInfo }]);
  };

  const clearCardInfo = () => setNewCardInfo(defaultNewCardInfo);

  return {
    step,
    setStep,
    cardList,
    newCardInfo,
    clearCardInfo,
    handleCardInputChange,
    handleCardTypeClick,
    handleCardAddClick,
  };
};
