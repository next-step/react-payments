import { ChangeEvent, MutableRefObject, useRef, useState } from 'react'
import { css } from '@emotion/css'
import { CARD_NUMBER } from '@/constants'
import { MaxLengthNumberInput } from '../MaxLengthNumberInput'

type CardNumberValues = {
  'card_number-1': string
  'card_number-2': string
  'card_number-3': string
  'card_number-4': string
}

type CardNumberInputProps = {
  className?: string
  width?: string
  value?: CardNumberValues
  onChange?: (value: CardNumberValues) => void
}

export const CardNumberInput = ({
  className = '',
  width,
  value: controlledValue = {
    'card_number-1': '',
    'card_number-2': '',
    'card_number-3': '',
    'card_number-4': ''
  },
  onChange
}: CardNumberInputProps) => {
  const cardNumberInputContainerStyle = css`
    width: ${width};
  `

  const [uncontrolledValue, setUncontrolledValue] = useState(controlledValue)
  const inputRefs = Array.from(
    { length: CARD_NUMBER.INPUT_COUNT },
    useRef<HTMLInputElement>
  )

  const handleChange =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target

      const inputName = name as keyof CardNumberValues
      const updatedValue = {
        ...uncontrolledValue,
        [inputName]: value
      }

      onChange?.(updatedValue)
      setUncontrolledValue(updatedValue)

      const isMaxlength = value.length === CARD_NUMBER.MAX_LENGTH
      const isFocusable = index < CARD_NUMBER.LAST_INPUT_INDEX
      if (isMaxlength && isFocusable) {
        inputRefs[index + 1].current?.focus()
      }
    }

  return (
    <div className={`input-box ${cardNumberInputContainerStyle} ${className}`}>
      {Object.keys(uncontrolledValue).map((key, index) => {
        const inputName = key as keyof CardNumberValues

        return (
          <MaxLengthNumberInput
            key={inputName}
            name={inputName}
            className="input-basic"
            type={index < CARD_NUMBER.VISIBLE_COUNT ? 'text' : 'password'}
            ref={inputRefs[index] as MutableRefObject<HTMLInputElement>}
            value={uncontrolledValue[inputName]}
            onChange={handleChange(index)}
            maxLength={CARD_NUMBER.MAX_LENGTH}
          />
        )
      })}
    </div>
  )
}
CardNumberInput.displayName = 'CardNumberInput'
