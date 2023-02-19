import styled from "styled-components";
import Card from "components/Card";
import { useState } from "react";
import CardNumberInput from "./CardNumberInput";
import CardSecurityInput from "./CardSecurityInput";
import CardPasswordInput from "./CardPasswordInput";
import CardOwnerNameInput from "./CardOwnerNameInput/index";
import CardExpirationDateInput from "./CardExpirationDateInput/index";
import useCardTextControl from "hooks/useCardTextControl";
import CardDotInfoList from "./CardDotInfoList";
import Button from "../Button/index";

export const CardAddForm = () => {
  const {
    setCardNumber,
    cardNumber,
    expirationDate,
    setExpirationDate,
    ownerName,
    setOwnerName,
    color,
    setcolor,
    cardCompany,
    setCardCompnay,
  } = useCardTextControl();
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      {isOpenModal ? (
        <CardDotInfoList close={setIsOpenModal} setColor={setcolor} setCardCompnay={setCardCompnay} />
      ) : (
        <></>
      )}
      <Card
        color={color}
        company={cardCompany}
        size="small"
        number={cardNumber}
        expirationDate={expirationDate}
        ownerName={ownerName}
        onClick={() => setIsOpenModal(true)}
      />
      <CardNumberInput setCardNumber={setCardNumber} fontColor={color} />
      <CardExpirationDateInput setExpirationDate={setExpirationDate} fontColor={color} />
      <CardOwnerNameInput setOwnerName={setOwnerName} fontColor={color} />
      <CardSecurityInput fontColor={color} />
      <CardPasswordInput fontColor={color} />
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

export default CardAddForm;
