import { CARD_COMPANIES, CARD_COMPANIES_ARRAY } from '@/constants';
import { CardField } from '@/types';

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

export const isCompanyValid = (
  cardField: any
): cardField is CardField & {
  cardCompany: keyof typeof CARD_COMPANIES;
} => CARD_COMPANIES_ARRAY.includes(cardField.cardCompany);
