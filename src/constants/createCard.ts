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
    name: '카카오뱅크',
    color: '#FEE500',
  },
  NH: {
    name: '농협',
    color: '#F80046',
  },
  SH: {
    name: '신한',
    color: '#FF6B6E',
  },
  KB: {
    name: '국민',
    color: '#003C71',
  },
  WOORI: {
    name: '우리',
    color: '#0289FF',
  },
  LOTTE: {
    name: '롯데',
    color: '#FB0E16',
  },
  HANA: {
    name: '하나',
    color: '#F37021',
  },
  IBK: {
    name: '기업',
    color: '#1C4FA1',
  },
  SAMSUNG: {
    name: '삼성',
    color: '#1428A0',
  },
  CITI: {
    name: '씨티',
    color: '#0068B4',
  },
};

export const CARD_COMPANIES_ARRAY = typedKeysOf(CARD_COMPANIES);
