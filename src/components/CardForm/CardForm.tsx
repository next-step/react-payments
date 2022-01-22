import { useState } from "react";
import { CardExpiration, CardFormField, CardNumber } from "../../@types";
import CardExpirationInput from "../CardExpirationInput/CardExpirationInput";
import CardNumberInput from "../CardNumberInput/CardNumberInput";
import CardPasswordInput from "../CardPasswordInput/CardPasswordInput";
import CardSecurityCodeInput from "../CardSecurityCodeInput/CardSecurityCodeInput";
import LabeledTextInput from "../LabeledTextInput/LabeledTextInput";
import SimpleButton from "../SimpleButton/SimpleButton";
import Styled from "./CardForm.styles";

interface Props {
  onSubmit?: (cardFormField: CardFormField) => void;
}

const CardForm = ({ onSubmit }: Props) => {
  const [cardNumber, setCardNumberChange] = useState<CardNumber>(["", "", "", ""]);
  const [cardExpiration, setCardExpiration] = useState<CardExpiration>({ month: "", year: "" });
  const [cardUserName, setCardUserName] = useState("");
  const [cardSecurityCode, setCardSecurityCode] = useState("");
  const [cardPassword, setCardPassword] = useState("");

  const handleCardNumberChange = (cardNumber: CardNumber) => setCardNumberChange(cardNumber);

  const handleCardExpirationChange = (month: string, year: string) => setCardExpiration({ month, year });

  const handleCardUserNameChange = (userName: string) => setCardUserName(userName);

  const handleCardSecurityCodeChange = (code: string) => setCardSecurityCode(code);

  const handleCardPasswordChange = (firstNumber: string, secondNumber: string) =>
    setCardPassword(firstNumber + secondNumber);

  const handleSubmit = () => {
    onSubmit?.({
      cardNumber,
      cardExpiration,
      cardUserName,
      cardSecurityCode,
      cardPassword,
    });
  };

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <CardNumberInput onChange={handleCardNumberChange} />
      <CardExpirationInput onChange={handleCardExpirationChange} />
      <LabeledTextInput label="카드소유자이름(선택)" onChange={handleCardUserNameChange} maxLength={30} />
      <CardSecurityCodeInput onChange={handleCardSecurityCodeChange} />
      <CardPasswordInput onChange={handleCardPasswordChange} dotColor="#04c09e" />
      <SimpleButton>다음</SimpleButton>
    </Styled.Form>
  );
};

export default CardForm;
export { Props };
