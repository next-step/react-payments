import { CardBrandName } from '@/card/constants';

const isValidateCardBrand = (brand: string): brand is CardBrandName =>
  Object.values(CardBrandName).includes(brand as CardBrandName);

const isValidateCardNumber = (cardNumber: string[]) =>
  cardNumber.length === 4 && cardNumber.every((number) => /^[0-9]{4}$/.test(number));

const isValidateExpirationDate = (expirationDate: string[]) => {
  if (expirationDate.length !== 2) {
    return false;
  }
  const [month, year] = expirationDate;
  return /^(0[1-9]|1[0-2]) [0-9]{2}$/.test(`${month} ${year}`);
};

const isValidateSecurityCode = (securityCode: string[]) => {
  const securityCodeString = securityCode.join('');
  if (securityCodeString.length !== 3) {
    return false;
  }
  return /^[0-9]{3}$/.test(securityCodeString);
};

const isValidatePassword = (password: string[]) => {
  if (password.length !== 4) {
    return false;
  }
  return password.every((number) => /^[0-9]$/.test(number));
};

export const isValidateCardModule = {
  brand: isValidateCardBrand,
  number: isValidateCardNumber,
  expirationDate: isValidateExpirationDate,
  securityCode: isValidateSecurityCode,
  password: isValidatePassword,
};
