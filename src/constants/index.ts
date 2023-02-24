export const LIMIT_INPUT_LENGTH = {
  CVC: 3,
  CARD_NUMBER: {
    MIN: 0,
    MAX: 4,
  },
  EXPIRATION: 2,
  PASSWORD: 1,
  OWNER_NAME: 30,
};

export const ROUTES = {
  HOME: '/',
  ADD: '/add/:id',
  COMPLETE: '/complete/:id',
  NOT_FOUND: '*',
} as const;

export const REGEX = {
  NOT_NUMBER: /\D+/g,
};
