import type { 타입_라우터_프로퍼티, 카드_테마_키, 카드_테마_타입 } from 'literal';

export const 라우터_프로퍼티: Record<string, 타입_라우터_프로퍼티> = {
  메인: '/',
  카드_추가: '/add-card',
  카드_확인: '/confirmation',
};

export const 카드_테마: Record<카드_테마_타입, 카드_테마_키> = {
  '': '기본',
  moon: '달',
  star: '별',
  wave: '파도',
  'cherry-blossom': '벚꽃',
  sky: '하늘',
  parang: '파랑',
  leaf: '잎사귀',
  unicorn: '유니콘',
};

export const 카드_기본번호: Record<string, 카드_테마_타입> = {
  '12345678': 'moon',
  '87654321': 'wave',
  '11112222': 'cherry-blossom',
  '22223333': 'parang',
  '10041004': 'leaf',
  '77777777': 'unicorn',
  '88888888': 'star',
  '99999999': 'sky',
};
