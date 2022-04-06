import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import styled from 'styled-components'

function CardExpiredDateFieldSet(props: any, ref: any) {
  const inputRef = useRef<any>({})
  useImperativeHandle(
    ref,
    () => {
      return {
        ...ref.current,
        focusCardExpiredField: () => {
          inputRef.current.expiredDateMonth.focus()
        },
      }
    },
    [ref]
  )
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldIndex = parseInt(e.target.name.split('-')[1], 10)
    if (fieldIndex === 0 && e.target.value.length >= 2) {
      inputRef.current.expiredDateYear.focus()
    }
    if (fieldIndex === 1 && e.target.value.length >= 2) {
      ref.current.focusOwnerName()
    }
  }
  return (
    <FieldSet>
      <Legend>만료일</Legend>
      <Box>
        <Input
          type="number"
          name="cardExpiredField-0"
          min={1}
          max={12}
          maxLength={2}
          placeholder="MM"
          onChange={handleChange}
          ref={(el) => (inputRef.current.expiredDateMonth = el)}
        />
        <Divider>/</Divider>
        <Input
          type="number"
          name="cardExpiredField-1"
          min={22}
          max={99}
          maxLength={2}
          placeholder="YY"
          onChange={handleChange}
          ref={(el) => (inputRef.current.expiredDateYear = el)}
        />
      </Box>
    </FieldSet>
  )
}

export default forwardRef(CardExpiredDateFieldSet)

const FieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  margin: 20px 0 8px;
`

const Legend = styled.legend`
  font-size: 12px;
  color: #525252;
  margin-bottom: 2px;
`

const Box = styled.span`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ecebf1;
  border-radius: 6px;
  border: 0;
  min-height: 45px;
`

const Input = styled.input`
  width: 22%;
  height: 24px;
  text-align: center;
  border: none;
  font-size: 15px;
  letter-spacing: 2px;
  color: #04c09e;
  background: #ecebf1;
`

const Divider = styled.span`
  color: #818181;
`
