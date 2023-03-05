import { CARD_COMPANIES } from '@/constants';

export const typedKeysOf = <T extends Record<string, any>>(
  obj: T
): (keyof T)[] => {
  return Object.keys(obj) as (keyof T)[];
};

export const isCompanyName = (
  name: string
): name is keyof typeof CARD_COMPANIES => {
  return name in CARD_COMPANIES;
};
