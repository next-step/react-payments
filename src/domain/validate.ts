import { MAX_MONTH, MIN_MONTH } from './constant';

export const validNumber = (value: string) => {
  return /^(?:[1-9][0-9]{0,2}|)$/.test(value);
};

export const validCardPassword = (value: string) => {
  return /^(?:[1-9][0-9]{0,0}|)$/.test(value);
};

export const validCardNumber = (value: string) => {
  return /^(?:[1-9][0-9]{0,3}|)$/.test(value);
};

export const validExpirationDate = (value: string) => {
  return MIN_MONTH <= Number(value) && MAX_MONTH >= Number(value);
};
