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
} as const;

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
