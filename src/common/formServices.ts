import { CardData } from './constants'

const ValidityKeys: (keyof ValidityState)[] = [
  'badInput',
  'patternMismatch',
  'rangeOverflow',
  'rangeUnderflow',
  'stepMismatch',
  'tooLong',
  'tooShort',
  'typeMismatch',
  'valueMissing',
]

const PatternInvalidMessages: { [key: string]: string } = {
  cardNumber1: '0 - 9 사이의 숫자 4개를 입력하세요.',
  cardNumber2: '0 - 9 사이의 숫자 4개를 입력하세요.',
  cardNumber3: '0 - 9 사이의 숫자 4개를 입력하세요.',
  cardNumber4: '0 - 9 사이의 숫자 4개를 입력하세요.',
  expiredMonth: '01 - 12 사이의 두자리 숫자를 입력하세요.',
  expiredYear: '22 이상 99 이하의 두자리 숫자를 입력하세요.',
  cvc: '0 - 9 사이의 숫자 3개를 입력하세요.',
  pw1: '0 - 9 사이의 숫자를 입력하세요.',
  pw2: '0 - 9 사이의 숫자를 입력하세요.',
}

export const getCustomValidity = (elem: HTMLInputElement) => {
  const { validity, name } = elem
  const invalidKey = ValidityKeys.find(key => validity[key])
  if (!invalidKey) return ''
  return PatternInvalidMessages[name] || ''
}

type DataMap = Map<string, string | number>

export const convertFormData = (formData: DataMap): CardData | null => {
  if ([...formData.values()].join('').length === 0) return null
  const { cardName, cardNumber1, cardNumber2, cardNumber3, cardNumber4, expiredMonth, expiredYear, userName, alias } = [
    ...formData,
  ].reduce<{ [key: string]: any }>((r, [k, v]) => {
    r[k] = v
    return r
  }, {})
  const cardNumber: string[] = []
  ;[cardNumber1, cardNumber2].forEach(c => {
    if (c) cardNumber.push(c)
  })
  ;[cardNumber3, cardNumber4].forEach(c => {
    if (c) cardNumber.push(c.replace(/./g, '*'))
  })
  const expired: string[] = []
  ;[expiredMonth, expiredYear].forEach(e => {
    if (e) expired.push(e)
  })

  return {
    cardName,
    cardNumber: cardNumber.join(' - '),
    expired: expired.join(' / '),
    userName,
    alias,
  }
}
