import { MAX_MONTH, MIN_MONTH } from './constant';

export const isValidNumber = (value: string) => /^(?:[1-9][0-9]{0,2}|)$/.test(value);

export const isValidCardPassword = (value: string) => /^(?:[1-9][0-9]{0,0}|)$/.test(value);

export const isValidCardNumber = (value: string) => /^(?:[1-9][0-9]{0,3}|)$/.test(value);

export const isValidExpirationDate = (value: string) =>
  MIN_MONTH <= Number(value) && MAX_MONTH >= Number(value);

export const isFailed = (state = '', limit: number) => state.length === limit;

export const isLimitFailed = (state = '', limit: number) => state.length <= limit;

export const isObjectFailed = (state: Record<string, string> = {}, limit?: number) =>
  Object.values(state).every((item) => {
    if (limit) {
      return item && item.length === limit;
    }

    return item;
  });
