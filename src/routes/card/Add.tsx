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

  return (
    <>
      <Card
        cardNumber={cardNumber}
        expireMonth={expireMonth}
        expireYear={expireYear}
      ></Card>
      <form>
        <CardNumber onCardNumberChange={onCardNumberChange}></CardNumber>
        <ExpiredDate onExpiredDateChange={onExpiredDateChange}></ExpiredDate>
        <UserName></UserName>
        <Code></Code>
        <Password></Password>
      </form>
    </>
  );
}

export default Add;
