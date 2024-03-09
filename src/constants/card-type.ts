import { vars } from '@/styles'

export interface CardType {
  id: number
  name: string
  color: keyof typeof vars.color
}
export const CARD_TYPE: Record<string, CardType> = {
  POCO: {
    id: 1,
    name: '포코 카드',
    color: 'gray500',
  },
  JUNE: {
    id: 2,
    name: '준 카드',
    color: 'blue',
  },
  HYUNSEOK: {
    id: 3,
    name: '현석 카드',
    color: 'green',
  },
  YOONHO: {
    id: 4,
    name: '윤호 카드',
    color: 'pink',
  },
  HWANOH: {
    id: 5,
    name: '환오 카드',
    color: 'aqua',
  },
  TAEEUN: {
    id: 6,
    name: '태은 카드',
    color: 'blueberry',
  },
  JUNNIL: {
    id: 7,
    name: '준일 카드',
    color: 'orange',
  },
  EUNKYU: {
    id: 8,
    name: '은규 카드',
    color: 'yellow',
  },
} as const
