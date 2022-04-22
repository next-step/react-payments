import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import styled from 'styled-components'

function CardOwnerName(props = {}, ref: any) {
  const inputRef = useRef<HTMLInputElement>(null)

  useImperativeHandle(
    ref,
    () => {
      return {
        ...ref.current,
        focusOwnerName: () => {
          inputRef.current?.focus()
        },
      }
    },
    [ref]
  )
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      ref.current.focusCardCvcInput()
      e.preventDefault()
    }
  }
  return (
    <Box>
      <LabelBlock>
        <Label>카드 소유자 이름(선택)</Label>
        <OwnerNameLength>3 / 30</OwnerNameLength>
      </LabelBlock>
      <Input
        type="text"
        name="cardOwnerName"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        maxLength={30}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
    </Box>
  )
}
export default forwardRef(CardOwnerName)

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 8px;
`

const LabelBlock = styled.span`
  display: flex;
  justify-content: space-between;
`

const Label = styled.label`
  font-size: 12px;
  color: #525252;
  margin-bottom: 2px;
`

const OwnerNameLength = styled.span`
  font-size: 12px;
`

const Input = styled.input`
  background: #ecebf1;
  border-radius: 7px;
  height: 45px;
  color: #04c09e;
  padding: 0 12px;
  border: none;
`
