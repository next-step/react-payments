import { RefObject } from 'react'

export type HandleExpiredDateProps = {
  value: string
  yymm: 'YY' | 'MM'
}
export interface CardExpiredDateProps {
  expiredYear: string
  expiredMonth: string
  handleChange({ value, yymm }: HandleExpiredDateProps): void
}

export interface HandleChangeProps {
  value: string
  order: 'first' | 'second' | 'third' | 'fourth'
}
export interface CardNumbersProps {
  numbers: {
    first: string
    second: string
    third: string
    fourth: string
  }
  handleChange({ value, order }: HandleChangeProps): void
}

export interface CardPasswordProps {
  passwordRef: {
    first: RefObject<HTMLInputElement>
    second: RefObject<HTMLInputElement>
  }
}
