import { useCallback, useEffect, useRef, useState } from 'react'
import { Card } from 'src/types/card'

import { BasicInput, Input, InputBox, InputTitle, InputWarning } from '$components/common/Input'
import { checkLength, checkNumberString } from '$utils/validate'

interface CardNumberInputProps {
  cardNumber: Card['number']
  setCardNumber: (cardNumber: Card['number']) => void
}

function CardNumberInput({ cardNumber, setCardNumber }: CardNumberInputProps) {
  const ref1 = useRef<HTMLInputElement>(null)
  const ref2 = useRef<HTMLInputElement>(null)
  const ref3 = useRef<HTMLInputElement>(null)
  const ref4 = useRef<HTMLInputElement>(null)
  const [number1, setNumber1] = useState('')
  const [number2, setNumber2] = useState('')
  const [number3, setNumber3] = useState('')
  const [number4, setNumber4] = useState('')
  const [showsWarning, setWarning] = useState(false)

  const isValidInput = useCallback((value) => {
    if (checkLength(value, 0, 4) && checkNumberString(value)) {
      setWarning(false)
      return true
    }

    !checkNumberString(value) && setWarning(true)
    return false
  }, [])

  const handleNumber1Change = useCallback(
    ({ target: { value } }) => {
      if (!isValidInput(value)) return
      if (value.length === 4) ref2.current?.focus()
      setNumber1(value)
    },
    [isValidInput],
  )
  const handleNumber2Change = useCallback(
    ({ target: { value } }) => {
      if (!isValidInput(value)) return
      if (value.length === 4) ref3.current?.focus()
      setNumber2(value)
    },
    [isValidInput],
  )
  const handleNumber3Change = useCallback(
    ({ target: { value } }) => {
      if (!isValidInput(value)) return
      if (value.length === 4) ref4.current?.focus()
      setNumber3(value)
    },
    [isValidInput],
  )
  const handleNumber4Change = useCallback(
    ({ target: { value } }) => {
      if (!isValidInput(value)) return
      setNumber4(value)
    },
    [isValidInput],
  )

  useEffect(() => {
    setCardNumber([number1, number2, number3, number4])
  }, [number1, number2, number3, number4, setCardNumber])

  useEffect(() => {
    const [num1, num2, num3, num4] = cardNumber

    setNumber1(num1)
    setNumber2(num2)
    setNumber3(num3)
    setNumber4(num4)
  }, [cardNumber])

  return (
    <Input>
      <InputTitle>카드 번호</InputTitle>
      <InputBox>
        <BasicInput type="text" value={number1} onChange={handleNumber1Change} ref={ref1} placeholder="0000" />
        <BasicInput type="text" value={number2} onChange={handleNumber2Change} ref={ref2} placeholder="0000" />
        <BasicInput type="password" value={number3} onChange={handleNumber3Change} ref={ref3} placeholder="0000" />
        <BasicInput type="password" value={number4} onChange={handleNumber4Change} ref={ref4} placeholder="0000" />
      </InputBox>
      {showsWarning && <InputWarning>숫자만 입력가능해요</InputWarning>}
    </Input>
  )
}

export default CardNumberInput
