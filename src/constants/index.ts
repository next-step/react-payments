const LIMIT_INPUT_LENGTH = {
  CVC: 3,
  CARD_NUMBER: {
    MIN: 0,
    MAX: 4,
  },
  EXPIRATION: 2,
  PASSWORD: 1,
  OWNER_NAME: 30,
};

const ROUTES = {
  HOME: '/',
  ADD: '/add',
  COMPLETE: '/complete',
} as const;

export { LIMIT_INPUT_LENGTH, ROUTES };
