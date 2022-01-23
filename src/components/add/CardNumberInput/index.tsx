import { createRef, useCallback, useEffect, useState } from 'react'
import { Card } from 'src/types/card'

import { BasicInput, Input, InputBox, InputTitle, InputWarning } from '$components/common/Input'
import { NUMBER_EACH_LENGTH } from '$constants/card'
import { checkLength, checkNumberString } from '$utils/validate'

interface CardNumberInputProps {
  cardNumber: Card['number']
  setCardNumber: (cardNumber: Card['number']) => void
}

function CardNumberInput({ cardNumber, setCardNumber }: CardNumberInputProps) {
  const refs = Array(4)
    .fill(null)
    .map(() => createRef<HTMLInputElement>())
  const [number, setNumber] = useState<{ 0: string; 1: string; 2: string; 3: string }>({
    0: cardNumber[0],
    1: cardNumber[1],
    2: cardNumber[2],
    3: cardNumber[3],
  })
  const [showsWarning, setWarning] = useState(false)

  const isValidInput = useCallback((value) => {
    if (checkLength(value, NUMBER_EACH_LENGTH.MIN, NUMBER_EACH_LENGTH.MAX) && checkNumberString(value)) {
      setWarning(false)
      return true
    }

    !checkNumberString(value) && setWarning(true)
    return false
  }, [])

  const handleNumberChange = useCallback(
    (index: keyof typeof number, value: string) => {
      if (!isValidInput(value)) return
      if (value.length === 4 && index < 3) refs[index].current?.focus()

      setNumber((prev) => ({ ...prev, [index]: value }))
    },
    [isValidInput, refs],
  )

  useEffect(() => {
    const changedCardNumber = Object.values(number).map((value) => value) as Card['number']
    setCardNumber(changedCardNumber)
  }, [number, setCardNumber])

  return (
    <Input>
      <InputTitle>카드 번호</InputTitle>
      <InputBox>
        <BasicInput
          type="text"
          value={number[0]}
          onChange={({ target: { value } }) => handleNumberChange(0, value)}
          ref={refs[0]}
          placeholder="0000"
        />
        <BasicInput
          type="text"
          value={number[1]}
          onChange={({ target: { value } }) => handleNumberChange(1, value)}
          ref={refs[1]}
          placeholder="0000"
        />
        <BasicInput
          type="password"
          value={number[2]}
          onChange={({ target: { value } }) => handleNumberChange(2, value)}
          ref={refs[2]}
          placeholder="0000"
        />
        <BasicInput
          type="password"
          value={number[3]}
          onChange={({ target: { value } }) => handleNumberChange(3, value)}
          ref={refs[3]}
          placeholder="0000"
        />
      </InputBox>
      {showsWarning && <InputWarning>숫자만 입력가능해요</InputWarning>}
    </Input>
  )
}

export default CardNumberInput
