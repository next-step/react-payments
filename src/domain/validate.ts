import { MAX_NUMBER, MAX_PASSWORD_NUMBER, MIN_NUMBER, MIN_PASSWORD_NUMBER } from './constant';

export const validSecurityCode = (value: string) => {
  return MIN_NUMBER <= Number(value) && MAX_NUMBER >= Number(value);
};

export const validCardPassword = (value: string) => {
  return MIN_PASSWORD_NUMBER <= Number(value) && MAX_PASSWORD_NUMBER >= Number(value);
};
