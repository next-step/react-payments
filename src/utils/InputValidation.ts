import { CardFormType } from "types";
import { reportError, ValidationError } from "utils/error";
export const isCardFormValidation = (form: CardFormType): boolean => {
  console.log(form);
  const isValid =
    form.cardNumbers.isValid &&
    form.color.isValid &&
    form.company.isValid &&
    form.cvc.isValid &&
    form.expireDate.month.isValid &&
    form.expireDate.year.isValid &&
    form.ownerName.isValid &&
    form.password.isValid;

  try {
    if (!isValid) throw new ValidationError("입력하지 않은 양식을 확인하시오 !");
  } catch (error) {
    reportError(error);
  }
  return isValid;
};

export const isValidExpirationMonth = (month: string | undefined) => {
  if (!month) return false;
  return month.length === 2;
};
export const isValidExpirationYear = (year: string | undefined) => {
  if (!year) return false;
  return year.length == 2;
};
export const isValidCompany = (company: string) => {
  return company.length;
};
export const isValidSecurityCode = (code: string | undefined) => {
  if (!code) return false;
  return code.length === 3;
};
export const isValidCardNumber = (cardNumber: string | undefined) => {
  if (!cardNumber) return false;

  return cardNumber.length === 19;
};

export const isValidPasswordNumber = (password: string | undefined) => {
  if (!password) return false;
  return password.length === 1;
};
