import { ChangeEvent, MutableRefObject } from 'react'
import { CARD_PASSWORD } from '@/constants'
import { MaxLengthNumberInput } from '../MaxLengthNumberInput'
import { css } from '@emotion/css'
import { useAutoFocus } from '@/hooks'

type CardPasswordInputProps = {
  name: string
  className?: string
  inputWidth?: string
  gap?: number
  values: string[]
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const CardPasswordInput = ({
  name,
  className = '',
  inputWidth = '15%',
  gap = 10,
  values = [],
  onChange
}: CardPasswordInputProps) => {
  const { inputRefs, focusNextInput } = useAutoFocus({
    inputCount: CARD_PASSWORD.INPUT_COUNT
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const [, index] = e.target.name.split('.')

    onChange?.(e)
    focusNextInput(Number(index), e)
  }

  return (
    <div
      className={`${css`
        display: flex;
        gap: ${gap}px;
      `} ${className}`}>
      {values.map((value, index) => (
        <MaxLengthNumberInput
          key={`${name}-${index}`}
          name={`${name}.${index}`}
          className="input-basic"
          type="password"
          width={inputWidth}
          ref={inputRefs[index] as MutableRefObject<HTMLInputElement>}
          value={value}
          onChange={handleChange}
          maxLength={CARD_PASSWORD.MAX_LENGTH}
          required
        />
      ))}
    </div>
  )
}
CardPasswordInput.displayName = 'CardPasswordInput'
