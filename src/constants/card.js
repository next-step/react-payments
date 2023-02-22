export const CARD_NUMBER = {
  MAX_LENGTH: 4,
  MASKING_TEXT: "*",
};

export const CARD_EXPIRATION = {
  MAX_LENGTH: 2,
  PLACEHOLDER: {
    MONTH: "MM",
    YEAR: "YY",
  },
};

export const CARD_SECURITY_CODE = {
  MAX_LENGTH: 3,
};

export const CARD_PASSWORD = {
  MAX_LENGTH: 1,
};

export const CARD_OWNER_NAME = {
  MAX_LENGTH: 30,
  PLACEHOLDER: "카드에 표시된 이름과 동일하게 입력하세요.",
};

export const MESSAGE = {
  ALERT_NUMBER: "숫자만 입력 가능합니다",
  ALERT_EXP_MONTH: "만료 월은 1~12 사이 값만 입력 가능합니다.",
  ALERT_EXP_YEAR: "만료 일은 1~31 사이 값만 입력 가능합니다."
};