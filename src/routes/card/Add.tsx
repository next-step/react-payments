import Card from "../../components/Card";
import CardNumber from "../../components/Form/CardNumber";
import ExpiredDate from "../../components/Form/ExpiredDate";
import UserName from "../../components/Form/UserName";
import Code from "../../components/Form/Code";
import Password from "../../components/Form/Password";
import Button from "../../components/Form/Button";
import React, { useContext, useMemo, useState } from "react";
import { ModalContext } from "../../components/Layout";
import { BANKS, DEFAULT_BANK_COLOR } from "../../constants/bank";
import { useHistory } from "react-router-dom";

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

const formatNumber = (number: number) => {
  return number.toString().replaceAll(/[0-9]/g, "*");
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
  const [cardNumber, setCardNumber] = useState("");
  const [expireMonth, setExpireMonth] = useState(0);
  const [expireYear, setExpireYear] = useState(0);
  const [userName, setUserName] = useState("");
  const [code, setCode] = useState(0);
  const [password, setPassword] = useState("");
  const isTyping = !!cardNumber || !!expireMonth || !!expireYear || !!userName;
  const history = useHistory();

  const context = useContext(ModalContext);

  if (!context) {
    alert("context 누락");
    throw Error("context 필수값 누락");
  }

  const { bankId, toggleModal } = context;

  const color = useMemo(() => {
    if (bankId) {
      const selectedBank = BANKS.find((bank) => bank.ID === bankId);
      return selectedBank ? selectedBank.COLOR : "";
    } else {
      return isTyping ? DEFAULT_BANK_COLOR : "";
    }
  }, [bankId, isTyping]);
  const bankName = useMemo(() => {
    if (bankId) {
      const selectedBank = BANKS.find((bank) => bank.ID === bankId);
      return selectedBank ? selectedBank.NAME : "";
    }
  }, [bankId]);

  const onCardNumberChange = (cardNumbers: number[]) => {
    const hasCardNumber = cardNumbers.some((cardNumber) => cardNumber);
    const formattedCardNumber = hasCardNumber
      ? `${cardNumbers[0]}-${cardNumbers[1]}-${formatNumber(
          cardNumbers[2]
        )}-${formatNumber(cardNumbers[3])}`
      : "";
    setCardNumber(formattedCardNumber);
  };
  const onExpiredDateChange = (expiredDates: number[]) => {
    setExpireMonth(expiredDates[0]);
    setExpireYear(expiredDates[1]);
  };
  const onUserNameChange = (userName: string) => {
    setUserName(userName);
  };
  const onCodeChange = (code: number) => {
    setCode(code);
  };
  const onPasswordChange = (password: ObjectType): void => {
    const formattedPassword = Object.values(password).join();
    setPassword(formattedPassword);
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isInvalid = checkValid(e.currentTarget);

    if (!isInvalid) {
      if (bankId) {
        history.push("/complete");
        return;
      }
      toggleModal();
    }
  };

  return (
    <>
      <Card
        cardNumber={cardNumber}
        expireMonth={expireMonth}
        expireYear={expireYear}
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

type ObjectType = {
  [key: number | string]: string;
};

export default Add;
