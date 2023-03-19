import { CardFormType } from 'types';
import { reportError, ValidationError } from 'utils/error';
export const isCardFormValidation = (form: CardFormType): boolean => {
  const isValid =
    form.cardNumbers.isValid &&
    form.company.isValid &&
    form.cvc.isValid &&
    form.expireDateMonth.isValid &&
    form.expireDateYear.isValid &&
    form.password.start.isValid &&
    form.password.end.isValid;
  // Todo: 고차함수적용

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
export const isValidSecurityCode = (code: string) => {
  return code?.length === 3;
};
export const isValidCardNumber = (cardNumber: string) => {
  return cardNumber?.length === 19;
};

export const isValidPasswordNumber = (password: string) => {
  return password?.length === 1;
};
