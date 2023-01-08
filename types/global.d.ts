declare module 'components' {
  import { ReactNode } from 'react';

  type ChildrenProps = { children: ReactNode };
}

declare module 'literal' {
  type 타입_라우터_프로퍼티 = '/' | '/add-card' | '/confirmation';

  export type 카드_테마_키 =
    | '기본'
    | '달'
    | '별'
    | '하늘'
    | '파랑'
    | '잎사귀'
    | '유니콘'
    | '파도'
    | '벚꽃';

  export type 카드_테마_타입 =
    | ''
    | 'moon'
    | 'star'
    | 'wave'
    | 'sky'
    | 'parang'
    | 'cherry-blossom'
    | 'leaf'
    | 'unicorn';
}
