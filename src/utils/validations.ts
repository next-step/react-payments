import { CardExpiration, CardFormField, CardNumber, CardType } from "../@types";
import {
  MAX_CARD_EXPIRATION_VALUE_LENGTH,
  MAX_CARD_NUMBER_LENGTH,
  MAX_CARD_SECURITY_CODE_LENGTH,
} from "../constants/card";

const isCardNumberFormFilled = (cardNumber: CardNumber) =>
  cardNumber.every((cardCell) => cardCell.length === MAX_CARD_NUMBER_LENGTH);

const isCardTypeSelected = (cardType: CardType) => cardType !== "NONE";

const isCardExpirationFormFilled = (cardExpiration: CardExpiration) =>
  Object.values(cardExpiration).every((expiration) => expiration.length === MAX_CARD_EXPIRATION_VALUE_LENGTH);

const isCardUserNameFormFilled = (cardUserName: string) => cardUserName.length > 0;

const isCardSecurityCodeFormFilled = (code: string) => code.length === MAX_CARD_SECURITY_CODE_LENGTH;

const isCardPasswordFormFilled = (password: string) => password.length === 2;

const isCardFormFilled = (formField: CardFormField) => {
  const { cardNumber, cardType, cardExpiration, cardUserName, cardSecurityCode, cardPassword } = formField;

  return (
    isCardNumberFormFilled(cardNumber) &&
    isCardTypeSelected(cardType) &&
    isCardExpirationFormFilled(cardExpiration) &&
    isCardUserNameFormFilled(cardUserName) &&
    isCardSecurityCodeFormFilled(cardSecurityCode) &&
    isCardPasswordFormFilled(cardPassword)
  );
};

export {
  isCardNumberFormFilled,
  isCardTypeSelected,
  isCardExpirationFormFilled,
  isCardUserNameFormFilled,
  isCardSecurityCodeFormFilled,
  isCardPasswordFormFilled,
  isCardFormFilled,
};
