import type { RouterPaths } from 'literal';
import type { RouterState } from '@/contexts';

export const 메인_페이지 = '/';

export const 카드_추가_페이지 = '/add-card';

export const 카드_확인_페이지 = '/confirmation';

export const 라우터_프로퍼티: Record<string, RouterPaths> = {
  메인: 메인_페이지,
  카드_추가: 카드_추가_페이지,
  카드_확인: 카드_확인_페이지,
};

export const 라우터_초깃값: RouterState = {
  prevRoute: [],
  currentRoute: 메인_페이지,
  params: {},
};
