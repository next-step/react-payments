export const SERIAL_NUMS = {
  first: '',
  second: '',
  third: '',
  fourth: '',
}

export const PASSWORD = {
  first: '',
  second: '',
}

export const EXPIRED_DATE = {
  mm: '',
  yy: '',
}

export const USER_NAME_PROPERTYS = Object.freeze({
  labelName: '카드 소유자 이름(선택)',
  id: 'userName',
  name: 'userName',
  type: 'text',
  placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
  maxLength: 30,
  required: true,
})

export const CVC_PROPERTYS = Object.freeze({
  labelName: "보안 코드(CVC/CVV)",
  id: 'cvc',
  name: 'cvc',
  type: 'password',
  maxLength: 3,
  required: true,
})
