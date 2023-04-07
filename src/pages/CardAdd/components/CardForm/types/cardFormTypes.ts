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

export interface HandleNumbersChangeProps {
  value: string
  order: 'first' | 'second' | 'third' | 'fourth'
}
export interface CardNumbersProps {
  handleChange({ value, order }: HandleNumbersChangeProps): void
}

export interface HandlePasswordChangeProps {
  value: string
  order: 'first' | 'second'
}
export interface CardPasswordProps {
  passwordRef: {
    first: RefObject<HTMLInputElement>
    second: RefObject<HTMLInputElement>
  }
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
  handleChange: ({ value }: HandleSecurityCodeChangeProps) => void
}
