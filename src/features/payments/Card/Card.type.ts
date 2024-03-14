import { ComponentPropsWithoutRef, CSSProperties } from 'react'

export interface CardProps extends ComponentPropsWithoutRef<'section'> {
  backgroundColor: CSSProperties['backgroundColor']
}

export interface CardNumberProps {
  creditCardNumber: string
  revealCount: number
}

export interface CardHolderNameProps {
  name: string
}

export interface CardExpirationDateProps {
  expirationDate: string
}

export interface CardCompanyProps {
  name: string
}
