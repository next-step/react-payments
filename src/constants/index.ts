import { CardCompany, CompanyColorClassName, CompanyColorHexCode } from '@/types';

export const LIMIT_INPUT_LENGTH = {
  CVC: 3,
  CARD_NUMBER: {
    MIN: 0,
    MAX: 4,
  },
  EXPIRATION: 2,
  PASSWORD: 1,
  OWNER_NAME: 30,
  NICKNAME: 10,
};

export const ROUTES = {
  HOME: '/',
  ADD: '/add',
  COMPLETE: '/complete/:id',
  NOT_FOUND: '*',
};

export const REGEX = {
  // 임시적 분류 -> HTML PATTERN에는 문자열만 허용
  HTML_PATTERN: {
    PASSWORD: '[0-9]*',
  },
  NOT_NUMBER: /\D+/g,
};

export const HEADER_TITLE = {
  ADD_CARD: '카드 추가',
  CARD_LIST: '보유카드',
  COMPLETE: '카드등록이 완료되었습니다.',
  EDIT_CARD: '카드 별칭을 수정해주세요.',
};

const CARD_COMPANY_LIST_SET: [string, string, CompanyColorHexCode, string][] = [
  ['Number1', 'amber', '#fbbf24', '111111111'],
  ['Number2', 'lime', '#a3e635', '222222222'],
  ['Number3', 'green', '#4ade80', '333333333'],
  ['Number4', 'cyan', '#818cf8', '444444444'],
  ['Number5', 'indigo', '#f472b6', '555555555'],
  ['Number6', 'pink', '#fb7185', '666666666'],
  ['Number7', 'rose', '#60a5fa', '777777777'],
  ['Number8', 'red', '#f87171', '888888888'],
];

export const CARD_COMPANY_LIST: CardCompany[] = CARD_COMPANY_LIST_SET.map(cardCompany => ({
  companyName: cardCompany[0],
  companyColorClassName: `bg-${cardCompany[1]}-400` as CompanyColorClassName,
  companyColorHexCode: cardCompany[2],
  companyIdentification: cardCompany[3],
}));
