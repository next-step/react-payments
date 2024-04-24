import {
  DISPLAY_MAX_LENGTH_CARD_OWNER_NAME,
  DISPLAY_SECURITY_CHARACTER,
} from '@/features/card/constants/display';
import { CardInputInterface } from '@/features/card/types/cardTypes';

const formattedPaddedValue = (value: string, length: number) => value.padEnd(length, ' ');
const formattedPasswordStyle = (value: string) => value.replace(/./g, DISPLAY_SECURITY_CHARACTER);

export const formattedDisplayCardNumber = (cardNumber: CardInputInterface['cardNumber']) => {
  const hasOnlyFirstCardNumber = !cardNumber.fourth && !cardNumber.third && !cardNumber.second;
  if (hasOnlyFirstCardNumber) {
    return cardNumber.first;
  }

  const formattedFirst = formattedPaddedValue(cardNumber.first, 4);
  const formattedSecond = formattedPaddedValue(cardNumber.second, 4);
  const hasOnlyFirstAndSecondCardNumber = !cardNumber.fourth && !cardNumber.third;
  if (hasOnlyFirstAndSecondCardNumber) {
    return `${formattedFirst} ${formattedSecond}`;
  }

  const formattedThird = formattedPaddedValue(formattedPasswordStyle(cardNumber.third), 4);
  const hasOnlyFirstAndSecondAndThirdCardNumber = !cardNumber.fourth;
  if (hasOnlyFirstAndSecondAndThirdCardNumber) {
    return `${formattedFirst} ${formattedSecond} ${formattedThird}`;
  }

  const formattedFourth = formattedPaddedValue(formattedPasswordStyle(cardNumber.fourth), 4);
  return `${formattedFirst} ${formattedSecond} ${formattedThird} ${formattedFourth}`;
};

export const formattedExpirationDateMM = (MM: string) => {
  const parsedMM = +MM;
  if (parsedMM === 0) {
    return '';
  }

  return parsedMM >= 2 && parsedMM <= 9 ? `0${MM}` : MM;
};

export const formattedOwnerName = (ownerName: CardInputInterface['ownerName']) => {
  return ownerName.slice(0, DISPLAY_MAX_LENGTH_CARD_OWNER_NAME) || 'NAME';
};

export const formattedExpirationDate = (expirationDate: CardInputInterface['expirationDate']) => {
  return `${expirationDate.MM || 'MM'} / ${expirationDate.YY || 'YY'}`;
};
