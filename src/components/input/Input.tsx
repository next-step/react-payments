import { ForwardedRef, DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react'

type DetailedInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
interface InputProps extends Omit<DetailedInputProps, 'type'> {
  type?: DetailedInputProps['type']
  addtionalClassName?: string
}

const Input = forwardRef(
  ({ type = 'text', addtionalClassName, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return <input ref={ref} type={type} className={`input-basic ${addtionalClassName}`} {...props} />
  },
)

Input.displayName = 'Input'
export default Input
