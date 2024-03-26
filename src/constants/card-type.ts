import { CardType } from '@/types/card'

export const CARD_TYPE: Record<string, CardType> = {
  POCO: {
    id: 1,
    brandName: '포코 카드',
    color: 'red',
  },
  JUNE: {
    id: 2,
    brandName: '준 카드',
    color: 'blue',
  },
  HYUNSEOK: {
    id: 3,
    brandName: '현석 카드',
    color: 'green',
  },
  YOONHO: {
    id: 4,
    brandName: '윤호 카드',
    color: 'pink',
  },
  HWANOH: {
    id: 5,
    brandName: '환오 카드',
    color: 'aqua',
  },
  TAEEUN: {
    id: 6,
    brandName: '태은 카드',
    color: 'blueberry',
  },
  JUNNIL: {
    id: 7,
    brandName: '준일 카드',
    color: 'orange',
  },
  EUNKYU: {
    id: 8,
    brandName: '은규 카드',
    color: 'yellow',
  },
} as const
