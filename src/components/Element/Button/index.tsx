import { ButtonHTMLAttributes } from 'react'
import { ButtonProps } from '../../../types/element.d'

const Button = ({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>, { value }: ButtonProps) => {
  return <button {...props}>{value}</button>
}

export default Button
