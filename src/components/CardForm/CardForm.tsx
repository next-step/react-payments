import { FormEventHandler } from "react";
import { CardFormField, CardNumber, CardType } from "../../@types";
import { MAX_CARD_NUMBER_LENGTH } from "../../constants/card";
import useIsShown from "../../hooks/useIsShown";
import cardActions from "../../stores/card/CardActions";
import useCardDispatch from "../../stores/card/hooks/useCardDispatch";
import useCardSelector from "../../stores/card/hooks/useCardSelector";
import BottomModalPortal from "../BottomModal/BottomModal";
import CardExpirationInput from "../CardExpirationInput/CardExpirationInput";
import CardNumberInput from "../CardNumberInput/CardNumberInput";
import CardPasswordInput from "../CardPasswordInput/CardPasswordInput";
import CardSecurityCodeInput from "../CardSecurityCodeInput/CardSecurityCodeInput";
import CardTypeRadio from "../CardTypeRadio/CardTypeRadio";
import LabeledTextInput from "../LabeledTextInput/LabeledTextInput";
import SimpleButton from "../SimpleButton/SimpleButton";
import Styled from "./CardForm.styles";

interface Props {
  onSubmit?: (cardFormField: CardFormField) => void;
}

const CardForm = ({ onSubmit }: Props) => {
  const [isCardTypeSelectModalShown, showCardTypeSelectModal, hideCardTypeSelectModal] = useIsShown();
  const { cardNumber, cardType, cardExpiration, cardUserName, cardSecurityCode, cardPassword } = useCardSelector(
    (state) => state
  );
  const cardDispatch = useCardDispatch();

  const handleCardNumberChange = (cardNumber: CardNumber) => {
    if (cardNumber.every((cardCell) => cardCell.length === MAX_CARD_NUMBER_LENGTH)) {
      showCardTypeSelectModal();
    }
    cardDispatch(cardActions.setCardNumber({ cardNumber }));
  };

  const handleCardTypeChange = (cardType: CardType) => {
    cardDispatch(cardActions.setCardType({ cardType }));
    hideCardTypeSelectModal();
  };

  const handleCardExpirationChange = (month: string, year: string) =>
    cardDispatch(cardActions.setCardExpiration({ cardExpiration: { month, year } }));

  const handleCardUserNameChange = (cardUserName: string) =>
    cardDispatch(cardActions.setCardUserName({ cardUserName }));

  const handleCardSecurityCodeChange = (cardSecurityCode: string) =>
    cardDispatch(cardActions.setCardSecurityCode({ cardSecurityCode }));

  const handleCardPasswordChange = (firstNumber: string, secondNumber: string) =>
    cardDispatch(cardActions.setCardPassword({ cardPassword: firstNumber + secondNumber }));

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    onSubmit?.({
      cardNumber,
      cardType,
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
      <BottomModalPortal isShown={isCardTypeSelectModalShown} onClose={hideCardTypeSelectModal}>
        <CardTypeRadio selected={cardType} onChange={handleCardTypeChange} />
      </BottomModalPortal>
    </Styled.Form>
  );
};

export default CardForm;
export { Props };
