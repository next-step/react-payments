import { ChangeEvent } from 'react'
import { CARD_NUMBER } from '@/constants'
import { MaxLengthNumberInput } from '../MaxLengthNumberInput'
import { useAutoFocus } from '@/hooks'

type CardNumberInputProps = {
  name: string
  className?: string
  values: string[]
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const CardNumberInput = ({
  name,
  className = '',
  values = [],
  onChange
}: CardNumberInputProps) => {
  const { inputRefs, focusNextInput } = useAutoFocus({
    inputCount: CARD_NUMBER.INPUT_COUNT
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const [, index] = e.target.name.split('.')

    onChange?.(e)
    focusNextInput(Number(index), e)
  }

  return (
    <div className={`input-box ${className}`}>
      {values.map((value, index) => (
        <MaxLengthNumberInput
          key={`${name}-${index}`}
          name={`${name}.${index}`}
          className="input-basic"
          type={index < CARD_NUMBER.VISIBLE_COUNT ? 'text' : 'password'}
          ref={inputRefs[index]}
          value={value}
          onChange={handleChange}
          maxLength={CARD_NUMBER.MAX_LENGTH}
          minLength={CARD_NUMBER.MAX_LENGTH}
          pattern={`.{${CARD_NUMBER.MAX_LENGTH},${CARD_NUMBER.MAX_LENGTH}}`}
          required
        />
      ))}
    </div>
  )
}
CardNumberInput.displayName = 'CardNumberInput'
