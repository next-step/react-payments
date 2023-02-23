import styled from "styled-components";
import Card from "components/Card";
import { useState } from "react";
import CardNumberInput from "./CardNumberInput";
import CardSecurityInput from "./CardSecurityInput";
import CardPasswordInput from "./CardPasswordInput";
import CardOwnerNameInput from "./CardOwnerNameInput/index";
import CardExpirationDateInput from "./CardExpirationDateInput/index";
import DotList from "./DotList";
import Button from "../Button/index";
import { useNavigate } from "react-router-dom";
import { useHandleCardText } from "hooks/useHandleCardText";

export const AddCardForm = () => {
  const navigate = useNavigate();
  const {
    setCardNumber,
    cardNumber,
    expirationMonth,
    expirationYear,
    ownerName,
    setOwnerName,
    color,
    setColor,
    company,
    setCompany,
    securityCode,
    setSecurityCode,
    password,
    setPassword,
    setExpriationMonth,
    setExpriationYear,
  } = useHandleCardText();

  const [isOpenModal, setIsOpenModal] = useState<boolean>(true);

  const submit = () => {
    navigate("/complete"); // Input validation 추가 필요
  };

  const selectedDot = (e) => {
    const color = e.currentTarget.children[0].getAttribute("color");
    const company = e.currentTarget.children[1].textContent;
    setColor(color);
    setCompany(company);
    setIsOpenModal(false);
  };

  const openModal = () => {
    setIsOpenModal(true);
  };

  return (
    <>
      {isOpenModal ? <DotList onSelectedDot={selectedDot} /> : <></>}
      <Card
        type="primary"
        onClick={openModal}
        color={color}
        company={company}
        size="small"
        number={cardNumber}
        expirationMonth={expirationMonth}
        expirationYear={expirationYear}
        ownerName={ownerName}
      />
      <CardNumberInput setCardNumber={setCardNumber} fontColor={color} />
      <CardExpirationDateInput
        setExpriationMonth={setExpriationMonth}
        setExpriationYear={setExpriationYear}
        fontColor={color}
      />
      <CardOwnerNameInput setOwnerName={setOwnerName} fontColor={color} />
      <CardSecurityInput fontColor={color} setSecurityCode={setSecurityCode} />
      <CardPasswordInput fontColor={color} setPassword={setPassword} />
      <ButtonBox>
        <Button fontSize="s" onClick={submit} label="Next" />
      </ButtonBox>
    </>
  );
};

const ButtonBox = styled.div`
  width: 100%;
  text-align: right;
`;

export default AddCardForm;
