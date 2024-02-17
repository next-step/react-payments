import { CardBackgoundColor, CardColor } from '@/domain'

interface CardType {
  name: string
  color: CardColor
  bg: CardBackgoundColor
}

export const CARD_TYPES: CardType[] = [
  {
    name: '하얀카드',
    color: '#000000',
    bg: '#F5F5F5',
  },
  {
    name: '파란카드',
    color: '#ffffff',
    bg: '#162bb1',
  },
  {
    name: '빨간카드',
    color: '#ffffff',
    bg: '#932929',
  },
  {
    name: '초록카드',
    color: '#000000',
    bg: '#54cb25',
  },
  {
    name: '에메랄드카드',
    color: '#ffffff',
    bg: '#20d0ad',
  },
  {
    name: '분홍카드',
    color: '#ffffff',
    bg: '#d320c7',
  },
  {
    name: '보라카드',
    color: '#ffffff',
    bg: '#7c1ddb',
  },
  {
    name: '주황카드',
    color: '#ffffff',
    bg: '#e1860f',
  },
]
