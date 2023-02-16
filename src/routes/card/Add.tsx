import Card from "../../components/Card";
import CardNumber from "../../components/Form/CardNumber";
import ExpiredDate from "../../components/Form/ExpiredDate";
import UserName from "../../components/Form/UserName";
import Code from "../../components/Form/Code";
import Password from "../../components/Form/Password";

function Add() {
  const onCardNumberChange = (e: string) => {
    console.log(e);
  };

  return (
    <>
      <Card></Card>
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
