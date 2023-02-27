import type { Themes } from '@/constants/theme';

export type CardCompany = {
  name: string;
  theme: Themes;
};

export const cardCompanyList: { [key: string]: CardCompany } = {
  포코카드: {
    name: '포코카드',
    theme: 'red',
  },
  준카드: {
    name: '준카드',
    theme: 'blue',
  },
  현석카드: {
    name: '현석카드',
    theme: 'green',
  },
  윤호카드: {
    name: '윤효카드',
    theme: 'purple',
  },
  환오카드: {
    name: '환오카드',
    theme: 'mint',
  },
  태은카드: {
    name: '태은카드',
    theme: 'pink',
  },
  준일카드: {
    name: '준일카드',
    theme: 'orange',
  },
  은규카드: {
    name: '은규카드',
    theme: 'yellow',
  },
};
