import { ChangeEvent, MutableRefObject, useRef, useState } from 'react'
import { CARD_PASSWORD } from '@/constants/app'
import { MaxLengthNumberInput } from '../MaxLengthNumberInput/MaxLengthNumberInput'
import { css } from '@emotion/css'

type CardPasswordValues = {
  'card_password-1': string
  'card_password-2': string
  'card_password-3': string
  'card_password-4': string
}

type CardPasswordInputProps = {
  className?: string
  inputWidth?: string
  gap?: number
  value?: CardPasswordValues
  onChange?: (value: CardPasswordValues) => void
}

export const CardPasswordInput = ({
  className = '',
  inputWidth = '15%',
  gap = 10,
  value: controlledValue = {
    'card_password-1': '',
    'card_password-2': '',
    'card_password-3': '',
    'card_password-4': ''
  },
  onChange
}: CardPasswordInputProps) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(controlledValue)
  const inputRefs = Array.from(
    { length: CARD_PASSWORD.INPUT_COUNT },
    useRef<HTMLInputElement>
  )

  const handleChange =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target

      const inputName = name as keyof CardPasswordValues
      const updatedValue = {
        ...uncontrolledValue,
        [inputName]: value
      }

      onChange?.(updatedValue)
      setUncontrolledValue(updatedValue)

      const isMaxlength = value.length === CARD_PASSWORD.MAX_LENGTH
      const isFocusable = index < CARD_PASSWORD.LAST_INPUT_INDEX
      if (isMaxlength && isFocusable) {
        inputRefs[index + 1].current?.focus()
      }
    }

  const inputContainerStyle = css`
    display: flex;
    gap: ${gap}px;
  `

  return (
    <div className={`${inputContainerStyle} ${className}`}>
      {Object.keys(uncontrolledValue).map((key, index) => {
        const inputName = key as keyof CardPasswordValues

        return (
          <MaxLengthNumberInput
            key={inputName}
            name={inputName}
            className="input-basic"
            type="password"
            width={inputWidth}
            ref={inputRefs[index] as MutableRefObject<HTMLInputElement>}
            value={uncontrolledValue[inputName]}
            onChange={handleChange(index)}
            maxLength={CARD_PASSWORD.MAX_LENGTH}
          />
        )
      })}
    </div>
  )
}
CardPasswordInput.displayName = 'CardPasswordInput'
