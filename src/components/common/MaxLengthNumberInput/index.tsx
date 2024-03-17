import { ChangeEvent, ElementRef, forwardRef, useState } from 'react'
import { Input, InputProps } from '../Input'
import { css } from '@emotion/css'
import { REGEXP } from '@/constants'

type MaxLengthNumberInputProps = {
  className?: string
  type?: 'text' | 'password'
  width?: string
  name?: string
  id?: string
  placeholder?: string
  value?: string
  onChange?: InputProps['onChange']
  maxLength: number
}

export const MaxLengthNumberInput = forwardRef<
  ElementRef<'input'>,
  MaxLengthNumberInputProps
>(
  (
    {
      className = '',
      width = '100%',
      value: controlledValue = '',
      onChange,
      type = 'text',
      maxLength,
      ...props
    },
    forwardRef
  ) => {
    const [uncontrolledValue, setUncontrolledValue] = useState(controlledValue)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      const onlyNumber = value.replace(REGEXP.NOT_NUMBER, '')

      onChange?.(e)
      setUncontrolledValue(onlyNumber)
    }

    const containerStyle = css`
      width: ${width};
    `

    return (
      <Input
        type={type}
        ref={forwardRef}
        className={`input-basic ${containerStyle} ${className}`}
        value={uncontrolledValue?.substring(0, maxLength)}
        onChange={handleChange}
        maxLength={maxLength}
        {...props}
      />
    )
  }
)
MaxLengthNumberInput.displayName = 'MaxLengthNumberInput'
