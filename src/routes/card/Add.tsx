import Card from "../../components/Card";
import CardNumber from "../../components/Form/CardNumber";
import ExpiredDate from "../../components/Form/ExpiredDate";
import UserName from "../../components/Form/UserName";
import Code from "../../components/Form/Code";
import Password from "../../components/Form/Password";
import { useState } from "react";

function Add() {
  const [cardNumber, setCardNumber] = useState("");

  const onCardNumberChange = (e: string) => {
    setCardNumber(e);
  };

  return (
    <>
      <Card cardNumber={cardNumber}></Card>
      <form>
        <CardNumber onCardNumberChange={onCardNumberChange}></CardNumber>
        <ExpiredDate></ExpiredDate>
        <UserName></UserName>
        <Code></Code>
        <Password></Password>
      </form>
    </>
  );
}

export default Add;
