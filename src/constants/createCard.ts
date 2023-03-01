import { typedKeysOf } from '@/utils/typed';

export const LABEL_TEXT = {
  CVC: '보안 코드(CVC/CVV)',
  EXPIRATION_DATE: '만료일',
  CARD_NUMBER: '카드 번호',
  CARD_OWNER_NAME: '카드 소유자 이름 (선택)',
  CARD_PASSWORD: '카드 비밀번호',
};

export const PLACEHOLDER_TEXT = {
  EXPIRATION_DATE: 'MM / YY',
  CARD_OWNER_NAME: '카드에 표시된 이름과 동일하게 입력하세요.',
};

export const CARD_COMPANIES = {
  KAKAO: {
    name: '카카오뱅크 카드',
    color: 'yellow',
  },
  SH: {
    name: '신한 카드',
    color: 'lightPink',
  },
  KB: {
    name: '국민 카드',
    color: 'red',
  },
  WOORI: {
    name: '우리 카드',
    color: 'lightBlue',
  },

  HANA: {
    name: '하나 카드',
    color: 'orange',
  },
  IBK: {
    name: '기업 카드',
    color: 'blue',
  },
  SAMSUNG: {
    name: '삼성 카드',
    color: 'blue',
  },
  CITI: {
    name: '씨티 카드',
    color: 'green',
  },
} as const;

export const CARD_COMPANIES_ARRAY = typedKeysOf(CARD_COMPANIES);
