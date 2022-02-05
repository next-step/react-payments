import { INPUT_INFO, INPUT_LENGTH, EXPIRY_DATE } from '@/constants';

export const isValueOverMaximumLength = (
  value: number | string,
  fieldKey: keyof typeof INPUT_LENGTH
) => INPUT_LENGTH[fieldKey] > 0 && `${value}`?.length > INPUT_LENGTH[fieldKey];

export const isValidValue = (
  value: number | string,
  fieldKey: keyof typeof INPUT_LENGTH,
  index: number
) => {
  if (!INPUT_INFO[fieldKey]?.require && !!INPUT_INFO[fieldKey]?.pattern)
    return true;

  if (fieldKey === EXPIRY_DATE) {
    return new RegExp(INPUT_INFO[fieldKey]?.pattern[index]).test(`${value}`);
  }

  return new RegExp(INPUT_INFO[fieldKey]?.pattern).test(`${value}`);
};

export const isValueValidLength = (
  value: number | string,
  fieldKey: keyof typeof INPUT_LENGTH
) => `${value}`?.length === INPUT_LENGTH[fieldKey];

export const hasSameKey = () => {
  const keySet = new Set();

  return (newKey: string) => {
    const hasSameKey = keySet.has(newKey);
    if (hasSameKey) return hasSameKey;
    keySet.add(newKey);
    return false;
  };
};
