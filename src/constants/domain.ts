import type { CardProps } from 'components';
import type { CardThemeKeys, CardThemeTypes } from 'literal';

export const 카드_넘버 = 'card-number';

export const 카드_만료일 = 'card-expiration';

export const 카드_소유자 = 'card-owner';

export const 카드_보안코드 = 'card-security-code';

export const 카드_비밀번호 = 'card-password';

export const 카드_넘버_개별_길이 = 4;

export const 카드_만료일_개별_길이 = 2;

export const 카드_소유자_최대_길이 = 30;

export const 카드_테마: Record<CardThemeTypes, CardThemeKeys> = {
  'base-theme': '기본',
  moon: '달',
  star: '별',
  wave: '파도',
  'cherry-blossom': '벚꽃',
  sky: '하늘',
  parang: '파랑',
  leaf: '잎사귀',
  unicorn: '유니콘',
};

export const 카드_기본번호: Record<string, CardThemeTypes> = {
  '': 'base-theme',
  '12345678': 'moon',
  '87654321': 'wave',
  '11112222': 'cherry-blossom',
  '22223333': 'parang',
  '10041004': 'leaf',
  '77777777': 'unicorn',
  '88888888': 'star',
  '99999999': 'sky',
};

export const 카드_추가_초깃값: CardProps = {
  theme: 'base-theme',
  cardTitle: '',
  cardNumber: '',
  cardOwner: '',
  cardExpiration: '',
};

export const 카드_회사_목록 = (
  Object.entries(카드_테마) as Array<[CardThemeTypes, CardThemeKeys]>
).filter(([company]) => company !== 'base-theme');

export const 카드_번호_영역_개수 = ['', '', '', ''];

export const 카드_필드_에러_초깃값 = Array.from({ length: 5 }).map(() => false);

export const 카드_입력칸_유효성_초깃값 = Array.from({ length: 4 }).map(() => false);
