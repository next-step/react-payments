import styled from "styled-components";
import Card from "components/Card";
import { useContext, useState } from "react";
import CardNumberInput from "./CardNumberInput";
import CardSecurityInput from "./CardSecurityInput";
import CardPasswordInput from "./CardPasswordInput";
import CardOwnerNameInput from "./CardOwnerNameInput/index";
import CardExpirationDateInput from "./CardExpirationDateInput/index";
import DotList from "./DotList";
import Button from "../Button/index";
import { useNavigate } from "react-router-dom";
import { useHandleCardText } from "hooks/useHandleCardText";
import { CardContext } from "context/Card";

export const Form = () => {
  const navigate = useNavigate();
  const cardCtx = useContext(CardContext);

  const { state, setState } = useHandleCardText();
  const [isOpenModal, setIsOpenModal] = useState(true);

  const submit = () => {
    const currentFormCard = state;
    cardCtx.addCardToStore(currentFormCard);
    navigate("/complete"); // Input validation 추가 필요
  };

  const selectedDot = (e) => {
    const color = e.currentTarget.children[0].getAttribute("color");
    const company = e.currentTarget.children[1].textContent;

    setState((prev) => ({
      ...prev,
      company,
      color,
    }));
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
        color={state.color}
        company={state.company}
        size="small"
        number={state.cardNumbers}
        expireMonth={state.expireDate.month}
        expireYear={state.expireDate.year}
        ownerName={state.ownerName}
      />
      <CardNumberInput setCardNumber={setState} fontColor={state.color} />
      <CardExpirationDateInput setExprireDate={setState} fontColor={state.color} />
      <CardOwnerNameInput setOwnerName={setState} fontColor={state.color} />
      <CardSecurityInput fontColor={state.color} setSecurityCode={setState} />
      <CardPasswordInput fontColor={state.color} setPassword={setState} />
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

export default Form;
