import styled from "styled-components";
import Card from "components/Card";
import Text from "components/Text";
import InputContainer from "components/Input/Container";
import Input from "components/Input/Item";
import Button from "../Button/index";
import { useRef, useState } from "react";
import CardNumberInput from "./CardNumberInput";
import CardSecurityInput from "./CardSecurityInput";
import CardPasswordInput from "./CardPasswordInput";
import CardOwnerInput from "./CardOwnerInput/index";
import CardExpirationDateInput from "./CardExpirationDateInput/index";

export const Form = () => {
  return (
    <>
      <Card fontSize="s" theme="empty" size="small" />
      <CardNumberInput />
      <CardExpirationDateInput />
      <CardOwnerInput />
      <CardSecurityInput />
      <CardPasswordInput />
      <ButtonBox>
        <Button size="s">Next</Button>
      </ButtonBox>
    </>
  );
};

const ButtonBox = styled.div`
  width: 100%;
  text-align: right;
`;

export default Form;
