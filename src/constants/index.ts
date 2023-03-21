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
    ONLY_NUMBER: '[0-9]*',
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

enum Index {
  companyName,
  classNameColor,
  hexColor,
  companyIdentificationNumber,
}

export const CARD_COMPANY_LIST: CardCompany[] = CARD_COMPANY_LIST_SET.map(cardCompany => ({
  companyName: cardCompany[Index.companyName],
  companyColorClassName: `bg-${cardCompany[Index.classNameColor]}-400` as CompanyColorClassName,
  companyColorHexCode: cardCompany[Index.hexColor],
  companyIdentification: cardCompany[Index.companyIdentificationNumber],
}));

export const VALIDATOR_MESSAGE = {
  CARD_NUMBER: '카드숫자는 16자리가 되어야 합니다.',
  PASSWORD: '비밀번호를 입력해주세요.',
  CVC: 'CVC는 3자리를 입력해 주세요',
  EXPIRATION: {
    LENGTH: 'Month, Year는 2자리를 입력해 주세요.',
    MONTH_RANGE: 'Month는 0보다 크고, 13보다 작아야 합니다.',
  },
  CARD_COMPANY: '카드를 클릭해 카드회사를 선택해주세요.',
};
