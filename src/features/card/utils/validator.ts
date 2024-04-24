import { CardInputInterface } from '@/features/card/types/cardTypes';

const checkIsValidPattern = (value: string, pattern: RegExp) => {
  return pattern.test(value);
};

export const checkIsValidLength = (value: string, length: number) => {
  return value.length <= length;
};

export const checkIsValidPatternAndLength = ({
  value,
  regExp,
  length,
}: {
  value: string;
  regExp: RegExp;
  length: number;
}) => {
  return checkIsValidPattern(value, regExp) && checkIsValidLength(value, length);
};

export const checkIsValidCompanyName = (companyName: CardInputInterface['companyName']) => {
  return companyName.trim().length > 0;
};

export const checkIsValidCardNumber = (cardNumber: CardInputInterface['cardNumber']) => {
  return (
    cardNumber.first.length === 4 &&
    cardNumber.second.length === 4 &&
    cardNumber.third.length === 4 &&
    cardNumber.fourth.length === 4
  );
};

export const checkIsValidExpirationDate = (
  expirationDate: CardInputInterface['expirationDate'],
) => {
  return (
    (expirationDate.MM.length === 1 || expirationDate.MM.length === 2) &&
    expirationDate.YY.length === 2
  );
};

export const checkIsValidSecurityCode = (securityCode: CardInputInterface['securityCode']) => {
  return securityCode.length === 3;
};

export const checkIsValidPassword = (password: CardInputInterface['password']) => {
  return password.first.length === 1 && password.second.length === 1;
};

export const compareCardNumber = (
  cardNumberA: CardInputInterface['cardNumber'],
  cardNumberB: CardInputInterface['cardNumber'],
) => {
  return (Object.keys(cardNumberA) as (keyof CardInputInterface['cardNumber'])[]).every(
    (key) => cardNumberA[key] === cardNumberB[key],
  );
};
