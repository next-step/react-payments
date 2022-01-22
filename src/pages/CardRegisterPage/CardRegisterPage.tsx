import { useNavigate } from "react-router-dom";

import { PATH } from "../../constants/route";
import CardForm from "../../components/CardForm/CardForm";
import { CardFormField } from "../../@types";
import {
  MAX_CARD_EXPIRATION_VALUE_LENGTH,
  MAX_CARD_NUMBER_LENGTH,
  MAX_CARD_SECURITY_CODE_LENGTH,
} from "../../constants/card";
import Styled from "./CardRegisterPage.styles";

const isCardFormFilled = (formField: CardFormField) => {
  const { cardNumber, cardExpiration, cardUserName, cardSecurityCode, cardPassword } = formField;

  return (
    cardNumber.every((cardCell) => cardCell.length === MAX_CARD_NUMBER_LENGTH) &&
    Object.values(cardExpiration).every((expiration) => expiration.length === MAX_CARD_EXPIRATION_VALUE_LENGTH) &&
    cardUserName.length > 0 &&
    cardSecurityCode.length === MAX_CARD_SECURITY_CODE_LENGTH &&
    cardPassword.length === 2
  );
};

const CardRegisterPage = () => {
  const navigate = useNavigate();

  const handleCardFormSubmit = (formField: CardFormField) => {
    if (!isCardFormFilled(formField)) {
      alert("입력 폼을 모두 채워주세요");

      return;
    }

    // register card

    navigate(PATH.CARD_REGISTER_COMPLETE);
  };

  return (
    <>
      <Styled.Header goBackLink={PATH.CARD_LIST}>카드추가</Styled.Header>
      <Styled.Card size="SMALL" />
      <CardForm onSubmit={handleCardFormSubmit} />
    </>
  );
};

export default CardRegisterPage;
