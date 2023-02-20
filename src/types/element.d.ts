import { ForwardedRef } from 'react'

export interface InputProps {
  type?: string
  className?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
  id: string
  placeholder?: string
  inputRef?: ForwardedRef<HTMLInputElement>
}
