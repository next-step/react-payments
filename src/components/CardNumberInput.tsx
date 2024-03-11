import React from 'react'
import { InputStyle } from './DateInput.tsx'
import styled from 'styled-components'

interface CardNumberInput {
  type: 'text' | 'password'
  maxLength: number
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const Slash = styled.span`
  color: #94dacd;
  font-weight: 700;
`

const CardNumberInput = ({
  divider,
  inputs,
}: {
  divider: string
  inputs: CardNumberInput[]
}) => {
  return (
    <div className="input-box">
      {inputs.map((input, index) => {
        return (
          <>
            <InputStyle key={index}>
              <input
                type={input.type}
                value={input.value}
                onChange={input.onChange}
                maxLength={input.maxLength}
              />
            </InputStyle>
            {index + 1 < inputs.length &&
              input.value.length === input.maxLength && (
                <Slash>{divider}</Slash>
              )}
          </>
        )
      })}
    </div>
  )
}
export default CardNumberInput
