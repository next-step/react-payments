import type { 카드_테마_키, 카드_테마_타입, 타입_라우터_프로퍼티 } from 'literal';

export const 카드_테마: Record<카드_테마_키, 카드_테마_타입> = {
  기본: '',
  달: 'moon',
  별: 'star',
  파도: 'wave',
  벚꽃: 'cherry-blossom',
  하늘: 'sky',
  파랑: 'parang',
  잎사귀: 'leaf',
  유니콘: 'unicorn',
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

export const 라우터_프로퍼티: Record<string, 타입_라우터_프로퍼티> = {
  메인: '/',
  카드_추가: '/add-card',
  카드_확인: '/confirmation',
};
