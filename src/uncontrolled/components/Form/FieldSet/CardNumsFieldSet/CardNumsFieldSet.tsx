import { FieldSet } from 'controlled/components/Form/FieldSet'
import React, { useRef, forwardRef, useState } from 'react'
import VirtualKeypad from 'uncontrolled/components/Form/VirtualKeypad'
import useImperativeHandleCardNums from './useImperativeHandleCardNums'

const FIELD = {
  CARD_NUM_FIRST: 0,
  CARD_NUM_SECOND: 1,
  PASSWORD_FIRST: 2,
  PASSWORD_SECOND: 3,
}
const TOTAL_FIELD_LENGTH = Object.keys(FIELD).length

interface Props extends React.HTMLAttributes<HTMLFieldSetElement> {}

function CardNumsFieldSet(props: Props, fowardedRef: React.ForwardedRef<any>) {
  const [showFirstPasswordKeypad, setShowFirstPasswordKeypad] = useState(false)
  const [showSecondPasswordKeypad, setShowSecondPasswordKeypad] = useState(false)
  const inputRef = useRef<any>([])
  useImperativeHandleCardNums(fowardedRef, inputRef)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { maxLength, value, name } = e.target
    const [_, fieldIndexValue] = name.split('-')
    const fieldIndex = parseInt(fieldIndexValue)

    if (value.length >= maxLength && fieldIndex !== FIELD.PASSWORD_SECOND) {
      inputRef.current[fieldIndex + 1].focus()
    }
  }

  const handleKeypadDown =
    (num: number, fieldIndex: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
      const passwordInputEl = inputRef.current[fieldIndex]
      const prevValue = passwordInputEl.value

      if (passwordInputEl.value.length === TOTAL_FIELD_LENGTH) {
        setShowFirstPasswordKeypad(false)
        setShowSecondPasswordKeypad(false)
        return
      }
      if (fieldIndex === FIELD.PASSWORD_FIRST && passwordInputEl.value.length === 3) {
        passwordInputEl.value = prevValue + num
        inputRef.current[fieldIndex + 1].focus()
        setShowFirstPasswordKeypad(false)
        setShowSecondPasswordKeypad(true)
        return
      }
      if (fieldIndex === FIELD.PASSWORD_SECOND && passwordInputEl.value.length === 3) {
        passwordInputEl.value = prevValue + num
        setShowSecondPasswordKeypad(false)
        return
      }
      passwordInputEl.value = prevValue + num
    }

  const handleKeypadDelete = (fieldIndex: number) => () => {
    const passwordInputEl = inputRef.current[fieldIndex]
    const prevInputValueLength = passwordInputEl.value.length
    const slicedInputValue = passwordInputEl.value.substring(0, prevInputValueLength - 1)
    passwordInputEl.value = slicedInputValue
    if (fieldIndex === FIELD.PASSWORD_FIRST && slicedInputValue.length === 0) {
      setShowFirstPasswordKeypad(false)
    }
    if (fieldIndex === FIELD.PASSWORD_SECOND && slicedInputValue.length === 0) {
      inputRef.current[fieldIndex - 1].focus()
      setShowSecondPasswordKeypad(false)
    }
  }

  const handlePasswordKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Backspace') e.preventDefault()
  }

  const handlePasswordFocus = (fieldIndex: number) => () => {
    if (fieldIndex === FIELD.PASSWORD_FIRST && showFirstPasswordKeypad === false) {
      setShowFirstPasswordKeypad(true)
      setShowSecondPasswordKeypad(false)
    }
    if (fieldIndex === FIELD.PASSWORD_SECOND && showSecondPasswordKeypad === false) {
      setShowFirstPasswordKeypad(false)
      setShowSecondPasswordKeypad(true)
    }
  }
  return (
    <FieldSet legend="카드번호">
      <input
        type="number"
        name="cardNumField-0"
        ref={(el) => (inputRef.current[0] = el)}
        onChange={handleChange}
        maxLength={4}
        autoFocus
      />
      <input
        type="number"
        name="cardNumField-1"
        ref={(el) => (inputRef.current[1] = el)}
        onChange={handleChange}
        maxLength={4}
      />
      <input
        type="password"
        name="cardNumField-2"
        ref={(el) => (inputRef.current[2] = el)}
        onChange={handleChange}
        onKeyDown={handlePasswordKeyDown}
        onFocus={handlePasswordFocus(2)}
        maxLength={4}
      />
      {showFirstPasswordKeypad && (
        <VirtualKeypad
          onKeypadDown={handleKeypadDown}
          onKeypadDelete={handleKeypadDelete}
          fieldIndex={2}
        />
      )}
      <input
        type="password"
        name="cardNumField-3"
        ref={(el) => (inputRef.current[3] = el)}
        onChange={handleChange}
        onKeyDown={handlePasswordKeyDown}
        onFocus={handlePasswordFocus(3)}
        maxLength={4}
      />
      {showSecondPasswordKeypad && (
        <VirtualKeypad
          onKeypadDown={handleKeypadDown}
          onKeypadDelete={handleKeypadDelete}
          fieldIndex={3}
        />
      )}
    </FieldSet>
  )
}

export default forwardRef(CardNumsFieldSet)
