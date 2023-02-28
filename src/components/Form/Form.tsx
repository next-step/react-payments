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
import { ColorType, CompanyType } from "types";
import { isCardFormValidation } from "utils/InputValidation";

export const Form = () => {
  const navigate = useNavigate();
  const cardCtx = useContext(CardContext);

  const { state, setState } = useHandleCardFormText();
  const [isOpenModal, setIsOpenModal] = useState(true);

  const submit = () => {
    const currentFormCard = state;
    if (!isCardFormValidation(currentFormCard)) return;
    const newCard = {
      cardNumbers: currentFormCard.cardNumbers.text,
      expireDate: {
        month: currentFormCard.expireDate.month.text,
        year: currentFormCard.expireDate.year.text,
      },
      password: {
        one: currentFormCard.password.one,
        two: currentFormCard.password.two,
      },
      cvc: currentFormCard.cvc.text,
      ownerName: currentFormCard.ownerName.text,
      color: currentFormCard.color.text,
      company: currentFormCard.company.text,
      alias: "",
      id: Date.now().toString(),
    };
    cardCtx.addCardToStore(newCard);
    navigate("/complete");
  };

  const selectedDot = (e) => {
    const color = e.currentTarget.children[0].getAttribute("color") as ColorType;
    const company = e.currentTarget.children[1].textContent as CompanyType;

    setState((prev) => ({
      ...prev,
      company: {
        text: company,
        isValid: true,
      },
      color: {
        text: color,
        isValid: true,
      },
    }));
    setIsOpenModal(false);
  };

  const openModal = () => {
    setIsOpenModal(true);
  };

  return (
    <div>
      {isOpenModal ? <DotList onSelectedDot={selectedDot} /> : <></>}
      <Card
        type="primary"
        onClick={openModal}
        color={state.color.text}
        company={state.company.text}
        size="small"
        number={state.cardNumbers.text}
        expireMonth={state.expireDate.month.text}
        expireYear={state.expireDate.year.text}
        ownerName={state.ownerName.text}
      />
      <CardNumberInput setCardNumber={setState} fontColor={state.color.text} />
      <CardExpirationDateInput setExprireDate={setState} fontColor={state.color.text} />
      <CardOwnerNameInput setOwnerName={setState} fontColor={state.color.text} />
      <CardSecurityInput fontColor={state.color.text} setSecurityCode={setState} />
      <CardPasswordInput fontColor={state.color.text} setPassword={setState} />
      <ButtonBox>
        <Button fontSize="m" onClick={submit} label="Next" />
      </ButtonBox>
    </div>
  );
};

const ButtonBox = styled.div`
  width: 100%;
  text-align: right;
`;

export default Form;
