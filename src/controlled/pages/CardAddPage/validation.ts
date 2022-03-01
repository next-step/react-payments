import { EXPIRED_DATE, PASSWORD, SERIAL_NUMS } from './constants'

interface FormValues {
  serialNums: typeof SERIAL_NUMS
  expiredDate: typeof EXPIRED_DATE
  ownerName: string
  cvc: string
  password: typeof PASSWORD
}

export const ERRORS = {
  serialNumsError: '',
  expiredDateError: '',
  ownerNameError: '',
  cvcError: '',
  passwordError: '',
}

//prettier-ignore
export const validateFormValues = ({ serialNums, expiredDate, ownerName, cvc, password }: FormValues) => {
  const errors = {} as typeof ERRORS
  Object.values(serialNums).forEach((num) => { if (!/^[0-9]{4}$/.test(num)) errors.serialNumsError = '카드 네자리 모두 입력해주세요'})
  Object.values(expiredDate).forEach((date) => { if (!/^[0-9]{2}$/.test(date)) errors.expiredDateError = '만료일 두자리 모두 입력해주세요'})
  if (!/^[ㄱ-ㅎ|가-힣|a-z|A-Z]{1,30}$/.test(ownerName)) errors.ownerNameError = '올바른 이름을 입력해주세요'
  if (!/^[0-9]{3}$/.test(cvc)) errors.cvcError = '올바른 cvc값을 입력주세요.'
  Object.values(password).forEach((pwd) => { if (!/^[0-9]{1}$/.test(pwd)) errors.passwordError = '올바른 비밀번호를 입력해주세요.'})
  return errors
}

export const hasCardFormErrors = (errors: typeof ERRORS) => {
  return Object.values(errors).filter((err) => err !== '').length !== 0
}
