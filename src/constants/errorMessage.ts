export const ERROR_MESSAGE = {
  INPUT: {
    COMMON: {
      INVALID_NAME: (name: string) =>
        `input element에 지정되지 않은 name이 주입되었습니다. [injected name with '${name}']`,
      INVALID_VALUE: '유효하지 않은 값이 입력되었습니다.',
    },
    EXPIRATION: {
      INVALID_MONTH: '유효하지 않은 월이 입력되었습니다.',
      INVALID_YEAR: '유효하지 않은 년이 입력되었습니다.',
    },
  },

  PROVIDER: {
    INVALID_SCOPE: '유효한 Provider 내부에서만 훅을 사용할 수 있습니다.',
  },
};
