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

const InputBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.375rem;
  color: #d3d3d3;
  border-radius: 0.25rem;
  background-color: #ecebf1;
  width: 50%;
`
const DateInput = ({
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
              <input {...input} type="text" />
            </InputStyle>
            {index + 1 < inputs.length &&
              String(input.value).length === input.maxLength && (
                <span>{divider}</span>
              )}
          </Wrapper>
        )
      })}
    </InputBox>
  )
}
export default DateInput
