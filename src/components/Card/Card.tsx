const CardTypeAccordingToStartsWith = {
  1: '포코',
  2: '준',
  3: '공원',
  4: '브랜',
  5: '로이드',
  6: '도비',
  7: '콜린',
  8: '썬',
} as const

type CardType =
  typeof CardTypeAccordingToStartsWith[keyof typeof CardTypeAccordingToStartsWith]

export interface CardProps {
  type: CardType | ''
  number1: string
  number2: string
  number3: string
  number4: string
  expireAtYear: string
  expireAtMonth: string
  owner: string
  cvc: string
  password: string
}
