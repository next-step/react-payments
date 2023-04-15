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

export type CardNumbersOrder = 'first' | 'second' | 'third' | 'fourth'

export interface HandleNumbersChangeProps {
  value: string
  order: CardNumbersOrder
}

export interface CardNumbersProps {
  numbersRef: {
    first: RefObject<HTMLInputElement>
    second: RefObject<HTMLInputElement>
    third: RefObject<HTMLInputElement>
    fourth: RefObject<HTMLInputElement>
  }
  nextRef?: RefObject<HTMLInputElement>
  onFocusChange?: (order: CardNumbersOrder) => void
  handleChange({ value, order }: HandleNumbersChangeProps): void
}

export type CardPasswordOrder = 'first' | 'second'

export interface HandlePasswordChangeProps {
  value: string
  order: CardPasswordOrder
}
export interface CardPasswordProps {
  passwordRef: {
    first: RefObject<HTMLInputElement>
    second: RefObject<HTMLInputElement>
  }
  onFocusChange?: (order: CardPasswordOrder) => void
  handleChange({ value, order }: HandlePasswordChangeProps): void
}

export interface UseCardPasswordProps {
  handleChange({ value, order }: HandlePasswordChangeProps): void
}

export interface HandleSecurityCodeChangeProps {
  value: string
}

export interface CardSecurityCodeProps {
  securityCodeRef: RefObject<HTMLInputElement>
  nextRef?: RefObject<HTMLInputElement>
  handleChange: ({ value }: HandleSecurityCodeChangeProps) => void
}
