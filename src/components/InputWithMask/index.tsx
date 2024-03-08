import './index.css'

import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { Input } from '../Input'
import { applyMask, getOnlyNumbers } from './index.utils'

interface InputWithMaskProps extends ComponentPropsWithoutRef<'input'> {
  /** 입력 받을 숫자를 0으로 작성해주세요. */
  mask: string
}

export const InputWithMask = forwardRef<HTMLInputElement, InputWithMaskProps>(
  ({ mask, onChange, ...props }, ref) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      const numbers = getOnlyNumbers(newValue)

      const maskedValue = applyMask(mask, numbers)

      e.target.value = maskedValue

      onChange?.(e)
    }

    return <Input onChange={handleChange} ref={ref} {...props} />
  }
)
