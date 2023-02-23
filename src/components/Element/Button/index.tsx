import { ButtonHTMLAttributes } from 'react'

const Button = ({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...props}>{children}</button>
}

export default Button
