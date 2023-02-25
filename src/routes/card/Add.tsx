import Card from "../../components/Card";
import CardNumber from "../../components/Form/CardNumber";
import type { CardNumbers } from "../../components/Form/CardNumber";
import ExpiredDate, { Date } from "../../components/Form/ExpiredDate";
import UserName from "../../components/Form/UserName";
import Code from "../../components/Form/Code";
import Password, { PasswordType } from "../../components/Form/Password";
import Button from "../../components/Form/Button";
import React, { useContext, useMemo, useState } from "react";
import { BANKS, DEFAULT_BANK_COLOR } from "../../constants/bank";
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

const formatNumber = (number: string) => {
  return number.replaceAll(/[0-9]/g, "*");
};

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
  const [cardNumber, setCardNumber] = useState<CardNumbers>({
    0: "",
    1: "",
    2: "",
    3: "",
  });
  const [expiredDate, setExpiredDate] = useState<Date>({ month: "", year: "" });
  const [userName, setUserName] = useState("");
  const [code, setCode] = useState(0);
  const [password, setPassword] = useState<PasswordType>({
    1: "",
    2: "",
  });
  const isTyping =
    Object.values(cardNumber).some((number) => number) ||
    Object.values(expiredDate).some((date) => date) ||
    !!userName;
  const history = useHistory();

  const modalContext = useContext(ModalContext);
  const cardContext = useContext(CardContext);

  if (!modalContext || !cardContext) {
    alert("context 누락");
    throw Error("context 필수값 누락");
  }

  const { setIsOpen } = modalContext;
  const { card, setCard } = cardContext;

  const color = useMemo(() => {
    if (card.bankId) {
      const selectedBank = BANKS.find((bank) => bank.ID === card.bankId);
      return selectedBank ? selectedBank.COLOR : "";
    } else {
      return isTyping ? DEFAULT_BANK_COLOR : "";
    }
  }, [card.bankId, isTyping]);
  const bankName = useMemo(() => {
    if (card.bankId) {
      const selectedBank = BANKS.find((bank) => bank.ID === card.bankId);
      return selectedBank ? selectedBank.NAME : "";
    }
  }, [card.bankId]);
  const formattedCardNumber = useMemo(() => {
    const hasCardNumber = Object.values(cardNumber).some(
      (cardNumber) => cardNumber
    );
    return hasCardNumber
      ? `${cardNumber[0]}-${cardNumber[1]}-${formatNumber(
          cardNumber[2]
        )}-${formatNumber(cardNumber[3])}`
      : "";
  }, [cardNumber]);

  const onCardNumberChange = (cardNumbers: CardNumbers) => {
    setCardNumber(cardNumbers);
  };
  const onExpiredDateChange = (expiredDate: Date) => {
    setExpiredDate(expiredDate);
  };
  const onUserNameChange = (userName: string) => {
    setUserName(userName);
  };
  const onCodeChange = (code: number) => {
    setCode(code);
  };
  const onPasswordChange = (password: PasswordType): void => {
    setPassword(password);
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isInvalid = checkValid(e.currentTarget);

    if (!isInvalid) {
      if (card.bankId) {
        history.push("/complete");
        setCard((card: CardType) => {
          return {
            ...card,
            cardNumber,
            expiredDate,
            userName,
            code,
            password,
          };
        });
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
        expiredDate={expiredDate}
        userName={userName}
        color={color}
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
