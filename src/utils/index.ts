import { RefObject } from 'react';

export const extractNumbers = (value: string) => {
  return value.replace(/[^0-9]/g, '');
};

export const masking = (value: string | undefined) => {
  if (value === null || value === undefined) return;

  const mask = '*';
  const NumberRegex = /[0-9]/g;

  return value.replace(NumberRegex, mask);
};

export const areAllRefsMaxLength = (refs: RefObject<HTMLInputElement>[]) => {
  return refs.every(
    (ref) => ref.current?.value.length === ref.current?.maxLength
  );
};

const JANUARY = 1;
const DECEMBER = 12;
export const isValidExpiryDate = (expiry: string) => {
  if (expiry.length !== 5) return false;

  const [month, year] = expiry.split('/');

  const inputYear = parseInt(`20${year}`, 10);
  const inputMonth = parseInt(month, 10);

  if (inputMonth < JANUARY || inputMonth > DECEMBER) {
    return false;
  }

  const now = new Date();
  if (
    inputYear < now.getFullYear() ||
    (inputYear === now.getFullYear() && inputMonth < now.getMonth() + 1)
  ) {
    return false;
  }

  return true;
};

export const handleRefInputMaxLength = (
  index: number,
  refs: RefObject<HTMLInputElement>[],
  nextRef?: RefObject<HTMLInputElement>
) => {
  const currentInput = refs[index].current;
  if (!currentInput) return;

  const value = extractNumbers(currentInput.value);
  currentInput.value = value;

  if (value.length === refs[0].current?.maxLength && nextRef) {
    nextRef.current?.focus();
  }
};
