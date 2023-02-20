import { ERROR_CODES } from 'constants/error'

export type ErrorCodeType = (typeof ERROR_CODES)[keyof typeof ERROR_CODES]
