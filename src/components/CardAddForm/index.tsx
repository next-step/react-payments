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
import { useNavigate } from "react-router-dom";
import { checkCardFormValidation } from "utils";

export const CardAddForm = () => {
  const navigate = useNavigate();
  const {
    setCardNumber,
    cardNumber,
    expirationDate,
    setExpirationDate,
    ownerName,
    setOwnerName,
    color,
    setcolor,
    company,
    setcompany,
    securityCode,
    setSecurityCode,
    password,
    setPassword,
  } = useCardTextControl();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const submit = () => {
    const isValid = checkCardFormValidation({ cardNumber, expirationDate, ownerName, company });
    if (!isValid) return;
    navigate("/complete");
  };

  return (
    <>
      {isOpenModal ? <CardDotInfoList close={setIsOpenModal} setColor={setcolor} setCardCompnay={setcompany} /> : <></>}
      <Card
        color={color}
        company={company}
        size="small"
        number={cardNumber}
        expirationDate={expirationDate}
        ownerName={ownerName}
        onClick={() => setIsOpenModal(true)}
      />
      <CardNumberInput setCardNumber={setCardNumber} fontColor={color} />
      <CardExpirationDateInput setExpirationDate={setExpirationDate} fontColor={color} />
      <CardOwnerNameInput setOwnerName={setOwnerName} fontColor={color} />
      <CardSecurityInput fontColor={color} setSecurityCode={setSecurityCode} />
      <CardPasswordInput fontColor={color} setPassword={setPassword} />
      <ButtonBox>
        <Button size="s" onClick={submit}>
          Next
        </Button>
      </ButtonBox>
    </>
  );
};

const ButtonBox = styled.div`
  width: 100%;
  text-align: right;
`;

export default CardAddForm;
