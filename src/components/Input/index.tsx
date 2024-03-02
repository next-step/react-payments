import './index.css'

import { ComponentPropsWithoutRef, forwardRef } from 'react'

interface InputProps extends ComponentPropsWithoutRef<'input'> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return <input className={['input-basic', className].join(' ')} ref={ref} {...props} />
})
