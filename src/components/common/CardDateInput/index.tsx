import { ChangeEvent } from 'react'
import { css } from '@emotion/css'
import { CARD_DATE } from '@/constants'
import { MaxLengthNumberInput } from '../MaxLengthNumberInput'
import { useAutoFocus } from '@/hooks'

type CardDateInputProps = {
  name: string
  className?: string
  width?: string
  values: string[]
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const CardDateInput = ({
  name,
  className = '',
  width = '50%',
  values = [],
  onChange
}: CardDateInputProps) => {
  const { inputRefs, focusNextInput } = useAutoFocus({
    inputCount: CARD_DATE.INPUT_COUNT
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const [, index] = e.target.name.split('.')

    onChange?.(e)
    focusNextInput(Number(index), e)
  }

  return (
    <div
      className={`input-box ${css`
        width: ${width};
      `} ${className}`}>
      <MaxLengthNumberInput
        name={`${name}.0`}
        className="input-basic"
        placeholder="MM"
        ref={inputRefs[0]}
        value={values[0]}
        onChange={handleChange}
        minLength={CARD_DATE.MAX_LENGTH}
        maxLength={CARD_DATE.MAX_LENGTH}
        pattern={`.{${CARD_DATE.MAX_LENGTH},${CARD_DATE.MAX_LENGTH}}`}
        required
      />
      <MaxLengthNumberInput
        name={`${name}.1`}
        className="input-basic"
        placeholder="YY"
        ref={inputRefs[1]}
        value={values[1]}
        onChange={handleChange}
        minLength={CARD_DATE.MAX_LENGTH}
        maxLength={CARD_DATE.MAX_LENGTH}
        pattern={`.{${CARD_DATE.MAX_LENGTH},${CARD_DATE.MAX_LENGTH}}`}
        required
      />
    </div>
  )
}
CardDateInput.displayName = 'CardDateInput'
