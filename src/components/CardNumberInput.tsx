import React from 'react'
import { InputStyle } from './DateInput.tsx'
import styled from 'styled-components'

interface CardNumberInput {
  type: 'text' | 'password'
  maxLength: number
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
const Slash = styled.span`
  color: #94dacd;
  font-weight: 700;
`

const InputBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.375rem;
  color: #d3d3d3;
  border-radius: 0.25rem;
  background-color: #ecebf1;
`
const CardNumberInput = ({
  divider,
  inputs,
}: {
  divider: string
  inputs: React.ComponentPropsWithoutRef<'input'>[]
}) => {
  return (
    <InputBox>
      {inputs.map((input, index) => {
        return (
          <Wrapper key={index}>
            <InputStyle>
              <input {...input} />
            </InputStyle>
            {index + 1 < inputs.length &&
              String(input.value).length === input.maxLength && (
                <Slash>{divider}</Slash>
              )}
          </Wrapper>
        )
      })}
    </InputBox>
  )
}
export default CardNumberInput
