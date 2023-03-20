import type { CardValidationType } from 'types';
import { reportError, ValidationError } from 'utils/error';
export const isCardFormValidation = (form: CardValidationType): boolean | number => {
  const isValid =
    isValidCardNumber(form.cardNumbers) &&
    isValidCompany(form.company) &&
    isValidExpirationDate(form.expireDateMonth) &&
    isValidExpirationDate(form.expireDateYear) &&
    isValidPasswordNumber(form.password) &&
    isValidSecurityCode(form.cvc);

  // Todo: 고차함수적용 ?

  try {
    if (!isValid) throw new ValidationError('입력하지 않은 양식을 확인하시오 !');
  } catch (error) {
    reportError(error);
  }
  return isValid;
};

export const isValidExpirationDate = (date: string) => {
  return date?.length === 2;
};

export const isValidCompany = (company: string) => {
  return company.length;
};
export const isValidSecurityCode = (code: string | undefined) => {
  return code?.length === 3;
};
export const isValidCardNumber = (cardNumber: string) => {
  return cardNumber?.length === 19;
};

export const isValidPasswordNumber = (password: string | undefined) => {
  return password?.length === 4;
};
