import React from 'react'
import styled from 'styled-components'

export const InputStyle = styled.span`
  > input {
    color: #94dacd;
    font-weight: 700;
    background-color: #ecebf1;
    height: 45px;
    width: 100%;
    text-align: center;
    outline: 2px solid transparent;
    outline-offset: 2px;
    border-color: #9ca3af;
    border: none;
    border-radius: 0.25rem;
  }
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
const DateInput = ({
  divider,
  inputs,
}: {
  divider: string
  inputs: React.ComponentPropsWithoutRef<'input'>[]
}) => {
  return (
    <div className="input-box w-50">
      {inputs.map((input, index) => {
        return (
          <Wrapper key={index}>
            <InputStyle>
              <input {...input} type="text" />
            </InputStyle>
            {index + 1 < inputs.length &&
              String(input.value).length === input.maxLength && (
                <span>{divider}</span>
              )}
          </Wrapper>
        )
      })}
    </div>
  )
}
export default DateInput
