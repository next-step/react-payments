import styled from "styled-components";
import Card from "components/Card";
import Text from "components/Text";
import InputContainer from "components/Input/Container";
import Input from "components/Input/Item";
import Button from "../Button/index";
import { useEffect, useRef, useState } from "react";
import CardNumberInput from "./CardNumberInput";
import CardSecurityInput from "./CardSecurityInput";
import CardPasswordInput from "./CardPasswordInput";
import CardOwnerInput from "./CardOwnerInput/index";
import CardExpirationDateInput from "./CardExpirationDateInput/index";
import useFormInput from "hooks/useFormInput";
import CardDotList from "./CardDotInfoList";

export const Form = () => {
  const { cardNumber, setCardNumber, expirationDate, setExpirationDate, ownerName, setOwnerName } = useFormInput();
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      {isOpenModal ? <CardDotList close={setIsOpenModal} /> : <></>}
      <Card
        theme="empty"
        size="small"
        cardNumber={cardNumber}
        expirationDate={expirationDate}
        ownerName={ownerName}
        onClick={() => setIsOpenModal(true)}
      />
      <CardNumberInput setCardNumber={setCardNumber} />
      <CardExpirationDateInput setExpirationDate={setExpirationDate} />
      <CardOwnerInput setOwnerName={setOwnerName} />
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
