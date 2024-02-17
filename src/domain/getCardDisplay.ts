import { getConvertedStringsByStars } from '@/utils'

import { CardNumbers } from './types'

interface CardExpiredDateProps {
  expiredMonth: string
  expiredYear: string
}

export const getCardNumbersDisplay = ({ first, second, third, fourth }: CardNumbers): string => {
  return `${first} ${second && '-'} ${second} ${third && '-'} ${getConvertedStringsByStars(third)} ${
    fourth && '-'
  } ${getConvertedStringsByStars(fourth)}`
}

export const getCardExpiredDateDisplay = ({ expiredMonth, expiredYear }: CardExpiredDateProps) =>
  `${expiredMonth} ${expiredYear && '/'} ${expiredYear}`
