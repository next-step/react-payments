declare module 'contexts' {
  type CardState = {
    cardTitle: string;
    cardNumber: string;
    cardOwner: string;
    cardExpiration: string;
    cardSecurityCode: string;
    cardPassword: string;
  };

  type CardAction = { type: 'ADD_CARD'; card: State } | { type: 'DEL_CARD'; cardNumber: string };
}

declare module 'components' {
  import { ReactNode } from 'react';

  type ChildrenProps = { children: ReactNode };

  type FormSameNameFromTargetValidatorProps = {
    $elements: HTMLFormControlsCollection;
    $target: EventTarget & HTMLFormElement & HTMLInputElement;
    name: string;
  };

  type FormSameNameFromTargetValidatorCallbackProps = FormSameNameFromTargetValidatorProps & {
    sameNamesElements: HTMLInputElement[];
    targetIndex: number;
  };
}

declare module 'literal' {
  type 타입_라우터_프로퍼티 = '/' | '/add-card' | '/confirmation';

  type 카드_테마_키 =
    | '기본'
    | '달'
    | '별'
    | '하늘'
    | '파랑'
    | '잎사귀'
    | '유니콘'
    | '파도'
    | '벚꽃';

  type 카드_테마_타입 =
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
