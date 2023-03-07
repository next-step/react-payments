import { getConvertedStringsByStars } from '@/utils'

import { CardNumbers } from './types'

interface CardExpiredDateProps {
  expiredMonth: string
  expiredYear: string
}

export const getCardNumbersDisplay = ({ first, second, third, fourth }: CardNumbers): string =>
  `${first} - ${second} - ${getConvertedStringsByStars(third)} - ${getConvertedStringsByStars(fourth)}`

export const getCardExpiredDateDisplay = ({ expiredMonth, expiredYear }: CardExpiredDateProps) =>
  `${expiredMonth} / ${expiredYear}`
