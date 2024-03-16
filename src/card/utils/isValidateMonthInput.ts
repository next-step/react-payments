import { isValidateMonthString } from '@/shared';

export const isValidateMonthInput = (monthString: string) => {
  if (monthString.length >= 2 && !isValidateMonthString(monthString)) {
    console.warn('월 형식이 올바르지 않습니다. (01 ~ 12)');
    return false;
  }
  return true;
};
