import { createGlobalStyle } from "styled-components";
import Card from "../../components/Card";
import CardNumber from "../../components/Form/CardNumber";
import ExpiredDate from "../../components/Form/ExpiredDate";
import UserName from "../../components/Form/UserName";
import Code from "../../components/Form/Code";
import Password from "../../components/Form/Password";

function Add() {
  return (
    <>
      <GlobalStyle />
      <Card></Card>
      <form>
        <CardNumber></CardNumber>
        <ExpiredDate></ExpiredDate>
        <UserName></UserName>
        <Code></Code>
        <Password></Password>
      </form>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
input {
  font-size: 16px;
}
`;

export default Add;
