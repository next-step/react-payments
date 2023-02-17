import Card from "../../components/Card";
import CardNumber from "../../components/Form/CardNumber";
import ExpiredDate from "../../components/Form/ExpiredDate";
import UserName from "../../components/Form/UserName";
import Code from "../../components/Form/Code";
import Password from "../../components/Form/Password";
import { useState } from "react";

function Add() {
  const [cardNumber, setCardNumber] = useState("");
  const [expireMonth, setExpireMonth] = useState(0);
  const [expireYear, setExpireYear] = useState(0);
  const [userName, setUserName] = useState("");
  const [code, setCode] = useState(0);
  const [password, setPassword] = useState("");

  const onCardNumberChange = (cardNumbers: number[]) => {
    const hasCardNumber = cardNumbers.some((cardNumber) => cardNumber);
    const formattedCardNumber = hasCardNumber
      ? `${cardNumbers[0]}-${cardNumbers[1]}-${cardNumbers[2]}-${cardNumbers[3]}`
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
  const onPasswordChange = (password: PasswordType): void => {
    const formattedPassword = Object.values(password).join();
    setPassword(formattedPassword);
  };

  return (
    <>
      <Card
        cardNumber={cardNumber}
        expireMonth={expireMonth}
        expireYear={expireYear}
        userName={userName}
      ></Card>
      <form>
        <CardNumber onCardNumberChange={onCardNumberChange}></CardNumber>
        <ExpiredDate onExpiredDateChange={onExpiredDateChange}></ExpiredDate>
        <UserName onUserNameChange={onUserNameChange}></UserName>
        <Code onCodeChange={onCodeChange}></Code>
        <Password onPasswordChange={onPasswordChange}></Password>
      </form>
    </>
  );
}

type PasswordType = {
  [key: number]: string;
};

export default Add;
