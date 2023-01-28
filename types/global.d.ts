declare module 'components' {
  import type { HTMLAttributes, ReactNode } from 'react';
  import type { CardSizeTypes, CardThemeTypes } from 'literal';

  type ChildrenProps = { children: ReactNode };

  type FormGetNameValidatorCallbackProps = {
    target: HTMLInputElement;
    sameNames: HTMLInputElement[];
    index: number;
  };

  type CardProps = {
    size?: CardSizeTypes;
    theme?: CardThemeTypes;
    isAdd?: boolean;
    isEmpty?: boolean;
    cardTitle?: string;
    cardNumber?: string;
    cardOwner?: string;
    cardExpiration?: string;
  } & HTMLAttributes<HTMLDivElement>;
}

declare module 'literal' {
  type RouterPaths = '/' | '/add-card' | '/confirmation';

  type CardSizeTypes = 'small' | 'big';

  type CardState = {
    theme?: CardThemeTypes;
    cardTitle?: string;
    cardNumber: string;
    cardExpiration: string;
    cardOwner: string;
    cardSecurityCode: string;
    cardPassword: string;
  };

  type SecureCardState = Omit<CardState, 'cardSecurityCode' | 'cardPassword'>;

  type CardThemeKeys =
    | '기본'
    | '달'
    | '별'
    | '하늘'
    | '파랑'
    | '잎사귀'
    | '유니콘'
    | '파도'
    | '벚꽃';

  type CardThemeTypes =
    | 'base-theme'
    | 'moon'
    | 'star'
    | 'wave'
    | 'sky'
    | 'parang'
    | 'cherry-blossom'
    | 'leaf'
    | 'unicorn';
}
