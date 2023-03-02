import type { ThemeKeys } from 'styles/theme';

interface CardCompany {
  [key: string]: ThemeKeys;
}

export const CardCompanies: CardCompany = {
  '빨강 카드': 'brand01',
  '파랑 카드': 'brand02',
  '초록 카드': 'brand03',
  '분홍 카드': 'brand04',
  '민트 카드': 'brand05',
  '보라 카드': 'brand06',
  '주황 카드': 'brand07',
  '노랑 카드': 'brand08',
} as const;

export type Company = keyof typeof CardCompanies;

export const DEFAULT_CARD_COMPANY: Company = '빨강 카드';
