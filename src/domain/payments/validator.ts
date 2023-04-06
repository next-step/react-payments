import { CARD_INPUT } from '../../constants';

const {
  CARD_NUMBER,
  EXPIRED: { MONTH, YEAR },
  OWNER,
  CVC,
  PIN,
} = CARD_INPUT;

export const isValidCardNumber = (cardNumbers: string[]) => {
  return cardNumbers.every(
    //prettier-ignore
    (input) =>
      !isNaN(parseInt(input, 10)) &&
      input.length === CARD_NUMBER.EACH_LENGTH
  );
};

export const isValidExpiredMonth = (month: string) => {
  const parsedMonth = parseInt(month, 10);

  return (
    month.length === MONTH.LENGTH &&
    !isNaN(parsedMonth) &&
    parsedMonth >= MONTH.PARSED_MIN_VALUE &&
    parsedMonth <= MONTH.PARSED_MAX_VALUE
  );
};

export const isValidExpiredYear = (year: string) => {
  const parsedYear = parseInt(year, 10);
  const PARSED_MIN_VALUE = parseInt(new Date().getFullYear().toString().substring(2), 10);

  return year.length === YEAR.LENGTH && !isNaN(parsedYear) && parsedYear >= PARSED_MIN_VALUE;
};

export const isValidOwner = (owner: string) => {
  return owner.length >= OWNER.MIN_LENGTH && owner.length <= OWNER.MAX_LENGTH;
};

export const isValidCvc = (cvc: string) => {
  return !isNaN(parseInt(cvc, 10)) && cvc.length === CVC.LENGTH;
};

export const isValidPin = (pin: string) => {
  return !isNaN(parseInt(pin, 10)) && pin.length === PIN.EDITABLE_LENGTH;
};
