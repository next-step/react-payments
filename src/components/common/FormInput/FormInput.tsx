import { ElementRef, ReactNode, forwardRef } from 'react'
import { Input, InputProps } from '../Input/Input'
import { css } from '@emotion/css'

type FormInputProps = InputProps & {
  label: Exclude<ReactNode, null | undefined>
  width?: string
}

export const FormInput = forwardRef<ElementRef<'input'>, FormInputProps>(
  ({ className = '', id, label, width = '100%', ...props }, forwardedRef) => {
    const inputContainerStyle = css`
      width: ${width};
    `

    return (
      <div className={`input-container ${inputContainerStyle} ${className}`}>
        <label htmlFor={id} className="input-title">
          {label}
        </label>
        <Input id={id} ref={forwardedRef} {...props} />
      </div>
    )
  }
)
FormInput.displayName = 'FormInput'
