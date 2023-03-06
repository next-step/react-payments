import { RefObject } from 'react'

export type HandleExpiredDateProps = {
  value: string
  yymm: 'YY' | 'MM'
}
export interface CardExpiredDateProps {
  expiredDateRef: {
    first: RefObject<HTMLInputElement>
    second: RefObject<HTMLInputElement>
  }
  handleChange({ value, yymm }: HandleExpiredDateProps): void
}

export interface UseCardExpiredDateProps {
  handleChange({ value, yymm }: HandleExpiredDateProps): void
}

export interface HandleChangeProps {
  value: string
  order: 'first' | 'second' | 'third' | 'fourth'
}
export interface CardNumbersProps {
  handleChange({ value, order }: HandleChangeProps): void
}

export interface CardPasswordProps {
  passwordRef: {
    first: RefObject<HTMLInputElement>
    second: RefObject<HTMLInputElement>
  }
}
