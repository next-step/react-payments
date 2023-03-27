import type { InputHTMLAttributes } from 'react';

import type { Themes } from '@/theme';

export interface TCardCompanyProp {
  theme: Themes;
  name: string;
}

export interface TCardNumberProp {
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  value?: string;
}

export type TCardOwnerNameProp = string | undefined;
export type TCardExpireDateProp = string | undefined;
export type TCardNicknameProp = string | undefined;
