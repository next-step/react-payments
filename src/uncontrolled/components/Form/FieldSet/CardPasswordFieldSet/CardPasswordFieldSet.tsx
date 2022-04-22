import CircleDot from 'uncontrolled/components/Icons/CircleDot'
import styled from 'styled-components'
import React, { forwardRef, useRef, useImperativeHandle } from 'react'

function CardPasswordFieldSet(props: any, ref: any) {
  const inputRef = useRef<any>([])

  useImperativeHandle(
    ref,
    () => {
      return {
        ...ref.current,
        focusPasswordField: () => {
          inputRef.current[0].focus()
        },
      }
    },
    [ref]
  )

  const handleInputChange = ({ target: { value, name } }: React.ChangeEvent<HTMLInputElement>) => {
    const secondPasswordInput = inputRef.current[1]
    const fieldIndex = parseInt(name.split('-')[1], 10)
    if (value.length >= 1 && fieldIndex === 0) {
      secondPasswordInput.focus()
    }
    if (value.length >= 1 && fieldIndex === 1) {
      ref.current?.nextButton.focus()
    }
  }
  return (
    <FieldSet>
      <Legend>카드 비밀번호</Legend>
      <Box>
        <Input
          type="password"
          name="cardPasswordField-0"
          ref={(el) => (inputRef.current[0] = el)}
          onChange={handleInputChange}
          min={0}
          max={10}
          required
        />
        <Input
          type="password"
          name="cardPasswordField-1"
          ref={(el) => (inputRef.current[1] = el)}
          onChange={handleInputChange}
          min={0}
          max={10}
          required
        />
        <CircleDotBlock>
          <CircleDot backgroundColor="#04C09E" />
        </CircleDotBlock>
        <CircleDotBlock>
          <CircleDot backgroundColor="#04C09E" />
        </CircleDotBlock>
      </Box>
    </FieldSet>
  )
}

export default forwardRef(CardPasswordFieldSet)

const FieldSet = styled.fieldset`
  margin: 20px 0 8px;
  display: flex;
  flex-direction: column;
`

const Box = styled.span`
  display: flex;
  gap: 8px;
`

const Input = styled.input`
  width: 40px;
  height: 45px;
  background: #ecebf1;
  border-radius: 7px;
  border: none;
  text-align: center;
  font-size: 18px;
  color: #04c09e;
`

const Legend = styled.legend`
  font-size: 12px;
  color: #525252;
  float: left;
  margin-bottom: 4px;
`

const CircleDotBlock = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
`
