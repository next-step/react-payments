import React, { useRef, forwardRef, useState, useImperativeHandle } from 'react'
import styled from 'styled-components'
import VirtualKeypad from 'uncontrolled/components/Form/VirtualKeypad'

const FIELD = {
  CARD_NUM_FIRST: 0,
  CARD_NUM_SECOND: 1,
  PASSWORD_FIRST: 2,
  PASSWORD_SECOND: 3,
}
const TOTAL_FIELD_LENGTH = Object.keys(FIELD).length

interface Props extends React.HTMLAttributes<HTMLFieldSetElement> {}

function CardNumsFieldSet(props: Props, ref: any) {
  const [isFirstPasswordKeypad, setFirstPasswordKeypad] = useState(false)
  const [isSecondPasswordKeypad, setSecondPasswordKeypad] = useState(false)
  const inputRef = useRef<any>([])
  useImperativeHandle(
    ref,
    () => {
      const [first, second, third, fourth] = inputRef.current
      return {
        ...ref.current,
        getAllCardNums: () => {
          return [first.value, second.value, third.value, fourth.value]
        },
        getFirstAndSecondCardNums: () => {
          return [first.value, second.value]
        },
      }
    },
    [ref]
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { maxLength, value, name } = e.target
    const fieldIndex = parseInt(name.split('-')[1], 10)
    if (value.length >= maxLength && fieldIndex !== FIELD.PASSWORD_SECOND) {
      inputRef.current[fieldIndex + 1].focus()
    }
  }

  const handleKeypadDown = (num: number, fieldInfo: string) => {
    const fieldIndex = parseInt(fieldInfo.split('-')[1], 10)
    const passwordInputEl = inputRef.current[fieldIndex] as HTMLInputElement
    const prevValue = passwordInputEl.value
    if (passwordInputEl.value.length === TOTAL_FIELD_LENGTH) {
      setFirstPasswordKeypad(false)
      setSecondPasswordKeypad(false)
      return
    }
    if (fieldIndex === FIELD.PASSWORD_FIRST && passwordInputEl.value.length === 3) {
      passwordInputEl.value = prevValue + num
      inputRef.current[fieldIndex + 1].focus()
      setFirstPasswordKeypad(false)
      setSecondPasswordKeypad(true)
      return
    }
    if (fieldIndex === FIELD.PASSWORD_SECOND && passwordInputEl.value.length === 3) {
      passwordInputEl.value = prevValue + num
      ref.current.focusCardExpiredField()
      setSecondPasswordKeypad(false)
      return
    }
    passwordInputEl.value = prevValue + num
  }

  const handleKeypadDelete = (fieldInfo: string) => {
    const fieldIndex = parseInt(fieldInfo.split('-')[1], 10)
    const passwordInputEl = inputRef.current[fieldIndex]
    const prevInputValueLength = passwordInputEl.value.length
    const slicedInputValue = passwordInputEl.value.substring(0, prevInputValueLength - 1)
    passwordInputEl.value = slicedInputValue
    if (fieldIndex === FIELD.PASSWORD_FIRST && slicedInputValue.length === 0) {
      setFirstPasswordKeypad(false)
    }
    if (fieldIndex === FIELD.PASSWORD_SECOND && slicedInputValue.length === 0) {
      inputRef.current[fieldIndex - 1].focus()
      setSecondPasswordKeypad(false)
    }
  }

  const handlePasswordKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Backspace') e.preventDefault()
  }

  const handlePasswordFocus = (fieldIndex: number) => () => {
    if (fieldIndex === FIELD.PASSWORD_FIRST && isFirstPasswordKeypad === false) {
      setFirstPasswordKeypad(true)
      setSecondPasswordKeypad(false)
    }
    if (fieldIndex === FIELD.PASSWORD_SECOND && isSecondPasswordKeypad === false) {
      setFirstPasswordKeypad(false)
      setSecondPasswordKeypad(true)
    }
  }
  return (
    <FieldSet>
      <Legend>카드번호</Legend>
      <Box>
        <Input
          type="number"
          name="cardNumField-0"
          ref={(el) => {
            inputRef.current[0] = el
          }}
          onChange={handleChange}
          maxLength={4}
          max={9999}
          required
          autoFocus
        />
        <Input
          type="number"
          name="cardNumField-1"
          ref={(el) => {
            inputRef.current[1] = el
          }}
          onChange={handleChange}
          maxLength={4}
          max={9999}
          required
        />
        <Input
          type="password"
          name="cardNumField-2"
          ref={(el) => {
            inputRef.current[2] = el
          }}
          onChange={handleChange}
          onKeyDown={handlePasswordKeyDown}
          onFocus={handlePasswordFocus(2)}
          maxLength={4}
          max={9999}
          required
        />
        {isFirstPasswordKeypad && (
          <VirtualKeypad
            fieldInfo="cardNumField-2"
            onKeypadDown={handleKeypadDown}
            onKeypadDelete={handleKeypadDelete}
          />
        )}
        <Input
          type="password"
          name="cardNumField-3"
          ref={(el) => {
            inputRef.current[3] = el
          }}
          onChange={handleChange}
          onKeyDown={handlePasswordKeyDown}
          onFocus={handlePasswordFocus(3)}
          maxLength={4}
          max={9999}
          required
        />
        {isSecondPasswordKeypad && (
          <VirtualKeypad
            fieldInfo="cardNumField-3"
            onKeypadDown={handleKeypadDown}
            onKeypadDelete={handleKeypadDelete}
          />
        )}
      </Box>
    </FieldSet>
  )
}

export default forwardRef(CardNumsFieldSet)

const FieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  margin: 20px 0 8px;
`

const Box = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ecebf1;
  border-radius: 6px;
  border: 0;
  min-height: 45px;
`

const Legend = styled.legend`
  float: left;
  margin-bottom: 2px;
  font-size: 12px;
  color: #525252;
`

const Input = styled.input`
  width: 15%;
  height: 24px;
  background: #ecebf1;
  border: none;
  text-align: center;
  font-size: 15px;
  letter-spacing: 2px;
  color: #04c09e;
`
