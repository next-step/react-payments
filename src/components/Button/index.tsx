import './index.css'

import { ComponentPropsWithoutRef, forwardRef } from 'react'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <button className={['button_wrapper', className].join(' ')} {...rest} ref={ref}>
        {children}
      </button>
    )
  }
)
