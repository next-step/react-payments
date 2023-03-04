import Text from "components/common/Text/Text";
import styled from "styled-components";
import IconButton from "../../components/common/IconButton/IconButton";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CardContext } from "context/Card/CardContext";
import useHandleCardFormText from "hooks/useHandleCardFormText";
import { useState } from "react";
import { isCardFormValidation } from "utils/InputValidation";
import CompanyList from "components/Form/CompanyList/CompanyList";
import Card from "components/common/Card/Card";
import CardNumberInput from "components/Form/CardFormInput/CardNumberInput/CardNumberInput";
import CardExpirationDateInput from "components/Form/CardFormInput/CardExpirationDateInput/CardExpirationDateInput";
import CardOwnerNameInput from "components/Form/CardFormInput/CardOwnerNameInput/CardOwnerNameInput";
import CardPasswordInput from "components/Form/CardFormInput/CardPasswordInput/CardPasswordInput";
import CardSecurityInput from "components/Form/CardFormInput/CardSecurityInput/CardSecurityInput";
import Button from "components/common/Button/Button";
import { ColorType, CompanyType } from "types";

const FormPage = () => {
  const navigate = useNavigate();
  const cardCtx = useContext(CardContext);
  const { state, setState } = useHandleCardFormText();
  const [isOpenModal, setIsOpenModal] = useState(true);

  const handleBackButton = () => {
    navigate("/");
  };

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
    <Layout>
      <Header>
        <IconButton onClick={handleBackButton} name="arrowLeft" size="2xl" color="#575757" />
        <Text fontSize="lg" weight="bold" label="카드추가" />
      </Header>
      <div>
        {isOpenModal ? <CompanyList onSelectedCompany={selectedDot} /> : <></>}
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
    </Layout>
  );
};

const Layout = styled.div`
  height: 100%;
  padding: 16px 24px;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  color: #383838;
  margin-top: 10px;
  margin-bottom: 20px;
  gap: 20px;
`;
const ButtonBox = styled.div`
  width: 100%;
  text-align: right;
`;
export default FormPage;
