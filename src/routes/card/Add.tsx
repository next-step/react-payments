import Card from "../../components/Card";
import CardNumber from "../../components/Form/CardNumber";
import ExpiredDate from "../../components/Form/ExpiredDate";
import UserName from "../../components/Form/UserName";
import Code from "../../components/Form/Code";
import Password from "../../components/Form/Password";
import Button from "../../components/Form/Button";
import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import useCardChange from "../../hooks/useCardChange";
import useModalContext from "../../hooks/useModalContext";
import useCardContext from "../../hooks/useCardContext";
import { ROUTE } from "../../constants/route";

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
  const { setIsOpen } = useModalContext();
  const { setCard, card, bankName } = useCardContext();
  const {
    onCardNumberChange,
    onCodeChange,
    onExpiredDateChange,
    onUserNameChange,
    onPasswordChange,
    cardInfo,
    cardColor,
    formattedCardNumber,
  } = useCardChange();

  const history = useHistory();
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isInvalid = checkValid(e.currentTarget);

    if (!isInvalid) {
      if (card.bankId) {
        const cardData = {
          ...cardInfo,
          bankId: card.bankId,
        };
        setCard(cardData);
        history.push(ROUTE.COMPLETE);
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
        expiredDate={cardInfo.expiredDate}
        userName={cardInfo.userName}
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
