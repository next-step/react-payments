import { css } from '@emotion/css'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export type InputProps = ComponentPropsWithoutRef<'input'> & {
  theme?: 'basic' | 'underline'
  width?: string
}

export const Input = forwardRef<ElementRef<'input'>, InputProps>(
  (
    { className = '', theme = 'basic', width = '100%', ...props },
    forwardedRef
  ) => {
    const inputStyle = css`
      width: ${width};
    `

    return (
      <input
        type="text"
        ref={forwardedRef}
        className={` ${inputStyle} input-${theme} ${className}`}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'
