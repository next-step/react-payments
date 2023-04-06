export const CARD_INPUT = {
  CARD_NAME: {
    MAX_LENGTH: 5,
  },
  CARD_NUMBER: {
    EACH_LENGTH: 4,
  },
  EXPIRED: {
    MONTH: {
      PARSED_MIN_VALUE: 1,
      PARSED_MAX_VALUE: 12,
      LENGTH: 2,
    },
    YEAR: {
      LENGTH: 2,
    },
  },
  OWNER: {
    MIN_LENGTH: 1,
    MAX_LENGTH: 30,
  },
  CVC: {
    LENGTH: 3,
  },
  PIN: {
    LENGTH: 4,
    EDITABLE_LENGTH: 2,
  },
};
