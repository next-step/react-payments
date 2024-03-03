import './index.css'

import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { Input } from '../Input'
import { applyMask, getOnlyNumbers } from './index.utils'

interface InputWithMaskProps extends Omit<ComponentPropsWithoutRef<'input'>, 'value' | 'onChange'> {
  /** 입력 받을 숫자를 0으로 작성해주세요. */
  mask: string
  onChange?: (v: string) => void
}

export const InputWithMask = forwardRef<HTMLInputElement, InputWithMaskProps>((props, ref) => {
  const [value, setValue] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    const numbers = getOnlyNumbers(newValue)

    const maskedValue = applyMask(props.mask, numbers)

    setValue(maskedValue)

    props.onChange?.(maskedValue)
  }

  return <Input placeholder={props.placeholder} value={value} onChange={handleChange} ref={ref} />
})
