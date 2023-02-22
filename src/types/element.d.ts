import { ForwardedRef } from 'react'

export interface InputProps {
  inputRef?: ForwardedRef<HTMLInputElement>
}

export interface ButtonProps {
  value: string
}
