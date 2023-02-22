import { InputHTMLAttributes } from 'react'
import { InputProps } from '../../../types/element.d'

const Input = ({ ...props }: InputHTMLAttributes<HTMLInputElement>, { inputRef }: InputProps) => {
  return <input {...props} ref={inputRef} />
}

export default Input
