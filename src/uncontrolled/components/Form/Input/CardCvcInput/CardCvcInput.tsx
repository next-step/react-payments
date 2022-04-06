import { useRef, forwardRef, useImperativeHandle, useState } from 'react'
import styled from 'styled-components'
import IconQuestionTip from 'uncontrolled/components/Icons/IconQuestionTip'
import VirtualKeypad from '../../VirtualKeypad'

function CardCvcInput(props = {}, ref: any) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isVirtualKeypad, setVirtualKeypad] = useState(false)
  useImperativeHandle(
    ref,
    () => {
      return {
        ...ref.current,
        focusCardCvcInput: () => {
          inputRef.current?.focus()
        },
      }
    },
    [ref]
  )
  const handleFocus = () => {
    if (!isVirtualKeypad) setVirtualKeypad(true)
  }
  const handleKeypadDown = (num: number) => {
    if (inputRef.current && inputRef.current.value.length >= 2) {
      ref.current.focusPasswordField()
      setVirtualKeypad(false)
    }
    if (inputRef.current && inputRef.current.value.length < 3) {
      inputRef.current.value += num.toString()
    }
  }
  const handleKeypadDelete = (fieldInfo: string) => {
    if (inputRef.current && inputRef.current.value.length > 0) {
      const cvcEl = inputRef.current
      const prevInputValueLength = cvcEl.value.length
      const slicedInputValue = cvcEl.value.substring(0, prevInputValueLength - 1)
      cvcEl.value = slicedInputValue
      if (cvcEl.value.length === 0) setVirtualKeypad(false)
    }
  }
  return (
    <Box>
      <Label>보안코드(CVC/CVV)</Label>
      <InputBlock>
        <Input type="password" name="cardCvc" maxLength={3} ref={inputRef} onFocus={handleFocus} />
        <IconQuestionTip />
        {isVirtualKeypad && (
          <VirtualKeypad onKeypadDown={handleKeypadDown} onKeypadDelete={handleKeypadDelete} />
        )}
      </InputBlock>
    </Box>
  )
}
export default forwardRef(CardCvcInput)

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 8px;
`

const Label = styled.label`
  font-size: 12px;
  color: #525252;
  margin-bottom: 2px;
`

const InputBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const Input = styled.input`
  background: #ecebf1;
  border-radius: 7px;
  height: 45px;
  color: #04c09e;
  padding: 0 12px;
  border: none;
`
