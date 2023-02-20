import { CARD_INPUT_VARIABLES } from "../variables";

const { MAX_MONTH, OWNER_NAME_MAX_LENGTH } = CARD_INPUT_VARIABLES;

export const INPUT_ONLY_NUMBER = "숫자만 입력해 주세요.";

export const OVER_MAX_MONTH = `월은 최대 ${MAX_MONTH}까지만 입력 가능 합니다.`;

export const OVER_CARD_OWNER_NAME_MAX_LENGTH = `이름은 최대 ${OWNER_NAME_MAX_LENGTH}까지만 입력 가능 합니다.`;

export const CARD_VALIDATION_ERROR_MESSAGES = {
  ONLY_NUMBER: "숫자만 입력해 주세요.",
};
