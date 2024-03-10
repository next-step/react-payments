import { ChangeEvent, useRef, useState } from 'react'
import { css } from '@emotion/css'
import { CARD_DATE } from '@/constants/app'
import { MaxLengthNumberInput } from '../MaxLengthNumberInput'

type CardDateValues = {
  'card_date-month': string
  'card_date-year': string
}

type CardDateInputProps = {
  className?: string
  width?: string
  value?: CardDateValues
  onChange?: (value: CardDateValues) => void
}

export const CardDateInput = ({
  className = '',
  width = '50%',
  value: controlledValue = {
    'card_date-month': '',
    'card_date-year': ''
  },
  onChange
}: CardDateInputProps) => {
  const inputContainerStyle = css`
    width: ${width};
  `

  const [uncontrolledValue, setUncontrolledValue] = useState(controlledValue)
  const monthInputRef = useRef<HTMLInputElement>(null)
  const yearInputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    const inputName = name as keyof CardDateValues
    const updatedValue = {
      ...uncontrolledValue,
      [inputName]: value
    }

    onChange?.(updatedValue)
    setUncontrolledValue(updatedValue)

    const isMaxlength = value.length === CARD_DATE.MAX_LENGTH
    if (isMaxlength && name === 'card_date-month') {
      yearInputRef.current?.focus()
    }
  }

  return (
    <div className={`input-box ${inputContainerStyle} ${className}`}>
      <MaxLengthNumberInput
        name="card_date-month"
        className="input-basic"
        placeholder="MM"
        ref={monthInputRef}
        value={uncontrolledValue['card_date-month']}
        onChange={handleChange}
        maxLength={CARD_DATE.MAX_LENGTH}
      />
      <MaxLengthNumberInput
        name="card_date-year"
        className="input-basic"
        placeholder="YY"
        ref={yearInputRef}
        value={uncontrolledValue['card_date-year']}
        onChange={handleChange}
        maxLength={CARD_DATE.MAX_LENGTH}
      />
    </div>
  )
}
CardDateInput.displayName = 'CardDateInput'
