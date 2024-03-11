import { SECURITY_CHARACTER } from '@/features/card/constants/display';

const formattedPaddedValue = (value: string, length: number) => value.padEnd(length, ' ');
const formattedPasswordStyle = (value: string) => value.replace(/./g, SECURITY_CHARACTER);

export const formattedDisplayCardNumber = (cardNumber: {
  first: string;
  second: string;
  third: string;
  fourth: string;
}) => {
  if (!cardNumber.fourth && !cardNumber.third && !cardNumber.second) {
    return cardNumber.first;
  }

  const formattedFirst = formattedPaddedValue(cardNumber.first, 4);
  const formattedSecond = formattedPaddedValue(cardNumber.second, 4);
  if (!cardNumber.fourth && !cardNumber.third) {
    return `${formattedFirst} ${formattedSecond}`;
  }

  const formattedThird = formattedPaddedValue(formattedPasswordStyle(cardNumber.third), 4);
  if (!cardNumber.fourth) {
    return `${formattedFirst} ${formattedSecond} ${formattedThird}`;
  }

  const formattedFourth = formattedPaddedValue(formattedPasswordStyle(cardNumber.fourth), 4);
  return `${formattedFirst} ${formattedSecond} ${formattedThird} ${formattedFourth}`;
};

export const formattedExpirationDateMM = (MM: string) => {
  if (+MM === 0) {
    return '';
  }

  return +MM >= 2 && +MM <= 9 ? `0${MM}` : MM;
};
