import { CARD_INPUT_VARIABLES } from "../variables";

const { MAX_MONTH, OWNER_NAME_MAX_LENGTH, MIN_MONTH } = CARD_INPUT_VARIABLES;

export const CARD_VALIDATION_ERROR_MESSAGES = {
  ONLY_NUMBER: "숫자만 입력해 주세요.",
  MONTH_RANGE: `월은 ${MIN_MONTH} ~ ${MAX_MONTH} 사이의 값만 입력할 수 있습니다.`,
  INVALID_OWNER_NAME_LENGTH: `이름은 최대 ${OWNER_NAME_MAX_LENGTH}까지만 입력 가능 합니다.`,
};
