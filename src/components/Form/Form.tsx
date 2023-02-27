import styled from "styled-components";
import Card from "components/Card/Card";
import { useContext, useState } from "react";
import CardNumberInput from "./CardNumberInput/CardNumberInput";
import CardSecurityInput from "./CardSecurityInput/CardSecurityInput";
import CardPasswordInput from "./CardPasswordInput/CardPasswordInput";
import CardOwnerNameInput from "./CardOwnerNameInput/CardOwnerNameInput";
import CardExpirationDateInput from "./CardExpirationDateInput/CardExpirationDateInput";
import DotList from "./DotList/DotList";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { useHandleCardFormText } from "hooks/useHandleCardFormText";
import { CardContext } from "context/Card/CardContext";

export const Form = () => {
  const navigate = useNavigate();
  const cardCtx = useContext(CardContext);

  const { state, setState } = useHandleCardFormText();
  const [isOpenModal, setIsOpenModal] = useState(true);

  const submit = () => {
    const currentFormCard = state;
    const newCard = {
      ...currentFormCard,
      alias: "",
      id: Date.now().toString(),
    };
    cardCtx.addCardToStore(newCard);
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
