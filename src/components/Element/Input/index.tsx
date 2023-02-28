import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react'

const Input = ({ ...props }: InputHTMLAttributes<HTMLInputElement>, ref: ForwardedRef<HTMLInputElement>) => {
  return <input ref={ref} {...props} />
}

export default forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(Input)
