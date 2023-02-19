import styled from "styled-components";
import Card from "components/Card";
import { useState } from "react";
import CardNumberInput from "./CardNumberInput";
import CardSecurityInput from "./CardSecurityInput";
import CardPasswordInput from "./CardPasswordInput";
import CardOwnerInput from "./CardOwnerInput/index";
import CardExpirationDateInput from "./CardExpirationDateInput/index";
import useFormInput from "hooks/useFormControl";
import CardDotInfoList from "./CardDotInfoList";
import Button from "../Button/index";

export const Form = () => {
  const {
    cardNumber,
    setCardNumber,
    expirationDate,
    setExpirationDate,
    ownerName,
    setOwnerName,
    cardInfo,
    setCardInfo,
  } = useFormInput();
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      {isOpenModal ? <CardDotInfoList close={setIsOpenModal} setCardInfo={setCardInfo} /> : <></>}
      <Card
        info={cardInfo}
        size="small"
        number={cardNumber}
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
