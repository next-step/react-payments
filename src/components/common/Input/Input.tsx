import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export type InputProps = ComponentPropsWithoutRef<'input'> & {
  theme?: 'basic' | 'underline'
}

export const Input = forwardRef<ElementRef<'input'>, InputProps>(
  ({ className = '', theme = 'basic', ...props }, forwardedRef) => {
    return (
      <input
        type="text"
        ref={forwardedRef}
        className={`input-${theme} ${className}`}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'
