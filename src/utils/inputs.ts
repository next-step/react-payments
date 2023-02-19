const INPUTS = [
  {
    key: 'cardNumber',
    pattern: (value: string) =>
      value
        .replace(/\W/gi, '')
        .replace(/(.{4})/g, '$1 - ')
        .trim(),
    label: '카드번호',
    type: 'text',
    maxLength: 16,
    isRequire: true,
    width: '100%',
    placeholder: '',
  },
  {
    key: 'expireDate',
    pattern: (value: string) =>
      value
        .replace(/\D/gi, '')
        .replace(/(.{2})/g, '$1/')
        .trim(),
    label: '만료일',
    type: 'text',
    maxLength: 4,
    isRequire: true,
    width: '35%',
    placeholder: 'MM/YY',
  },
  {
    key: 'cardOwner',
    pattern: (value: string) => value,
    label: '카드소유자 이름(선택)',
    type: 'text',
    maxLength: 30,
    isRequire: false,
    width: '100%',
    placeholder: '카드에 표시된 이름과 동일하게 입력하세요',
  },
  {
    key: 'pinCode',
    pattern: (value: string) => value.replace(/\D/, ''),
    label: '보안코드(CVC/CVV)',
    type: 'password',
    maxLength: 3,
    width: '25%',
    isRequire: true,
    placeholder: '',
  },
  {
    key: 'password',
    pattern: (value: string) => value.replace(/\D/, ''),
    label: '카드비밀번호',
    type: 'password',
    maxLength: 2,
    width: '15%',
    isRequire: true,
    placeholder: '',
  },
] as const

export default INPUTS
