import React, { useState } from "react";
import { CardInput } from "components/common/Card/card.type";
import { CARD_INFO } from "constants/Payments";
import { CardListType } from "types/payments";
import { formatNumber, isNumber, monthConverter } from "utils";

const defaultCardInfo = {
  title: "클린카드",
  number: "1111-2222-3333-4444",
  name: "YUJO",
  expiry: "10/25",
  nickname: "법인카드",
  cvc: "123",
  password1: "1",
  password2: "2",
  backgroundColor: "#94dacd",
};

const defaultNewCardInfo = {};

export const usePayments = () => {
  const [step, setStep] = useState<number>(0);
  const [newCardInfo, setNewCardInfo] = useState<CardInput>(defaultNewCardInfo);
  const [cardList, setCardList] = useState<CardListType[]>([defaultCardInfo]);

  const validateInput = (input: string, id: string): boolean => {
    if (
      id === CARD_INFO.NUMBER ||
      id === CARD_INFO.EXPIRY ||
      id === CARD_INFO.CVC ||
      id === CARD_INFO.PASSWORD1 ||
      id === CARD_INFO.PASSWORD2
    ) {
      return isNumber(input);
    }
    return true;
  };

  const formatInput = (
    input: string,
    id: string,
    maxLength: number
  ): string => {
    if (input && input.length < maxLength) {
      switch (id) {
        case CARD_INFO.NUMBER:
          return formatNumber({ input, nth: 5 });
        case CARD_INFO.EXPIRY:
          if (input.length === 2) {
            return formatNumber({
              input: monthConverter(input),
              nth: 3,
              formatter: "/",
            });
          }
          return formatNumber({ input, nth: 3, formatter: "/" });
      }
    }
    return input;
  };

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id, maxLength } = e.target;

    if (validateInput(value, id)) {
      const formedValue = formatInput(value, id, maxLength);

      if (newCardInfo[id as keyof CardInput]) {
        const copiedNewCardInfo: CardInput = {
          ...newCardInfo,
          [id]: formedValue,
        };
        setNewCardInfo(copiedNewCardInfo);
      } else {
        const copiedNewCardInfo: CardInput = { ...newCardInfo };
        copiedNewCardInfo[id as keyof CardInput] = formedValue;
        setNewCardInfo(copiedNewCardInfo);
      }
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

  const handleCardNicknameAddClick = ({ nickname }: { nickname?: string }) => {
    const copiedList = [...cardList];
    copiedList[copiedList.length - 1] = {
      ...copiedList.at(-1),
      nickname,
    };
    setCardList(copiedList);
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
    handleCardNicknameAddClick,
  };
};
