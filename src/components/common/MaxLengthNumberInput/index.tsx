import { ChangeEvent, ElementRef, forwardRef, useState } from 'react'
import { Input, InputProps } from '../Input'
import { css } from '@emotion/css'
import { REGEXP } from '@/constants'

type MaxLengthNumberInputProps = {
  type?: 'text' | 'password'
  value?: string
  maxLength: number
} & InputProps

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
    const isControlled = typeof onChange !== 'undefined'

    const [uncontrolledValue, setUncontrolledValue] = useState(controlledValue)
    const inputValue = isControlled ? controlledValue : uncontrolledValue

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      const onlyNumber = value.replace(REGEXP.NOT_NUMBER, '')
      e.target.value = onlyNumber

      onChange?.(e)
      setUncontrolledValue(onlyNumber)
    }

    return (
      <Input
        type={type}
        ref={forwardRef}
        className={css([
          'input-basic',
          css`
            width: ${width};
          `,
          className
        ])}
        value={inputValue?.substring(0, maxLength)}
        onChange={handleChange}
        maxLength={maxLength}
        {...props}
      />
    )
  }
)
MaxLengthNumberInput.displayName = 'MaxLengthNumberInput'
