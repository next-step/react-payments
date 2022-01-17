import { useCallback, useEffect, useRef, useState } from 'react'
import { Card } from 'src/types/card'

import { BasicInput, Input, InputBox, InputTitle, InputWarning } from '$components/common/Input'
import { checkLength, checkNumberString } from '$utils/validate'

interface CardExpireDateInputProps {
  cardExpireDate: Card['expireDate']
  setCardExpireDate: (expireDate: Card['expireDate']) => void
}

function CardExpireDateInput({ cardExpireDate, setCardExpireDate }: CardExpireDateInputProps) {
  const monthRef = useRef<HTMLInputElement>(null)
  const yearRef = useRef<HTMLInputElement>(null)
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [showsWarning, setWarning] = useState(false)

  const isValidInput = useCallback((value) => {
    if (checkLength(value, 0, 2) && checkNumberString(value)) {
      setWarning(false)
      return true
    }

    !checkNumberString(value) && setWarning(true)
    return false
  }, [])

  const handleMonthChange = useCallback(
    ({ target: { value } }) => {
      if (!isValidInput(value)) return
      if (value.length === 2) yearRef.current?.focus()
      if (Number(value) > 12) return setMonth('12')
      setMonth(value)
    },
    [isValidInput],
  )
  const handleYearChange = useCallback(
    ({ target: { value } }) => {
      if (!isValidInput(value)) return
      setYear(value)
    },
    [isValidInput],
  )
  useEffect(() => {
    setCardExpireDate({ month, year })
  }, [month, year, setCardExpireDate])

  useEffect(() => {
    const { month, year } = cardExpireDate

    setMonth(month)
    setYear(year)
  }, [cardExpireDate])

  return (
    <Input>
      <InputTitle>만료일</InputTitle>
      <InputBox className="w-50">
        <BasicInput type="text" value={month} onChange={handleMonthChange} ref={monthRef} placeholder="MM" />
        <BasicInput type="text" value={year} onChange={handleYearChange} ref={yearRef} placeholder="YY" />
      </InputBox>
      {showsWarning && <InputWarning>숫자만 입력가능해요</InputWarning>}
    </Input>
  )
}

export default CardExpireDateInput
