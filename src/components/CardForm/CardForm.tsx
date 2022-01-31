import { FormEventHandler } from "react";
import useIsShown from "../../hooks/useIsShown";
import cardActions from "../../stores/card/pendingCardActions";
import usePendingCardDispatch from "../../stores/card/hooks/usePendingCardDispatch";
import usePendingCardSelector from "../../stores/card/hooks/usePendingCardSelector";
import BottomModalPortal from "../BottomModal/BottomModal";
import CardExpirationInput from "../CardExpirationInput/CardExpirationInput";
import CardNumberInput from "../CardNumberInput/CardNumberInput";
import CardPasswordInput from "../CardPasswordInput/CardPasswordInput";
import CardSecurityCodeInput from "../CardSecurityCodeInput/CardSecurityCodeInput";
import CardTypeRadio from "../CardTypeRadio/CardTypeRadio";
import LabeledTextInput from "../LabeledTextInput/LabeledTextInput";
import SimpleButton from "../SimpleButton/SimpleButton";
import Styled from "./CardForm.styles";
import { isCardNumberFormFilled } from "../../utils/validations";
import type { CardFormField, CardNumber, CardType } from "../../@types";

interface Props {
  onSubmit?: (cardFormField: CardFormField) => void;
}

const CardForm = ({ onSubmit }: Props) => {
  const [isCardTypeSelectModalShown, showCardTypeSelectModal, hideCardTypeSelectModal] = useIsShown();
  const { cardNumber, cardType, cardExpiration, cardUserName, cardSecurityCode, cardPassword } = usePendingCardSelector(
    (state) => state
  );
  const pendingCardDispatch = usePendingCardDispatch();

  const handleCardNumberChange = (cardNumber: CardNumber) => {
    if (isCardNumberFormFilled(cardNumber)) {
      showCardTypeSelectModal();
    }
    pendingCardDispatch(cardActions.setCardNumber({ cardNumber }));
  };

  const handleCardTypeChange = (cardType: CardType) => {
    pendingCardDispatch(cardActions.setCardType({ cardType }));
    hideCardTypeSelectModal();
  };

  const handleCardExpirationChange = (month: string, year: string) =>
    pendingCardDispatch(cardActions.setCardExpiration({ cardExpiration: { month, year } }));

  const handleCardUserNameChange = (cardUserName: string) =>
    pendingCardDispatch(cardActions.setCardUserName({ cardUserName }));

  const handleCardSecurityCodeChange = (cardSecurityCode: string) =>
    pendingCardDispatch(cardActions.setCardSecurityCode({ cardSecurityCode }));

  const handleCardPasswordChange = (firstNumber: string, secondNumber: string) =>
    pendingCardDispatch(cardActions.setCardPassword({ cardPassword: firstNumber + secondNumber }));

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
