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
    setcolor,
    company,
    setcompany,
    securityCode,
    setSecurityCode,
    password,
    setPassword,
    setExpriationMonth,
    setExpriationYear,
  } = useHandleCardText();

  const [isOpenModal, setIsOpenModal] = useState(true);

  const submit = () => {
    // 몇가지 validation 아직 추가 x
    // const isValid = checkCardFormValidation({ cardNumber, expirationDate, ownerName, company });
    // if (!isValid) return;
    navigate("/complete");
  };

  return (
    <>
      {isOpenModal ? <DotList close={setIsOpenModal} setColor={setcolor} setCardCompnay={setcompany} /> : <></>}
      <Card
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
