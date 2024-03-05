import {
  MAX_CARD_NUMBER,
  MAX_MONTH,
  MAX_NUMBER,
  MAX_PASSWORD_NUMBER,
  MIN_CARD_NUMBER,
  MIN_MONTH,
  MIN_NUMBER,
  MIN_PASSWORD_NUMBER,
} from './constant';

export const validSecurityCode = (value: string) => {
  return MIN_NUMBER <= Number(value) && MAX_NUMBER >= Number(value);
};

export const validCardPassword = (value: string) => {
  return MIN_PASSWORD_NUMBER <= Number(value) && MAX_PASSWORD_NUMBER >= Number(value);
};

export const validExpirationDate = (value: string) => {
  return MIN_MONTH <= Number(value) && MAX_MONTH >= Number(value);
};
export const validCardNumber = (value: string) => {
  return MIN_CARD_NUMBER <= Number(value) && MAX_CARD_NUMBER >= Number(value);
};
