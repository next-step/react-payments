const ERROR_CODES = {
  FORM01: 'FORM_01',
  FORM02: 'FORM_02',
  SERVER01: 'SERVER_01',
} as const

const ERROR_CODES_INFO = {
  FORM_01: {
    code: 'FORM_01',
    message: '형식이 올바르지 않습니다(숫자만 허용)',
  },
  FORM_02: {
    code: 'FORM_02',
    message: '글자수가 초과했습니다',
  },
  SERVER_01: {
    code: '500',
    message: '',
  },
} as const

export { ERROR_CODES, ERROR_CODES_INFO }
