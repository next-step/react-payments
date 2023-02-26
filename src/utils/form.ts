import { SLASH } from '../constant';

export const validateDigit = (digit: number | string, targetName: string) => {
  const value = String(digit).replace(/\D+/g, '');
  nextFocus(value, targetName, 4);
  return value;
};

export const validateExpire = (digit: string) => {
  const value = digit.replace(/\D+/g, '');

  if (Number(value.substring(0, 2)) > 12) {
    alert('1이상 12이하의 월을 입력해주세요');
    return '';
  }

  return insertSlash(value, value.length);
};

const insertSlash = (value: string, length: number) => {
  let result = '';
  if (length < 3) result = value;
  else if (length < 5) {
    result += value.substring(0, 2);
    result += SLASH;
    result += value.substring(2);
  } else {
    result += value.substring(0, 2);
    result += SLASH;
    result += value.substring(2, 4);
  }

  return result;
};

export const validatePassword = (digit: string, targetName: string) => {
  const value = digit.replace(/\D+/g, '');
  nextFocus(value, targetName, 1);
  return digit.replace(/\D+/g, '');
};

const nextFocus = (value: string, targetName: string, nextLength: number) => {
  const nextId = Number(targetName.slice(-1)) + 1;
  const targetId = targetName.slice(0, targetName.length - 1);
  const nextRef = document.getElementById(targetId + nextId);
  if (value.length === nextLength) {
    if (!nextRef) return;
    nextRef.focus();
  }
};
