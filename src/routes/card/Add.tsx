import Card from "../../components/Card";
import CardNumber from "../../components/Form/CardNumber";
import type { CardNumbers } from "../../components/Form/CardNumber";
import ExpiredDate, { Date } from "../../components/Form/ExpiredDate";
import UserName from "../../components/Form/UserName";
import Code from "../../components/Form/Code";
import Password, { PasswordType } from "../../components/Form/Password";
import Button from "../../components/Form/Button";
import React, { useContext, useMemo } from "react";
import { DEFAULT_BANK_COLOR } from "../../constants/bank";
import { useHistory } from "react-router-dom";
import { ModalContext } from "../../components/ModalProvider";
import { CardContext } from "../../components/CardProvider";
import Header from "../../components/Header";
import { CardType } from "../../types/common";

const INPUT_NAMES = [
  "card-0",
  "card-1",
  "card-2",
  "card-3",
  "month",
  "year",
  "username",
  "code",
  "password1",
  "password2",
];

const checkValid = (eventTarget: any) => {
  return INPUT_NAMES.some((inputName) => {
    if (!eventTarget[inputName]?.value && inputName !== "username") {
      let prefix = inputName;
      if (inputName.startsWith("card-")) {
        prefix = "카드";
      }
      if (inputName.startsWith("password")) {
        prefix = "비밀번호";
      }
      alert(`필수값 누락 (${prefix})`);
      return true;
    }
    return false;
  });
};

function Add() {
  const modalContext = useContext(ModalContext);
  const cardContext = useContext(CardContext);

  if (!modalContext || !cardContext) {
    alert("context 누락");
    throw Error("context 필수값 누락");
  }

  const { setIsOpen } = modalContext;
  const { card, setCard, formattedCardNumber, color, bankName } = cardContext;

  const isTyping =
    Object.values(card.cardNumber).some((number) => number) ||
    Object.values(card.expiredDate).some((date) => date) ||
    !!card.userName;
  const history = useHistory();

  const cardColor = useMemo(() => {
    if (color) {
      return color;
    }

    if (isTyping) {
      return DEFAULT_BANK_COLOR;
    }
  }, [color, isTyping]);

  const onCardNumberChange = (cardNumbers: CardNumbers) => {
    setCard((card: CardType) => {
      return {
        ...card,
        cardNumber: cardNumbers,
      };
    });
  };
  const onExpiredDateChange = (expiredDate: Date) => {
    setCard((card: CardType) => {
      return {
        ...card,
        expiredDate,
      };
    });
  };
  const onUserNameChange = (userName: string) => {
    setCard((card: CardType) => {
      return {
        ...card,
        userName,
      };
    });
  };
  const onCodeChange = (code: number) => {
    setCard((card: CardType) => {
      return {
        ...card,
        code,
      };
    });
  };
  const onPasswordChange = (password: PasswordType): void => {
    setCard((card: CardType) => {
      return {
        ...card,
        password,
      };
    });
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isInvalid = checkValid(e.currentTarget);

    if (!isInvalid) {
      if (card.bankId) {
        history.push("/complete");
        return;
      }
      setIsOpen(true);
    }
  };

  return (
    <>
      <Header />
      <Card
        cardNumber={formattedCardNumber}
        expiredDate={card.expiredDate}
        userName={card.userName}
        color={cardColor}
        bankName={bankName}
      ></Card>
      <form onSubmit={submitHandler}>
        <CardNumber onCardNumberChange={onCardNumberChange}></CardNumber>
        <ExpiredDate onExpiredDateChange={onExpiredDateChange}></ExpiredDate>
        <UserName onUserNameChange={onUserNameChange}></UserName>
        <Code onCodeChange={onCodeChange}></Code>
        <Password onPasswordChange={onPasswordChange}></Password>
        <Button />
      </form>
    </>
  );
}

export default Add;
